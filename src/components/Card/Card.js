import React, { Component } from 'react';
import * as apiCalls from '../../apiCalls'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swornMembers: []
    }
  }

  addSwornMembers = () => {
    apiCalls.fetchSwornMembers(this.props.swornMembers)
      .then(swornMembers => this.setState({ swornMembers }))
  }

  render() {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = this.props;
    return(
      <div
        className='Card'
        onClick={this.addSwornMembers}
      >
        <h1>{name}</h1>
        <h2>{founded}</h2>
        <h3>{seats}</h3>
        <h4>{titles}</h4>
        <h5>{coatOfArms}</h5>
        <h6>{ancestralWeapons}</h6>
        <h6>{words}</h6>
      </div>
    )
  }
}

export { Card }
