import React from 'react'
import {useStateValue} from '../../context/index'
import Products from '../../components/Products/Products'

function Wishlist() {
 const [state,setState] = useStateValue()


 state.wishlist
 
  return (
    <div>
      {
        state.wishlist.length === 0 
        ?
        <div style={{textAlign: "center", margin: "100px"}}>
          <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
        </div>
        :
      <Products data={state.wishlist}/>
      }
    </div>
  )
}

export default Wishlist