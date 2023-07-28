import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import Join from './components/Join';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/todo/:username" element={<TodoApp />} />
      </Routes>
    </TodoProvider>
  );
}

export default App;
