import React from 'react'
import {ReactComponent as Food1} from '../../images/food1.svg'
import './card.css'
const Card = ({onClick}) => {
  return (
    <div className='CardWrapper' onClick={onClick}>
        <Food1 />
    </div>
  )
}

export default Card