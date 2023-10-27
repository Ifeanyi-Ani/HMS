import img1 from '../images/Union.png';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../context';

const DashboardLayout = () => {
  const { loggedin } = useContext(dataContext);

  console.log(loggedin);
  return loggedin ? (
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
  ) : (
    <div>Access denied login to gain access</div>
  );
};

export default DashboardLayout;
