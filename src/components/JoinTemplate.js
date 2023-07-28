import './TodoTemplate.scss';

const JoinTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">회원가입</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default JoinTemplate;
