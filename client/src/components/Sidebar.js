import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Navbar/Nav';
import { FaHome } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { AiFillMedicineBox } from 'react-icons/ai';
import { MdPeople } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

import img1 from '../../src/images/Union.png';

const Sidebar = () => {
  return (
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
        <p className="text-black font-semibold pointer-events-none">Medcine</p>
      </div>
      <div className="mb-6 px-2 py-1 flex flex-row gap-1">
        <MdPeople className="w-6 h-6 text-indigo-500" />

        <p className="text-black font-semibold pointer-events-none">patients</p>
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
  );
};
export default Sidebar;
