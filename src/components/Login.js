import React, { useState } from 'react';
import axios from '../../node_modules/axios/index';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8090/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };
  const onIdHandler = (e) => {
    setUsername(e.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>id</label>
        <input type="id" value={username} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <button formAction="">Login</button>
      </form>
    </div>
  );
};

export default Login;
