import React from "react";

const RepoDetails = ({ repoDetails, onClose }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 m-4">
      <h3 className="text-xl font-bold">{repoDetails.name}</h3>
      <p className="text-gray-600">{repoDetails.description}</p>
      {/* Add more details as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RepoDetails;
