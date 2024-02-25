"use client";

import React from "react";
import { useState, useEffect } from "react";
import AuthSession from "../../lib/authSession";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { Contract, ethers } from "ethers";
import abi from "../../artifacts/contracts/GitSplit.json";
import EthersContract from "../../lib/ethers-contract";

const Page = () => {
  const { address, connector, isConnected } = useAccount();
  const [Sess, setSess] = useState();
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const session = await AuthSession();
    console.log(session);
  };
  const handleLink = async (event) => {
    event.preventDefault();
    const GitSplitContract = await EthersContract(
      "0x36D67742029666A4a006Cd9D77dBF314DE2BEa40",
      abi.abi
    );
    try {
      const transaction = await GitSplitContract.assignAddressToUsername(
        "inciner8r",
        address
      );
      await transaction.wait();
      // const transaction = await GitSplitContract.usernameToAddress("inc1");
      console.log("Address assigned successfully");
    } catch (error) {
      console.error("Error assigning address to username:", error);
    }
    console.log(split);
    console.log(usernames);
  };
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="bg-slate-300 h-96 w-4/6 flex flex-col items-center p-9">
        <div className="font-bold text-2xl">
          Link Github Account with Wallet Address?
        </div>
        <div className="flex justify-between mt-10">
          <div className="mr-8">
            <div>Github Username</div>
            <div>inciner8r</div>
          </div>
          <div className="">
            <div>Wallet Address</div>
            <div>{address}</div>
          </div>
        </div>
        <button
          className="px-4 py-2 text-black bg-slate-400 hover:bg-blue-500 hover:text-white rounded-md mt-20"
          onClick={(e) => {
            handleLink(e);
          }}
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default Page;
