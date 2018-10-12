import React, { Component } from 'react';
import Table from './Table.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <p>Periodic Table</p>
        </div>

        <div className="App">
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
