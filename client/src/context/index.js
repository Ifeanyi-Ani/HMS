import React, { useState, useEffect } from 'react';

export const dataContext = React.createContext();
export const DataProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const dataValue = {
    show,
    setShow,
  };
  const [currentUser, setCurrentUser] = useState();
  return (
    <dataContext.Provider value={dataValue}>{children}</dataContext.Provider>
  );
};
export default DataProvider;
