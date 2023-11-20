import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import img1 from '../../images/Union.png';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../context';
import { toast } from 'react-toastify';
import { MoonLoader } from 'react-spinners';

import { useDispatch, useSelector } from 'react-redux';
import { loggedUser, signIn } from '../../redux/features/authSlice';
function Login() {
  const dispatch = useDispatch();
  const { isSuccess, isLoading, currentUser, message } =
    useSelector(loggedUser);

  const override = {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { show, setShow } = useContext(dataContext);
  const handleSubmit = e => {
    e.preventDefault();
    if (formData.email && formData.password) {
      dispatch(signIn(formData));
      if (message) {
        toast.error(message.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      toast.error('Please fill all the Input Field', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  useEffect(() => {
    if (isSuccess && currentUser != null) {
      toast.success('user login successfully');

      navigate(`/${currentUser.user?.role}`);
    }
    if (currentUser && currentUser != null) {
      navigate(`/${currentUser.user?.role}`);
    }
  }, [isSuccess, navigate]);
  return (
    <>
      <div className="w-[90%] mx-auto mt-10">
        <div className="flex justify-between mt-10 cursor-pointer">
          <img src={img1} class="w-[15%]" alt="" />
        </div>

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
              className={`outline-none rounded-xl p-2 w-[100%] mt-[50px] text-white font-bold ${
                isLoading ? 'bg-[rgba(23,37,84,.4)]' : 'bg-blue-950'
              }`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in' : 'Log in'}
            </button>
            <p className="text-blue-800 hover:underline cursor-pointer mt-5 mb-[140px] text-center">
              Forgot Password?
            </p>
          </div>
        </form>
      </div>
      {isLoading && (
        <div className="absolute top-0 right-0 rounded-2xl left-0 bottom-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
          <MoonLoader
            color="rgb(23,37,84)"
            loading={isLoading}
            cssOverride={override}
          />
        </div>
      )}
    </>
  );
}

export default Login;
