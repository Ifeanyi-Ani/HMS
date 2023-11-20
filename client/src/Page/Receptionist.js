import { MdPeople } from 'react-icons/md';

import { FaUserDoctor } from "react-icons/fa6";
import { RiDashboard3Line } from "react-icons/ri";
import { FaBedPulse } from "react-icons/fa6";
import { FaUserPlus } from 'react-icons/fa';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa6";
import { PiSignOutFill } from "react-icons/pi";
import { PiSignInFill } from "react-icons/pi";
import { RiChatSettingsLine } from "react-icons/ri";
import { FaHospitalUser } from "react-icons/fa";
import { MdFileCopy } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPrescriptionBottle } from "react-icons/fa6";
import { BsPhoneFlip } from "react-icons/bs";
import img1 from '../../src/images/Union.png';
import img2 from '../../src/images/pp.jpg';

import { FaUserPlus } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const Receptionist = () => {
  return (
    <>

      <aside className="fixed w-[350px] h-[650px] cursor-pointer overflow-y-scroll">
        <div className='flex flex-col'>
          <div className="m-auto w-[80%] p-10 border-b-2 border-solid border-[#dbdbdb]">
            <img src={img1} class="" alt="" />
          </div>
          <div className="m-auto w-[80%] p-10 border-b-2 border-solid border-[#dbdbdb] flex justify-between gap-4">
            <img src={img2} className="w-[30%] rounded-full border-2 border-gray-200" alt="" />
            <p className='mt-3 text-xl font-normal'>Receptionist</p>
          </div>

          <div className='m-auto w-[90%] pt-10'>
            <div className='border-1 border-solid bg-[rgb(0,106,96)] p-4 rounded-lg'>
              <Link><span className='text-white text-3xl flex gap-6'><RiDashboard3Line />
                <p className='text-xl font-normal text-white'>Dashboard</p></span></Link>
            </div>
            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><FaUserDoctor />
                <p className='text-xl font-normal'>Doctor</p></span></Link>
            </div>
            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><FaBedPulse />
                <p className='text-xl font-normal'>Patient</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><FaCalendarAlt />
                <p className='text-xl font-normal'>Doctor Schedule</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><FaRegCalendarCheck />
                <p className='text-xl font-normal'>Patient Appointment</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><MdOutlineFileCopy />
                <p className='text-xl font-normal'>Patient Case Studies</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><FaFilePrescription />
                <p className='text-xl font-normal'>Prescription</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-[rgb(0,106,96)] text-3xl flex gap-6 hover:text-white transition duration-300 ease-in-out'><PiSignInFill />
                <p className='text-xl font-normal'>Login Page</p></span></Link>
            </div>

            <div className='border-1 border-solid p-4 rounded-lg hover:bg-[rgb(0,106,96)] transition duration-300 ease-in-out text-white'>
              <Link><span className='text-3xl text-red-500 flex gap-6 hover:transition duration-300 ease-in-out'><PiSignOutFill />
                <p className='text-xl font-normal text-black'>Log Out</p></span></Link>
            </div>

          </div>
        </div>
      </aside>

      <main className="absolute w-[calc(100%-350px)] left-[350px] min-h-[100vh] overflow-hidden bg-[#eae7f0] ">
        <div className='m-6'>
          <h1 className='font-semibold text-[40px] text-[#31366e]'>DASHBOARD</h1>
        </div>
        <div className="p-[20px] grid grid-cols-3 gap-[30px] ">
          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Department</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">8</div>
            </div>
            <div className="text-[44px] bg-blue-500 p-4 rounded-lg text-white ">
              <RiChatSettingsLine className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Doctor</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">14</div>
            </div>
            <div className="text-[44px] bg-green-500 p-4 rounded-lg text-white ">
              <FaUserDoctor className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Patient</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">20</div>
            </div>
            <div className="text-[44px] bg-blue-500 p-4 rounded-lg text-white ">
              <FaHospitalUser className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Patient Appointment</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">5</div>
            </div>
            <div className="text-[44px] bg-yellow-500 p-4 rounded-lg text-white ">
              <FaCalendarAlt className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Patient Case Studies</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">0</div>
            </div>
            <div className="text-[44px] bg-yellow-500 p-4 rounded-lg text-white ">
              <MdFileCopy className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Invoice</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">0</div>
            </div>
            <div className="text-[44px] bg-blue-500 p-4 rounded-lg text-white ">
              <GiReceiveMoney className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Prescription</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">0</div>
            </div>
            <div className="text-[44px] bg-green-500 p-4 rounded-lg text-white ">
              <FaPrescriptionBottle className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>

          <Link className="bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div className=''>
              <div className="font-semibold text-[20px] text-[#4a4343]">Payment</div>
              <div className="text-[#000000] font-semibold text-[24px] mt-1">0</div>
            </div>
            <div className="text-[44px] bg-blue-500 p-4 rounded-lg text-white ">
              <BsPhoneFlip className='transform hover:scale-x-[-1] transition duration-300 ease-in-out' />
            </div>
          </Link>
        </div>

        <div className='bg-white p-[30px] rounded-[20px]  flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 w-[95%] m-auto'>
          <p className='p-4 text-lg'>Copyright © 2023 <span className='text-[#31366e] font-semibold'>Orbis Medical</span>. All rights reserved.</p>
        </div>


      </main>
    </>
  );
};
export default Receptionist;
