import { useContext } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
import TodoContext from './TodoContext';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  const navigate = useNavigate();
  const { loggedUsername, setLoggedUsername, setToken } =
    useContext(TodoContext);
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리 {loggedUsername} </div>
      <div className="content">{children}</div>
      <button
        onClick={() => {
          setLoggedUsername('');
          setToken('');
          navigate('/');
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default TodoTemplate;
