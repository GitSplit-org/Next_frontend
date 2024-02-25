"use client";

import React from "react";
import { Contract, ethers } from "ethers";
import abi from "../../../artifacts/contracts/GitSplit.json";
import { EIP1193Provider } from "viem";
import EthersContract from "../../../lib/ethers-contract";

const page = () => {
  const execTx = async () => {
    const GitSplitContract = await EthersContract(
      "0x36D67742029666A4a006Cd9D77dBF314DE2BEa40",
      abi.abi
    );
    try {
      // const transaction = await GitSplitContract.assignAddressToUsername(
      //   "tre",
      //   "0x49080ab7300500c1d6c823d8573ecbde62874d8a"
      // );
      const transaction = await GitSplitContract.usernameToAddress("inc1");
      console.log(transaction);
      console.log("Address assigned successfully");
    } catch (error) {
      console.error("Error assigning address to username:", error);
    }
  };
  return (
    <>
      <div className="h-100 w-screen flex items-center justify-center bg-slate-400">
        <button
          onClick={() => {
            execTx();
          }}
          className="border border-black m-2 py-1 px-3 bg-blue-600 text-white hover:text-slate-900"
        >
          ok
        </button>
      </div>
    </>
  );
};

export default page;
