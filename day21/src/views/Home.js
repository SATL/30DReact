import React, {Component} from 'react';

import {connect} from 'react-redux';
import { fetchNewTime } from './../redux/actionCreators';
const mapDispatchToProps = dispatch => ({
  updateTime: (opts={}) => dispatch(fetchNewTime(opts))
})

const Home = (props) => {
  return (
    <div className="uk-container">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime} className="uk-button uk-button-default" data-uk-scrollspy="cls:uk-animation-slide-left">
        Update time
      </button>
    </div>
  );

}

const mapStateToProps = state => {
  return {currentTime: state.currentTime.currentTime}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);