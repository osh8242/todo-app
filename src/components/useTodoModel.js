import { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할일 ${i}`,
    });
  }
  return array;
};

const reducer = (todos, action) => {
  switch (action.type) {
    case 'insert':
      return todos.concat(action.todo);
    case 'remove':
      return todos.filter((item) => item.id !== action.id);
    case 'check':
      // return todos.map((item) =>
      //   item.id === action.id ? { ...item, checked: !item.checked } : item,
      // );
      // 이진탐색
      console.time('check');
      let left = 0;
      let right = todos.length - 1;
      let targetIndex = -1;
      while (left <= right) {
        let index = Math.floor((left + right) / 2);
        if (todos[index].id === action.id) {
          targetIndex = index;
          break;
        } else if (todos[index].id > action.id) {
          right = index - 1;
        } else left = index + 1;
      }
      todos[targetIndex].checked = !todos[targetIndex].checked;
      console.timeEnd('check');
      return [...todos];
    default:
      return todos;
  }
};

const useTodoModel = () => {
  const [todos, dispatch] = useReducer(reducer, createBulkTodos());
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((value) => {
    const todo = {
      id: nextId.current++,
      title: value,
      checked: false,
    };
    dispatch({ type: 'insert', todo: todo });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'remove', id: id });
  }, []);

  const checkToggle = useCallback(
    (id) => dispatch({ type: 'check', id: id }),
    [],
  );

  return { todos: todos, actions: { onInsert, onRemove, checkToggle } };
};

export default useTodoModel;
