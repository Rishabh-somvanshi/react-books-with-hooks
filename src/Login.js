//useReducer
import React from 'react';
import './style.css';

export default function Login() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  function handleLogin() {
    dispatch({
      type: 'LOGIN',
      payload: {
        username: 'Reed',
      },
    });
  }
  function handleSignout() {
    dispatch({
      type: 'SIGNOUT',
    });
  }
  return (
    <>
      Current user: {state.username}
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignout}>Signout</button>
    </>
  );
}
