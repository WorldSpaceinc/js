import { GnosisSafeConnector } from "../../connectors/gnosis-safe";
import { useConnect } from "./useConnect";
import invariant from "tiny-invariant";
import { useAccount, useContext as useWagmiContext } from "wagmi";

/**
 * Hook for disconnecting the currently connected wallet
 *
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * The following will enable users to disconnect their wallet from the page.
 * ```javascript
 * import { useDisconnect } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const disconnect = useDisconnect()
 *
 *   return (
 *     <button onClick={disconnect}>
 *       Disconnect
 *     </button>
 *   )
 * }
 * ```
 *
 * Once users disconnect their wallet, the `useAddress`, `useChainId`, `useAccount`, and `useNetwork` hooks will no longer return values until a user connects their wallet again.
 *
 * @public
 */
export function useDisconnect(options?: { reconnectAfterGnosis?: boolean }) {
  const wagmiContext = useWagmiContext();
  invariant(
    wagmiContext,
    `useDisconnect() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own connection logic.`,
  );
  const optsWithDefaults = { ...{ reconnectAfterGnosis: true }, ...options };
  const [, connect] = useConnect();
  const [data, disconnect] = useAccount();

  return async () => {
    const previousConnector =
      (data.data?.connector instanceof GnosisSafeConnector &&
        data.data.connector.previousConnector) ||
      undefined;
    // if it's gnosis, just connect the previous connector
    if (optsWithDefaults.reconnectAfterGnosis && previousConnector) {
      try {
        return await connect(previousConnector);
      } catch (err) {
        console.error("failed to re-connect to previous connector", err);
        // if it fails for whatever reason just disconnect
        return disconnect();
      }
    }

    return disconnect();
  };
}
