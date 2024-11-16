import React from "react";
import "./Cart.scss";
import { useStateValue } from "../../context/index";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const [state, dispatch] = useStateValue();
  console.log(state);

  return (
    <>
    {
      state.cart.length ?
      <main>
      <section className="cart">
        <h2 className="cart__title">Cart</h2>
      </section>
      {state?.cart?.map((item) => (
        <div className="container">

          <div key={item.id} className="cart__wrapper">
            <div className="cart">
              <div className="cart__img">
              <img src={item.url} alt="" />
              </div>
              <div className="inf">
                <h3 className="cart__inf">{item.title}</h3>
                <p className="cart__price">{item.price}</p>
              </div>
              <div className="descs">
                <p className="cart__desc">
                  Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В;
                  S4; XS;
                </p>
                <p className="cart__desc">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
              </div>
              <div className="btns">
                <button
                  className="btn"
                  disabled={item.amount <= 1}
                  onClick={() => dispatch({ type: "DEC_CART", payload: item })}
                  >
                  -
                </button>
                <span className="cart__amount">{item.amount}</span>
                <button
                  className="btn"
                  onClick={() => dispatch({ type: "ADD_CART", payload: item })}
                  >
                  +
                </button>
              </div>
              <div className="icon">
                <button onClick={()=> dispatch({type: "REMOVE_CART",payload: item})}><FaRegTrashAlt/></button>  
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
    : 
    <div className="cart__image">
      <img src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp" alt="" />
    </div>
    }
      </>
  );
}

export default Cart;
