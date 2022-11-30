import React, { useEffect } from 'react'
import onePiece from './../asset/images/one-piece.jpg'

export const Card = (props) => {
  return (
    <div className='card-img'>
      <img src={`${process.env.REACT_APP_IMG_PATH}/${props.movie.poster_path}`} />
      <div className='shadow-card'></div>
      <div className='desc-card text-light'>
        {/* <p>Episode 1109</p> */}
        <h5>{props.movie.title}</h5>
      </div>
    </div>
  )
}
