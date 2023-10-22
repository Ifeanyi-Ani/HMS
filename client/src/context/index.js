import React, { useState, useEffect } from 'react';
import API from '../api/base';
export const dataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const dataValue = {
    show,
    setShow,
  };
  const [currentUser, setCurrentUser] = useState();
  const profile = localStorage.getItem('profile');
  const signIn = async formData => {
    const response = await API.post('/login', formData);
    const data = response.data;
    setCurrentUser(data);
  };

  return (
    <dataContext.Provider value={dataValue}>{children}</dataContext.Provider>
  );
};
export default DataProvider;
