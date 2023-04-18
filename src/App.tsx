import React from 'react';
import './App.css';
import User from './component/User';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          Home is now here
        </li>
        <li>
          Sign In
        </li>
        <li>
          Sign out
        </li>
      </ul>
      <User></User>
    </div>
  );
}

export default App;
