import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  // grabs the shared state from AuthContext
  const { authTokens, setAuthTokens } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const cookies = new Cookies();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(username, password);

    try {
      const response = await axios.post('/login', {
        username,
        password,
      });
      setAuthTokens(response.data.accessToken);
      setAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };
  // Calls serverless function in ibm cloud
  // useEffect(() => {
  //   const serverless = async () => {
  //     const r = await axios.get('https://42fa1d20.us-south.apigw.appdomain.cloud/test/helloworld');
  //     console.log(r);
  //   };
  //   serverless();
  // }, []);

  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem('tokens'));
    // setAuthTokens(token);
    // console.log(authTokens);
    if (authenticated) {
      // setAuthTokens(token);
      const c = cookies.get('token');
      // console.log(document.cookie);
      axios.defaults.headers.common.Authorization = `Token ${c}`;
      history.push('/home');
    }
  }, [authenticated]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
