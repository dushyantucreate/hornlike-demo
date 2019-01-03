import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/global.scss';
import Button from '../src/component/Button/index'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Edit <code>src/App.js</code> and save to reload.
          </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Button />
        </header>
      </div>
    );
  }
}

export default App;
