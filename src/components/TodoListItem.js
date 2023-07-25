import cn from 'classnames';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoListItem = ({ todo, style }) => {
  const { title, checked } = todo;
  const { actions } = useContext(TodoContext);

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', { checked })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text" onClick={(e) => actions.checkToggle(todo.id)}>
            {title}
          </div>
        </div>
        <div className="remove" onClick={(e) => actions.onRemove(todo.id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
