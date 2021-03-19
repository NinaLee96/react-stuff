import React, { createContext, useState } from 'react';

// use AuthContext to get state in components
export const AuthContext = createContext();

// use AuthProvider to wrap components, allowing state to be shared
export const AuthProvider = (props) => {
  const [authTokens, setAuthTokens] = useState();
  const [username, setUsername] = useState();

  const handleLogout = () => {
    localStorage.clear('token');
    setAuthTokens('');
  };

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    // shares states/variables that are passed with children
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens: setTokens,
        username,
        setUsername,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
