import { useCallback } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from '../../node_modules/classnames/index';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, checkToggle }) => {
  const { title, checked } = todo;

  const onClick = useCallback((e) => {
    onRemove(todo);
  }, []);

  const onClickCheck = useCallback((e) => {
    checkToggle(todo);
  }, []);

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text" onClick={onClickCheck}>
          {todo.title}
        </div>
      </div>
      <div className="remove" onClick={onClick}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
