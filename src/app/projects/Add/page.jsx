"use client"
import { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [socialMedia1, setSocialMedia1] = useState('');
  const [socialMedia2, setSocialMedia2] = useState('');
  const [socialMedia3, setSocialMedia3] = useState('');
  const [image, setImage] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const maxWordCount = 200;

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
    if (words.length <= maxWordCount) {
      setDescription(text);
    } else {
      setDescription(words.slice(0, maxWordCount).join(' '));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      projectName,
      description,
      githubLink,
      socialMedia1,
      socialMedia2,
      socialMedia3,
      image
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Submit Your Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
          <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="5"
            maxLength="1000" // Optionally, set a max length
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <p className="text-sm text-gray-500">{wordCount}/{maxWordCount} words</p>
        </div>
        <div className="mb-4">
          <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">GitHub Link</label>
          <input type="text" id="githubLink" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div className="mb-4">
          <label htmlFor="socialMedia1" className="block text-sm font-medium text-gray-700">Social Media Link 1</label>
          <input type="text" id="socialMedia1" value={socialMedia1} onChange={(e) => setSocialMedia1(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="socialMedia2" className="block text-sm font-medium text-gray-700">Social Media Link 2</label>
          <input type="text" id="socialMedia2" value={socialMedia2} onChange={(e) => setSocialMedia2(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="socialMedia3" className="block text-sm font-medium text-gray-700">Social Media Link 3</label>
          <input type="text" id="socialMedia3" value={socialMedia3} onChange={(e) => setSocialMedia3(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;
