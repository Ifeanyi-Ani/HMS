import React from 'react';
import Sidebar from './Sidebar';

const Patient = () => {
  const data = [
    {
      name: 'John Doe',
      address: '123 Main St',
      ailment: 'Fever',
      cure: 'Medicine A',
    },
    {
      name: 'Jane Smith',
      address: '456 Elm St',
      ailment: 'Headache',
      cure: 'Medicine B',
    },
    {
      name: 'Alice Johnson',
      address: '789 Oak St',
      ailment: 'Cough',
      cure: 'Medicine C',
    },
    {
      name: 'Bob Wilson',
      address: '101 Pine St',
      ailment: 'Back Pain',
      cure: 'Medicine D',
    },
    {
      name: 'Eva Davis',
      address: '202 Maple St',
      ailment: 'Allergies',
      cure: 'Medicine E',
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="w-full pt-10 px-4 py-2">
        <table className="w-6 divide-y divide-gray-200 ">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ailment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cure
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.ailment}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.cure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Patient;
