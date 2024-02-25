"use client";

import Layout from "@/components/layout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RepoCard from "./[project]";
const page = () => {
  return (
    <>
      <Layout />
      <div className="flex flex-wrap">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
};

export default page;
