import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js';
import ClapCounter from './components/ClapCounter.js'

class App extends Component {
  render() {
    return (
      <div className="demo">
        <ClapCounter/>
        <Header title="App"/>
      </div>
    );
  }
}

export default App;
