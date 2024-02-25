// pages/funding.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const transactions = [
  {
    id: 1,
    name: 'John Doe',
    amount: 500,
    project: 'Project A',
  },
  {
    id: 2,
    name: 'Jane Smith',
    amount: 750,
    project: 'Project B',
  },
  // Add more transactions as needed
];

const Funding = () => {
  const [balance, setBalance] = useState(10000); // Initial balance
  const totalFunding = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  const withdrawBalance = () => {
    // Withdraw the balance
    alert(`Withdrawing $${balance}`);
    setBalance(0); // For demonstration, set balance to 0 after withdrawal
  };

  return (
    <div>
      {/* Upper part with background image */}
      <div className="bg-cover bg-center h-64 flex items-center justify-center py-8" style={{ backgroundImage: "url('https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <h1 className="text-3xl font-bold text-white">Funding Overview</h1>
      </div>

      {/* Lower part with content */}
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg -mt-16">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Total Funding:</h2>
              <p className="text-2xl font-bold text-blue-500">${totalFunding}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Balance:</h2>
              <p className="text-2xl font-bold text-green-500">${balance}</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2">ID</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Amount</th>
                <th className="border border-gray-200 px-4 py-2">Project</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border border-gray-200 px-4 py-2">{transaction.id}</td>
                  <td className="border border-gray-200 px-4 py-2">{transaction.name}</td>
                  <td className="border border-gray-200 px-4 py-2">${transaction.amount}</td>
                  <td className="border border-gray-200 px-4 py-2">{transaction.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={withdrawBalance}
          >
            Withdraw Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funding;
