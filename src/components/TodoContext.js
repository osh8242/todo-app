import useTodoModel from './useTodoModel';

const { createContext } = require('react');

const TodoContext = createContext({
  state: { todos: [] },
  actions: {
    onInsert: () => {},
    onRemove: () => {},
    checkToggle: () => {},
  },
});

const TodoProvider = ({ children }) => {
  const { todos, actions } = useTodoModel();

  const value = {
    todos: todos,
    actions: actions,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoConsumer, TodoProvider };

export default TodoContext;
