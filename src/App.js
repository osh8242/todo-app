import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 500; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할일 ${i}`,
    });
  }
  return array;
};

function App() {
  const [todos, setTodos] = useState(createBulkTodos());
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((value) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current++,
        title: value,
        checked: false,
      }),
    );
  }, []);

  const onRemove = useCallback(
    (todo) => (todos) => setTodos(todos.filter((item) => item.id !== todo.id)),
    [],
  );

  const checkToggle = useCallback((todo) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, checked: !item.checked } : item,
      ),
    );

    //옛날 방식 for 문
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) {
    //     let newTodos = todos;
    //     newTodos[i].checked = !todos[i].checked;
    //     setTodos([...newTodos]);
    //   }
    // }
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} checkToggle={checkToggle} />
    </TodoTemplate>
  );
}

export default App;
