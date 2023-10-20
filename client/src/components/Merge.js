import React from 'react';
import { Link } from 'react-router-dom';
// import Nav from './Navbar/Nav';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { AiFillMedicineBox } from 'react-icons/ai';
import { MdPeople } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';

import DoctorList from './DoctorList';
import Patient from './Patient';

import img1 from '../../src/images/Union.png';




function Merge() {

    return (
        <div className="w-full flex h-screen">
            <div>
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
                    <div className='logo pt-3'>
                        <img src={img1} class="" alt="" />
                    </div>
                    <div className="mb-6 px-2 py-1 pt-10 flex flex-row gap-1">
                        <FaHome className="w-6 h-6 text-indigo-500" />
                        <p className="text-black pointer-events-none font-semibold rounded-lg">Home</p>
                    </div>

                    <div className="mb-6 px-2 py-1 rounded-md flex flex-row gap-1">
                        <GrUserWorker className="w-6 h-6 text-indigo-500" />
                        <Link to='/employees' ><p className="text-black font-semibold pointer-events-none">Employees</p></Link>

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
                        <p className="text-black font-semibold pointer-events-none">Bed Allotment</p>
                    </div>
                    <div className="mb-6 px-2 py-1 flex flex-row gap-1">
                        <GiNotebook className="w-6 h-6 text-indigo-500" />
                        <p className="text-black font-semibold pointer-events-none">Appointments</p>
                    </div>
                </aside>
            

            </div>
            <div>
                <div>
                    <header className="w-100 bg-white shadow-lg pt-2 pb-2">
                        <div className="container mx-auto py-1">
                            <div className="flex items-center justify-between">
                                {/* Search Bar */}
                                <div className="w-1/3">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
                                    />
                                </div>

                                {/* Notification Bar */}
                                <div className="w-1/3 text-center">
                                    {/* Notification content goes here */}
                                </div>

                                {/* Login/Logout Button */}
                                <div className=" text-right flex flex-row gap-3">
                                    <IoMdNotificationsOutline className="w-6 h-6 text-indigo-500" />
                                    <button className="px-2 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-500">
                                        Login/LogOut
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
        
                </div>
                <div>
                    <div className="bg-slate-100 w-100 bg-gray-200">

                        <div className='flex justify-evenly pt-10	'>
                            <div className="bg-white w-40	 rounded-lg p-4  ">
                                <div className="text-black text-3xl font-bold">42</div>
                                <div className="text-black text-sm">New Patients</div>
                            </div>
                            <div className="bg-white w-40 rounded-lg p-4 ">
                                <div className="text-black text-3xl font-bold">42</div>
                                <div className="text-black text-sm">Our Doctors</div>
                            </div>
                            <div className="bg-white w-40 rounded-lg p-4 ">
                                <div className="text-black text-3xl font-bold">42</div>
                                <div className="text-black text-sm">Todays Operation</div>
                            </div>
                            <div className="bg-white w-40 rounded-lg p-4 ">
                                <div className="text-black text-3xl font-bold">42</div>
                                <div className="text-black text-sm">Hospital Earning</div>
                            </div>
                        </div>
                        {/* <div class="grid gap-3 grid-cols-2 grid-rows-2">
                            <Patient />
                            <DoctorList />
                        </div> */}


                    </div>

                
                </div>
            </div>

        </div>
    )
};
export default Merge;