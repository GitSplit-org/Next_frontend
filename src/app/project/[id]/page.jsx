"use client";
import Image from "next/image";
import Link from "next/link";
import project01 from "/src/assets/wallhaven.jpg";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Contract, ethers } from "ethers";
import abi from "../../../artifacts/contracts/GitSplit.json";
import EthersContract from "../../../lib/ethers-contract";
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const Profile = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [ProjectData, setProjectData] = useState();
  const [RepoData, setRepoData] = useState();
  const [Contributors, setContributors] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [IsDonating, setIsDonating] = useState(false);
  const [amount, setAmount] = useState("");

  const fetchRepoData = async (url) => {
    try {
      const urlParts = url.split("/");
      const owner = urlParts[3]; // GitSplit-org
      const repo = urlParts[4]; // Next_frontend
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}`
      );
      setRepoData(response.data);
      const responseContributors = await axios.get(
        response.data.contributors_url
      );
      const contributorsData = responseContributors.data;
      // Calculate total number of commits
      const totalCommits = contributorsData.reduce(
        (total, contributor) => total + contributor.contributions,
        0
      );

      // Calculate percentage of contribution for each contributor
      const contributorsWithPercentage = contributorsData.map(
        (contributor) => ({
          login: contributor.login,
          contributions: contributor.contributions,
          percentage: (
            (contributor.contributions / totalCommits) *
            100
          ).toFixed(2),
        })
      );
      setContributors(contributorsWithPercentage);
    } catch (error) {
      console.error("Error fetching repository data:", error);
      setRepoData(null);
    }
  };
  const fetchProject = async (id) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/project?id=${id}`);
      const responseData = await response;
      setProjectData(responseData.data.data);
      //setIsLoading(false);
      await fetchRepoData(responseData.data.data.url);
      setIsLoading(false);
    } catch (error) {
      console.error("error:", error);
    }
  };
  useEffect(() => {
    fetchProject(id);
  }, []);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const split = [];
    const usernames = [];
    Contributors.forEach((contributor) => {
      const splitAmount = ((contributor.percentage / 100) * amount).toFixed(2);
      console.log(splitAmount);
      split.push(ethers.utils.parseEther(splitAmount));
      usernames.push(contributor.login);
    });
    const GitSplitContract = await EthersContract(contractAddress, abi.abi);
    try {
      console.log(amount);
      const transaction = await GitSplitContract.deposit(usernames, split, {
        value: ethers.utils.parseEther(amount),
      });
      await transaction.wait();
      // const transaction = await GitSplitContract.usernameToAddress("inc1");
      console.log(transaction);
      console.log("Address assigned successfully");
    } catch (error) {
      console.error("Error assigning address to username:", error);
    }
    console.log(split);
    console.log(usernames);
  };
  if (IsLoading) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div
        className="h-40 bg-cover pl-5 pt-5 bg-center bg-gray-600"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        {/* Profile Picture */}
        <div className="mx-auto mt-16">
          <img
            src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      {!IsDonating && (
        <div className="container mx-auto py-12 pt-20">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{ProjectData.name}</h1>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Facebook</span>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{ProjectData.description}</p>
            </div>
            <div className="bg-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold mb-2">Contributors</h2>
              <ul>
                {Contributors.map((contribution, index) => (
                  <li
                    key={index}
                    className="flex items-center py-2 border-b border-gray-300"
                  >
                    <div>
                      <p className="font-semibold">{contribution.login}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button
              className="px-4 py-2 text-white bg-slate-800 hover:bg-blue-500 rounded-md"
              onClick={() => {
                setIsDonating(true);
              }}
            >
              Donate
            </button>
          </div>
        </div>
      )}
      {IsDonating && (
        <div className="container mx-auto py-12 pt-20">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{ProjectData.name}</h1>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Facebook</span>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    <span className="mr-1"> Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">{ProjectData.description}</p>
            </div>
            <div className="bg-gray-200 px-6 py-4 flex flex-col items-center justify-center">
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col justify-center items-center mb-20">
                  <label className="text-xl mb-6">
                    Enter Amount to Donate:
                  </label>

                  <input
                    className="p-2 bg-none border-none"
                    type="number"
                    value={amount}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="px-4 py-2 text-black bg-slate-400 hover:bg-blue-500 hover:text-white rounded-md"
                  type="submit"
                >
                  Donate
                </button>
              </form>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <button
              className="px-4 py-2 text-white bg-slate-800 hover:bg-blue-500 rounded-md"
              onClick={() => {
                setIsDonating(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Profile;
