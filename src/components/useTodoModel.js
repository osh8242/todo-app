import { useCallback, useEffect, useReducer } from 'react';
import axios from '../../node_modules/axios/index';

// const createBulkTodos = () => {
//   const array = [];
//   for (let i = 1; i <= 100000; i++) {
//     array.push({
//       id: i,
//       checked: i % 3 === 0,
//       title: `리액트의 기초 알아보기 할일 ${i}`,
//     });
//   }
//   return array;
// };

const reducer = (todos, action) => {
  switch (action.type) {
    case 'load':
      return action.todos;
    case 'insert':
      return todos.concat(action.todo);
    case 'remove':
      console.time('timeRemove');

      //필터 사용
      // return todos.filter((item) => item.id !== action.id);

      //이진탐색 사용
      const removeIndex = binarySearch(todos, action.id);
      todos.splice(removeIndex, 1);
      console.timeEnd('timeRemove');
      return [...todos];

    case 'check':
      console.time('timeCheck');

      //맵 사용
      // return todos.map((item) =>
      //   item.id === action.id ? { ...item, checked: !item.checked } : item,
      // );

      // 이진탐색 사용
      const checkIndex = binarySearch(todos, action.id);
      todos[checkIndex].checked = !todos[checkIndex].checked;
      console.timeEnd('timeCheck');
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
  const [todos, dispatch] = useReducer(reducer, []);
  //const nextId = useRef(todos.length + 1);
  const url = 'http://localhost:8070';

  useEffect(() => {
    axios.get(url + '/todoList').then((response) => {
      let todos = response.data;
      todos = todos.map((item) =>
        item.checked === 'N'
          ? { ...item, checked: false }
          : { ...item, checked: true },
      );
      dispatch({ type: 'load', todos: todos });
    });
  }, []);

  const onInsert = useCallback((value) => {
    const todo = {
      //id: nextId.current++,
      title: value,
      checked: 'N',
      delete_yn: 'N',
    };
    axios.post(url + '/todoInsert', todo).then((response) => {
      const id = response.data;
      if (id > 0)
        dispatch({ type: 'insert', todo: { ...todo, id: id, checked: false } });
      else console.log('삽입 실패');
    });
  }, []);

  const onRemove = useCallback((id) => {
    console.log('id', id, '삭제요청');
    axios.delete(url + '/todoDelete', { data: { id: id } }).then((response) => {
      const result = response.data;
      console.log('삭제됨', result);
      if (result > 0) dispatch({ type: 'remove', id: id });
      else console.log('삭제 실패');
    });
  }, []);

  const checkToggle = useCallback((todo) => {
    todo = todo.checked ? { ...todo, checked: 'N' } : { ...todo, checked: 'Y' };
    axios.put(url + '/todoUpdate', todo).then((response) => {
      const result = response.data;
      if (result > 0) dispatch({ type: 'check', id: todo.id });
    });
  }, []);

  return { todos: todos, actions: { onInsert, onRemove, checkToggle } };
};

export default useTodoModel;
