import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// We'll load our views from the `src/views` directory
import Home from '../views/Home';
import About from '../views/About';
import {Paginator} from '../components/Paginator';
import {Pokemon, PokemonLoader} from '../components/Pokemon';

import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About}/>
        <Route
          path="/pokemon"
          render={props => {
          return (<Paginator  render={id => React.createElement(PokemonLoader(Pokemon), {id: id})} />)
        }}/>
        <Route path="*" component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;