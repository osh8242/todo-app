import { useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const JoinForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    console.log(user);
    axios.post('http://localhost:8090/api/v1/join', user).then((response) => {
      console.log(response);
    });
  };
  const onIdHandler = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordCheckHandler = (e) => {
    setPasswordCheck(e.target.value);
  };

  return (
    <div className="LoginContainer">
      <form onSubmit={onSubmitHandler}>
        <label>username </label>
        <input
          type="username"
          value={username}
          onChange={onIdHandler}
          required
        />
        <br />
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={onPasswordHandler}
          required
        />
        <br />
        <label>Password Check </label>
        <input
          type="passwordCheck"
          value={passwordCheck}
          onChange={onPasswordCheckHandler}
          required
        />
        <br />
        <button>Join</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
