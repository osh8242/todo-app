import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, list, onRemove, checkToggle }) => {
  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];
    console.log('rowRenderer 호출! index : ' + index);
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        checkToggle={checkToggle}
        style={style}
      ></TodoListItem>
    );
  };
  return (
    // <div className="TodoList">
    //   {todos.map((todo) => {
    //     return (
    //       <TodoListItem
    //         todo={todo}
    //         key={todo.id}
    //         onRemove={onRemove}
    //         checkToggle={checkToggle}
    //       ></TodoListItem>
    //     );
    //   })}
    // </div>
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
