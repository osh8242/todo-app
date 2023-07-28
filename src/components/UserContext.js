const { createContext, useState } = require('react');

const UserContext = createContext({
  state: { username: '' },
  actions: {
    login: () => {},
    logout: () => {},
  },
});

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const value = {
    state: { username: username },
    actions: {
      login: (username) => {
        setUsername(username);
      },
      logout: () => {
        setUsername('');
      },
    },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserConsumer, UserProvider };

export default UserContext;
