import { showDeprecationWarning } from "../../utils/deprecation-warning";
import { useContract } from "../async/contracts";
import { Edition } from "@thirdweb-dev/sdk/dist/declarations/src/contracts/prebuilt-implementations/edition";

/**
 * Hook for getting an instance of an `Edition` contract. This contract is used to interface with ERC1155 compliant NFTs.
 * @param contractAddress - the address of the Edition contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useEdition } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const edition = useEdition("<YOUR-CONTRACT-ADDRESS>")
 *
 *   // Now you can use the edition contract in the rest of the component
 *
 *   // For example, this function will return all the NFTs on this contract
 *   async function getNFTs() {
 *     const nfts = await edition.getAll()
 *     return nfts
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated use `useContract()` instead
 */
export function useEdition(contractAddress?: string) {
  showDeprecationWarning("useEdition()", "useContract<Edition>()");
  return useContract<Edition>(contractAddress).contract;
}
