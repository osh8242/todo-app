import './App.css';
import { TodoProvider } from './components/TodoContext';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
