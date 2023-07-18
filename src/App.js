import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import useModel from './components/useModel';

const createBulkTodos = () => {
  console.log('더미데이터 생성!!');
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
  const [todos, onInsert, onRemove, checkToggle] = useModel(createBulkTodos());

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} checkToggle={checkToggle} />
    </TodoTemplate>
  );
}

export default App;
