import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import useModel from './components/useModel';

function App() {
  const [todos, onInsert, onRemove, checkToggle] = useModel();

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} checkToggle={checkToggle} />
    </TodoTemplate>
  );
}

export default App;
