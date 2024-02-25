import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const RepoDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    // Fetch detailed information for the selected repository
    if (slug) {
      fetch(`https://api.github.com/repos/${slug}`)
        .then((response) => response.json())
        .then((data) => setRepoDetails(data))
        .catch((error) => console.error("Error fetching repo details:", error));
    }
  }, [slug]);
  const [repoDetails, setRepoDetails] = useState(null);
  if (!repoDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-white rounded-md shadow-md p-4 m-4">
      <h3 className="text-xl font-bold">{repoDetails.name}</h3>
      <p className="text-gray-600">{repoDetails.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RepoDetailsPage;
