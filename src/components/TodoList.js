import { useContext } from 'react';
import { List } from 'react-virtualized';
import TodoContext from './TodoContext';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todos, actions } = useContext(TodoContext);
  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];
    //console.log('rowRenderer 호출! index : ' + index);
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={() => actions.onRemove(todo.id)}
        checkToggle={() => actions.checkToggle(todo.id)}
        style={style}
      ></TodoListItem>
    );
  };
  return (
    <List
      className="TodoList"
      width={512}
      height={512}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
};

export default TodoList;
