import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">로그인</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
