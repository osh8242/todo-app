import useTodoModel from './useTodoModel';

const { createContext, useState } = require('react');

const TodoContext = createContext({
  state: { todos: [], loggedUsername: '', token: '' },
  actions: {
    onInsert: () => {},
    onRemove: () => {},
    checkToggle: () => {},
    setLoggedUsername: () => {},
    setToken: () => {},
  },
});

const TodoProvider = ({ children }) => {
  const { todos, token, loggedUsername, actions } = useTodoModel();

  const value = {
    todos: todos,
    loggedUsername: loggedUsername,
    token: token,
    actions: actions,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoConsumer, TodoProvider };

export default TodoContext;
