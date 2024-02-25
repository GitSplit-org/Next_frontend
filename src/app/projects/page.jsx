"use client";
// pages/projects.js
import React from "react";
import Image from "next/image";
import project01 from "/src/assets/wallhaven.jpg";
import project02 from "/src/assets/zyvwyy.jpg";
import project03 from "/src/assets/jxyopy.jpg";
import project04 from "/src/assets/sunset-over-a-forest-lake-bright-colors-colorful-grass-flowers-setting-sun-clouds-in-the-styl-397835753.png";
import { useState, useEffect } from "react";
import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import Link from "next/link";

const Projects = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [ProjectsData, setProjectsData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/projects`);
      const responseData = await response;
      console.log("response:", responseData.data.data);
      setProjectsData(responseData.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("error:", error);
    }
  };
  const ProjectCard = ({ name, image, description, id }) => {
    return (
      <Link
        key={id}
        className="bg-white rounded-lg shadow-lg p-4"
        href={{
          pathname: `/project/page`,
          query: {
            id: id,
          },
        }}
      >
        <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    );
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for ${searchTerm}`);
  };
  if (isLoading) {
    return <>Loading</>;
  }
  return (
    <div className="container mx-auto py-8">
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>

      <div className="container mx-auto mt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-10 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg lg:w-80 focus:outline-none"
              placeholder="Search term..."
            />
          </div>
          {searchTerm && (
            <div className="mt-10 text-2xl">Search term: {searchTerm}</div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
