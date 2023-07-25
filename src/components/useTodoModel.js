import { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 100000; i++) {
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
      //필터 사용
      //return todos.filter((item) => item.id !== action.id);

      //이진탐색 사용
      console.time('check');
      const removeIndex = binarySearch(todos, action.id);
      todos.splice(removeIndex, 1);
      console.timeEnd('check');
      return [...todos];

    case 'check':
      //맵 사용
      // return todos.map((item) =>
      //   item.id === action.id ? { ...item, checked: !item.checked } : item,
      // );

      // 이진탐색 사용
      console.time('check');
      const checkIndex = binarySearch(todos, action.id);
      todos[checkIndex].checked = !todos[checkIndex].checked;
      console.timeEnd('check');
      return [...todos];
    default:
      return todos;
  }
};

//이진탐색 함수
const binarySearch = (todos, id) => {
  let left = 0;
  let right = todos.length - 1;
  let index = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (todos[mid].id === id) {
      index = mid;
      break;
    } else if (todos[mid].id > id) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return index;
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
