import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Home } from './Home';
import { Login } from './Login';
import React from 'react';
import './style.css';
import { Search } from './Search';

export default function App() {
  return (
    <div className="App">
      <header>Books with Hooks</header>
      <Search />
      <Login />
    </div>
  );
}
