/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useContext, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Login from './components/Login';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Home from './components/Home';
import NotFound from './components/Notfound';

import './App.css';

function App() {
  const { authTokens } = useContext(AuthContext);
  const history = useHistory();
  const cookies = new Cookies();

  useEffect(() => {
    console.log(authTokens);
    // figure out what if statement does
    if (authTokens) {
      console.log('does it run this useeffect');
      // setCookie(`Bearer=${authTokens}`);
      cookies.set('token', authTokens, { path: '/' });
      // console.log('token=', cookies.get('token'));
      axios.defaults.headers.common.Authorization = `Bearer ${authTokens}`;
      console.log(axios.defaults.headers.common.Authorization);
      history.push('/home');
    }
  }, [authTokens]);
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path={['/home', '/']} component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
