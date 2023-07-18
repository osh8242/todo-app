import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, checkToggle }) => {
  const { title, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text" onClick={(e) => checkToggle(todo)}>
          {title}
        </div>
      </div>
      <div className="remove" onClick={(e) => onRemove(todo)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
