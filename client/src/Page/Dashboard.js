import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';
import { GlobalContext } from '../components/context/GlobalContext';
import Employees from '../components/Employees';
import Pharmacy from '../components/Pharmacy';

const Dashboard=()=> {
  const {Page1, SetPage1, Page2, SetPage2, Page3, SetPage3, Page4, SetPage4, Page5, SetPage5, Page6, SetPage6} = useContext(GlobalContext)
  return (
    <div className="flex h-screen">
      <div className=" display: flex; ">
         {/* <h4>DASHBOARD (Admin)</h4> */}
         <Sidebar />
      </div>
        
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
       <div className={Page1}> <Content /></div>
       <div className={Page2}><Employees /></div>
       <div className={Page3}> <Pharmacy /> </div>
       <div className={Page4}> <p>Boy</p> </div>
       <div className={Page5}> <p>Girls</p> </div>
       <div className={Page6}> <p>Girls</p> </div>
      </div>
    </div>
  );
}

export default Dashboard;