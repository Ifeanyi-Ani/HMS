import React from 'react';
import Sidebar from './Sidebar';

import { FaHome } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { AiFillMedicineBox } from 'react-icons/ai';
import { MdPeople } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import img1 from '../../src/images/Union.png';
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
      <aside className=" h-screen w-60 pt-15 pl-5">
        {/* Logo */}
        {/* <div className="mb-6">
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="w-16 h-16 mx-auto"
        />
      </div> */}

        {/* Home Section */}
        <div className="logo pt-3">
          <img src={img1} alt="" />
        </div>
        <div className="mb-6 px-2 py-1 pt-10 flex flex-row gap-1">
          <FaHome className="w-6 h-6 text-indigo-500" />
          <p className="text-black pointer-events-none font-semibold rounded-lg">
            Home
          </p>
        </div>

        <div className="mb-6 px-2 py-1 rounded-md flex flex-row gap-1">
          <GrUserWorker className="w-6 h-6 text-indigo-500" />
          <p className="text-black font-semibold pointer-events-none">
            Employees
          </p>
        </div>
        <div className="mb-6 px-2 py-1 flex flex-row gap-1 ">
          <AiFillMedicineBox className="w-6 h-6 text-indigo-500" />
          <p className="text-black font-semibold pointer-events-none">
            Medcine
          </p>
        </div>
        <div className="mb-6 px-2 py-1 flex flex-row gap-1">
          <MdPeople className="w-6 h-6 text-indigo-500" />

          <p className="text-black font-semibold pointer-events-none">
            patients
          </p>
        </div>
        <div className="mb-6 px-2 py-1 flex flex-row gap-1">
          <FaBed className="w-6 h-6 text-indigo-500" />
          <p className="text-black font-semibold pointer-events-none">
            Bed Allotment
          </p>
        </div>
        <div className="mb-6 px-2 py-1 flex flex-row gap-1">
          <GiNotebook className="w-6 h-6 text-indigo-500" />
          <p className="text-black font-semibold pointer-events-none">
            Appointments
          </p>
        </div>
      </aside>
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
