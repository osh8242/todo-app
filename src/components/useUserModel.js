import { useReducer } from 'react';

const reducer = (state, action) => {};

const useUserModel = () => {
  const [loggedUsername, dispatch] = useReducer(reducer, '');

  return <div></div>;
};

export default useUserModel;
