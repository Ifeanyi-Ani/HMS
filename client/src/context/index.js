import React, { useState, useEffect } from 'react';
import API from '../api/base';
export const dataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const [currentUser, setCurrentUser] = useState();
  const profile = localStorage.getItem('profile');
  const [loggedin, setLoggedin] = useState(false);
  const checkProfle = () => {
    if (profile) {
      let user = JSON.parse(profile);
      setCurrentUser(user);
      setLoggedin(true);
    }
  };
  const signIn = async formData => {
    try {
      const response = await API.post('/login', formData);
      const data = response.data;
      setCurrentUser(data);
      setLoggedin(true);
      localStorage.setItem('profile', JSON.stringify({ ...data }));
    } catch (err) {
      alert(err?.response?.data?.message);
    }
  };
  useEffect(function () {
    checkProfle();
  }, []);
  const dataValue = {
    show,
    setShow,
    currentUser,
    signIn,
    loggedin,
  };
  return (
    <dataContext.Provider value={dataValue}>{children}</dataContext.Provider>
  );
};
export default DataProvider;
