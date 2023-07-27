import React, { useReducer } from 'react';

const reducer = (state, action) => {};

const useUserModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    username: '',
    password: '',
  });

  return <div></div>;
};

export default useUserModel;
