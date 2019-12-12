import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import playersActions from './redux/players/actions';
import clubsActions from './redux/clubs/actions';

window.store = store;

playersActions.add('Sadio Mane');
// clubsActions.add('FC Liverpool')
// playersActions.reset()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
