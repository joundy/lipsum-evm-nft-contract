import  { MerkleTree } from "merkletreejs";
import { ethers } from "hardhat";

export function getTree(elements) {
  const tree = new MerkleTree(elements, ethers.utils.keccak256, {
    sortPairs: true,
  });

  const root = tree.getHexRoot();
  return { tree, root };
}

export function getProof(tree, leaf) {
  return tree.getHexProof(leaf);
}
