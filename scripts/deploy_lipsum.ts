import { ethers } from "hardhat";

async function main() {
  const Lipsum = await ethers.getContractFactory("Lipsum");
  const lipsum = await Lipsum.deploy();
  await lipsum.deployed();

  console.log(`Successfully deployed to ${lipsum.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

