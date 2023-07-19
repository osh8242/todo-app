import cn from 'classnames';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, checkToggle, style }) => {
  const { title, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', { checked })}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text" onClick={(e) => checkToggle(todo.id)}>
            {title}
          </div>
        </div>
        <div className="remove" onClick={(e) => onRemove(todo.id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
