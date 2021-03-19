import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useContext(AuthContext);
  // console.log(authTokens);
  return (
    <Route
      {...rest}
      render={(props) => (authTokens ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default ProtectedRoute;
