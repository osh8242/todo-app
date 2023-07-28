import { useContext, useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import './LoginForm.scss';
import TodoContext from './TodoContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { actions } = useContext(TodoContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    console.log(user);
    axios.post('http://localhost:8090/login', user).then((response) => {
      const token = response.headers['authorization'];
      actions.setToken(token);
      actions.setLoggedUsername(username);
      navigate('/todo/' + username);
    });
  };
  const onIdHandler = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="LoginContainer">
      <form onSubmit={onSubmitHandler}>
        <label>username</label>
        <input
          type="username"
          value={username}
          onChange={onIdHandler}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={onPasswordHandler}
          required
        />
        <br />
        <button>Login</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/join');
          }}
        >
          Join Us
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
