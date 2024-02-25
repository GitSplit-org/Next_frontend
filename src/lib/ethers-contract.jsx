import React from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const EthersContract = async (contractAddress, abi) => {
  const options = new WalletConnectProvider({
    rpc: {
      137: "https://eth-sepolia.g.alchemy.com/v2/awVRjx6xE-B13CviFzuXd2hZBv-gg-pg",
    },
    rpcUrl:
      "https://eth-sepolia.g.alchemy.com/v2/awVRjx6xE-B13CviFzuXd2hZBv-gg-pg",
  });

  const web3Modal = new Web3Modal({
    network: "mumbai",
    package: WalletConnectProvider,
    options: options,
    cacheProvider: true,
  });
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

export default EthersContract;
