import React from 'react'
import rasm from "../../assets/404.png"
import "./Error.scss"


function Error() {
  return (
    <div className='error'>
      <img src={rasm} alt="" />
      <p>Похоже, ничего не нашлось :(</p>
    </div>
  )
}

export default Error