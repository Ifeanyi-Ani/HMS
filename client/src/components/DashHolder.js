import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Content from '../components/Content';

const DashHolder = () => {
  return (
    <div className="flex h-screen">
      <div className=" display: flex; ">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default DashHolder;
