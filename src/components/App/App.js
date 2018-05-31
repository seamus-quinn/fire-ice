import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { 
  populateHouses
} from '../../actions';
import * as apiCalls from '../../apiCalls'
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {

  componentDidMount() {
    apiCalls.fetchData()
      .then(data => this.props.populateHouses(data))
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  populateHouses: (houses) => dispatch(populateHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
