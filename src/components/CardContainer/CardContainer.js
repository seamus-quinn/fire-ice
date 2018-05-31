import React from 'react';
import { connect } from 'react-redux';
import loading from '../../assets/wolf.gif'
import { Card } from '../Card/Card'

const CardContainer = (props) => {
  if(!props.houses.length){
    return(
      <div>
        <img src={loading} alt='a wolf running majestically' />
      </div>
    )
  }
  const cards = props.houses.map((house, index) => {
    return (
      <Card key={index} {...house}/>
    )
  })
  return (
    <div className='Container'>
      {cards}
    </div>
  )
}

const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer)