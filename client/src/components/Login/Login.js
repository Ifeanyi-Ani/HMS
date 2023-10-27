import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';
import React, { useState, useContext } from 'react';
import img1 from '../../images/Union.png';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../context';
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { show, setShow, currentUser, signIn } = useContext(dataContext);
  const handleSubmit = e => {
    e.preventDefault();
    signIn(formData);
    navigate(`${currentUser?.user?.role}`);
  };
  console.log(currentUser);
  return (
    <div
      className="h-[100%] fixed top-0 l-0 z-[1000] justify-center w-[100%] bg-custom-black"
      onClick={() => setShow(false)}
    >
      <div
        className="w-[30%] mx-auto bg-white p-[10px] rounded-2xl "
        onClick={e => e.stopPropagation()}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between mt-10 cursor-pointer">
            <img src={img1} class="w-[15%]" alt="" />
            <span className="w-[5%] icon transform scale-125">
              <AiOutlineClose onClick={() => setShow(false)} />
            </span>
          </div>
          {/* <div className="mt-[50px] flex flex-col cursor-pointer">
            <p className="mb-4 text-gray-400 font-bold">
              Already have an account?
            </p>
            <p className="text-xl text-blue-900 font-bold "> Log In</p>
          </div> */}
          <form className="my-[50px]">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-sm text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-2 bg-inherit outline-none rounded-xl p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm text-gray-500 mb-1">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border-2 bg-inherit outline-none rounded-xl p-2"
              />
            </div>
            <div className="flex flex-col">
              <button
                className="bg-blue-950 outline-none rounded-xl p-2 w-[100%] mt-[50px] text-white font-bold"
                onClick={handleSubmit}
              >
                Log In
              </button>
              <p className="text-blue-800 hover:underline cursor-pointer mt-5 mb-[140px] text-center">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
