import { MdPeople } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <>
      <aside className="fixed w-[300px] h-full overflow-hidden shadow-lg ring-1 ring-gray-100 ring-inset">
        <ul className="absolute top-0 left-0 w-full">
          <li className="w-full list-none rounded-[30px] hover:bg-gray-50">
            <Link className="flex w-full">
              <span className="block min-w-[60px] h-[60px] text-center">
                <MdPeople className="text-[1.75rem]" />
              </span>
              <span className="block h-[60px] text-start whitespace-nowrap">
                Users
              </span>
            </Link>
          </li>
        </ul>
      </aside>

      <main className="absolute w-[calc(100%-300px)] left-[300px] min-h-[100vh] overflow-hidden ">
        <div className="w-full h-full p-[20px] grid grid-cols-4 gap-[30px]">
          <Link className="bg-white p-[30px] rounded-[20px] flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div>
              <div className="font-semibold text-[2.5rem]">56</div>
              <div className="text-[#222] text-[1.1rem] mt-1">User's</div>
            </div>
            <div className="text-[3.5rem]">
              <MdPeople />
            </div>
          </Link>
          <Link className="bg-white p-[30px] rounded-[20px] flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div>
              <div className="font-semibold text-[2.5rem]">New</div>
              <div className="text-[#222] text-[1.1rem] mt-1">User's</div>
            </div>
            <div className="text-[3.5rem]">
              <FaUserPlus />
            </div>
          </Link>
          <Link className="bg-white p-[30px] rounded-[20px] flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div>
              <div className="font-semibold text-[2.5rem]">56</div>
              <div className="text-[#222] text-[1.1rem] mt-1">User's</div>
            </div>
            <div className="text-[3.5rem]">
              <MdPeople />
            </div>
          </Link>
          <Link className="bg-white p-[30px] rounded-[20px] flex justify-between cursor-pointer shadow-md ring-1 ring-inset ring-gray-300 hover:shadow-none hover:ring-0">
            <div>
              <div className="font-semibold text-[2.5rem]">56</div>
              <div className="text-[#222] text-[1.1rem] mt-1">User's</div>
            </div>
            <div className="text-[3.5rem]">
              <MdPeople />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Admin;
