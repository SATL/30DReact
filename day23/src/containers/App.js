import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// We'll load our views from the `src/views` directory
import Home from '../views/Home';
import About from '../views/About';
import {Paginator} from '../components/Paginator';
import {Pokemon, PokemonLoader} from '../components/Pokemon';

import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const Loader = () => {
  return (
    <div className="uk-flex uk-flex-center">
      <div data-uk-spinner={''}></div>
    </div>
  )
}

const App = (props) => {
  return (
    <Paginator
      render={(id, actions) => (
      <div>
        <ul className="uk-pagination uk-flex-center">
          <li>
            <a href="" onClick={actions.decrement}>
              <span data-uk-pagination-previous={''}></span>
            </a>
          </li>
          <li>
            <a href="" onClick={actions.increment}>
              <span data-uk-pagination-next={''}></span>
            </a>
          </li>
        </ul>
        {
      React.createElement(PokemonLoader(Pokemon), {
        id: id,
        renderLoading: <Loader/>
      })
    }
      </div>
      )}/>
  )
}

export default App;