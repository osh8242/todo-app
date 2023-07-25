import { useContext, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import TodoContext from './TodoContext';
import './TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const inputBox = useRef();

  const { actions } = useContext(TodoContext);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    inputBox.current.focus();
    actions.onInsert(value);
    setValue('');
    return false;
  };

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit} ref={inputBox}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
          required
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
