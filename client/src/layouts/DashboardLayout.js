import img1 from '../images/Union.png';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div className="fixed w-[100%] top-0 p-0  bg-white z-20">
        <nav className="w-[100%] h-12 shadow-md text-center max-sm">
          <div className="flex justify-between w-[90%] mx-auto  mt-4  ">
            <div className="text-base">
              <img src={img1} class="" alt="" />
            </div>
          </div>
        </nav>
      </div>

      <div className="flex h-screen">
        <div className=" display: flex; "></div>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
