import React from 'react';
import DoctorList from './DoctorList';
import Patient from '../Page/Patient';

const Content = () => {
  return (
    <div className="bg-slate-100 w-100 bg-gray-200">
      <div className="flex justify-evenly pt-10	">
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
      <div class="grid gap-3 grid-cols-2 grid-rows-2">
        <Patient />
        <DoctorList />
      </div>
    </div>
  );
};

export default Content;
