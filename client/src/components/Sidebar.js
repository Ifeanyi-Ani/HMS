import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Navbar/Nav';
import { FaHome } from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { AiFillMedicineBox } from 'react-icons/ai';
import { MdPeople } from 'react-icons/md';
import { FaBed  } from 'react-icons/fa';
import { GiNotebook  } from 'react-icons/gi';

import img1 from '../../src/images/Union.png';
import { GlobalContext } from './context/GlobalContext';

const Sidebar = () => {

  const {Page1, setPage1, Page2, setPage2, Page3, setPage3, Page4, setPage4, Page5, setPage5, Page6, setPage6} = useContext(GlobalContext);
  console.log(Page1,Page2);
  function ActivatePageOne(){
    if(Page1 !== "on"){
      setPage1("on")
      setPage2("off")
      setPage3("off")
      setPage4("off")
      setPage5("off")
      setPage6("off")
    }
  }
  function ActivatePageTwo(){
    if(Page2 !== "on"){
      setPage2("on")
      setPage1("off")
      setPage3("off")
      setPage4("off")
      setPage5("off")
      setPage6("off")
    }
  }
  function ActivatePageThree(){
    if(Page3 !== "on"){
      setPage2("off")
      setPage1("off")
      setPage3("on")
      setPage4("off")
      setPage5("off")
      setPage6("off")
    }
  }
  function ActivatePageFour(){
    if(Page4 !== "on"){
      setPage2("off")
      setPage1("off")
      setPage3("off")
      setPage4("on")
      setPage5("off")
      setPage6("off")
    }
  }
  function ActivatePageFive(){
    if(Page5 !== "on"){
      setPage2("off")
      setPage1("off")
      setPage3("off")
      setPage4("off")
      setPage5("on")
      setPage6("off")
    }
  }
  function ActivatePageSix(){
    if(Page6 !== "on"){
      setPage2("off")
      setPage1("off")
      setPage3("off")
      setPage4("off")
      setPage5("off")
      setPage6("on")
    }
  }
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
      <div className='logo pt-3'>
          <img src={img1} alt="" />
      </div>
      <div className="mb-6 px-2 py-1 pt-10 flex flex-row gap-1" onClick={ActivatePageOne}>
        <FaHome  className="w-6 h-6 text-indigo-500"/>
        <p className="text-black pointer-events-none font-semibold rounded-lg">Home</p>
      </div>

      <div className="mb-6 px-2 py-1 rounded-md flex flex-row gap-1" onClick={ActivatePageTwo}>
      <GrUserWorker  className="w-6 h-6 text-indigo-500"/>
      <p className="text-black font-semibold pointer-events-none">Employees</p>   
        
      </div>
      <div className="mb-6 px-2 py-1 flex flex-row gap-1 " onClick={ActivatePageThree}>
      <AiFillMedicineBox  className="w-6 h-6 text-indigo-500"/>
        <p className="text-black font-semibold pointer-events-none">Medcine</p>
      </div>
      <div className="mb-6 px-2 py-1 flex flex-row gap-1" onClick={ActivatePageFour}>
        <MdPeople  className="w-6 h-6 text-indigo-500"/>
        
        <p className="text-black font-semibold pointer-events-none">patients</p>
      </div>
      <div className="mb-6 px-2 py-1 flex flex-row gap-1" onClick={ActivatePageFive}>
      <FaBed className="w-6 h-6 text-indigo-500"/>
        <p className="text-black font-semibold pointer-events-none">Bed Allotment</p>
      </div>
      <div className="mb-6 px-2 py-1 flex flex-row gap-1" onClick={ActivatePageSix}>
      <GiNotebook  className="w-6 h-6 text-indigo-500"/>
        <p className="text-black font-semibold pointer-events-none">Appointments</p>
      </div>
    </aside>
  );
}
export default Sidebar
