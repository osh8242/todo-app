import { useCallback, useReducer, useRef } from 'react';

const reducer = (todos, action) => {
  switch (action.type) {
    case 'insert':
      console.log('리듀서 insert!!');
      console.log('action.todo', action.todo);
      return todos.concat(action.todo);
    case 'remove':
      console.log('리듀서 remove!!');
      console.log('action.todo', action.todos);
      return action.todos;
    case 'check':
      console.log('리듀서 check!!');
      console.log('action.todo', action.todos);
      return action.todos;
    default:
      return todos;
  }
};

const useModel = (initData) => {
  const [todos, dispatch] = useReducer(reducer, initData);
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback(
    (value) => {
      const todo = {
        id: nextId.current++,
        title: value,
        checked: false,
      };
      dispatch({ type: 'insert', todo: todo });
    },
    [nextId],
  );

  const onRemove = useCallback(
    (todo) => {
      const newTodos = todos.filter((item) => item.id !== todo.id);
      dispatch({ type: 'remove', todos: newTodos });
    },
    [todos],
  );

  const checkToggle = useCallback(
    (todo) => {
      const newTodos = todos.map((item) =>
        item.id === todo.id ? { ...item, checked: !item.checked } : item,
      );
      dispatch({ type: 'check', todos: newTodos });
    },
    [todos],
  );

  return [todos, onInsert, onRemove, checkToggle];
};

export default useModel;
