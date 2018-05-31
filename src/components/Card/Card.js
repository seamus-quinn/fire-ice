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
    if(!this.state.swornMembers.length){
      apiCalls.fetchSwornMembers(this.props.swornMembers)
        .then(swornMembers => this.setState({ swornMembers }))
    } else {
      this.setState({ swornMembers: []})
    }
  }

  render() {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = this.props;

    const members = this.state.swornMembers.map((member, index) => {
      return <span key={index}>{member.name}, </span>
    })

    const titleDisplay = titles.map((title, index) => {
      return <span key={index}>{title}, </span>
    })

    return(
      <div
        className='Card'
        onClick={this.addSwornMembers}
      >
        <h1>{name}</h1>
        <h2>{founded}</h2>
        <p>Seats: {seats}</p>
        <p>Titles: {titleDisplay}</p>
        <p>Coat of Arms: {coatOfArms}</p>
        <p>Ancestral Weapons: {ancestralWeapons}</p>
        <p>Motto: {words}</p>
        <p>{members}</p>
      </div>
    )
  }
}

export { Card }
