import { useCallback, useReducer, useRef } from 'react';

const reducer = (todos, action) => {
  switch (action.type) {
    case 'insert':
      return todos.concat(action.todo);
    case 'remove':
      return action.todos;
    case 'check':
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

  const onRemove = useCallback((todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    dispatch({ type: 'remove', todos: newTodos });
  }, []);

  const checkToggle = useCallback((todo) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, checked: !item.checked } : item,
    );
    dispatch({ type: 'check', todos: newTodos });
  }, []);

  return [todos, onInsert, onRemove, checkToggle];
};

export default useModel;
