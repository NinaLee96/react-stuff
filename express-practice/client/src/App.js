import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import appStyles from './App.module.css';

function App() {
  const [users, setUsers] = useState();
  const [age, setAge] = useState();
  const [name, setName] = useState();
  //make sure to deploy backend first before frontend
  //two ways to hit the endpoint of container on openshift

  //1.
  // var host = process.env.REACT_APP_COMPONENT_BACKEND_HOST || 'localhost';
  // var port = process.env.REACT_APP_COMPONENT_BACKEND_PORT || 8000;
  // const make_url = "http://" + host + ":" + port ;

  // const url = "/users";
  //2.
  // const test = "http://express-test.apps-crc.testing/users"
  
  //When running the docker, proxy doesn't work, use endpoint given from docker container

  const getUsers = () => {
    console.log("/users");
    fetch("/users")
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(res => {
        console.log(res)
        setUsers(res)
      })
      .catch(err => err)
  }

  const handleSubmit = (event) => {
    // event.preventDefault();

    console.log(name);
    //when using fetch for POST, include headers
    //stringify the object as well
    fetch("http://localhost:9000/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
      })
    })
    .then(res => {
      console.log(res)
      res.json()
    })
    .catch(err => console.log(err))
    
  }

  useEffect(() => {
    getUsers();
    
  }, [])

  return (
    <div className={appStyles.App}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter a name" 
          onChange={e => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Enter your age" 
          onChange={e => setAge(e.target.value)} 
        />
        <input type="submit"/>
      </form>
     
      {users ? users.map(user => 
        (<p key={user._id}><span style={{fontWeight: 600}}>Names: </span>{user.name} <br/><span style={{fontWeight: 600}}>Age: </span>{user.age}</p>
      )) : null} 
    </div>
  );
}

export default App;
