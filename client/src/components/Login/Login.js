import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import img1 from '../../images/Union.png';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../context';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { loggedUser, signIn } from '../../redux/features/authSlice';
function Login() {
  const dispatch = useDispatch();
  const { isSuccess, isLoading, currentUser, message } =
    useSelector(loggedUser);

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
    if (isSuccess) {
      toast.success('user login successfully');
      navigate('/admin');
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
    </>
  );
}

export default Login;
