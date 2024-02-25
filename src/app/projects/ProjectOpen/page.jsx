import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ProjectPage = () => {
  const project = {
    name: "Sample Project",
    image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at blandit risus.",
    contributionsCount: 5,
    contributions: [
      {
        name: "John Doe",
        image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "2024-02-25",
        amount: "$50"
      },
      {
        name: "Jane Smith",
        image: "https://via.placeholder.com/50",
        date: "2024-02-24",
        amount: "$30"
      },
      // Add more contributions as needed
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div
        className="h-40 bg-cover pl-5 pt-5 bg-center bg-gray-600"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
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

      <div className="container mx-auto py-12 pt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  instagram
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  facebook
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  twitter
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold mb-2">Contributions ({project.contributionsCount})</h2>
            <ul>
              {project.contributions.map((contribution, index) => (
                <li key={index} className="flex items-center py-2 border-b border-gray-300">
                  <img src={contribution.image} alt={contribution.name} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{contribution.name}</p>
                    <p className="text-gray-600">{contribution.date}</p>
                    <p className="text-gray-600">{contribution.amount}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default ProjectPage;
