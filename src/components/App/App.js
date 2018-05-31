import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { 
  fakeAction, 
  populateHouses
} from '../../actions';
import * as apiCalls from '../../apiCalls'
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {

  componentDidMount() {
    const houses = apiCalls.fetchData().then(data => data);
    console.log(houses, 'houses')
    // this.props.populateHouses(houses);
    return houses;
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  populateHouses: (houses) => dispatch(populateHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
