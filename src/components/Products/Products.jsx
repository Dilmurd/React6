import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Products.scss";
import { useStateValue } from "../../context";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

function Products({ data }) {
  const [state, dispatch] = useStateValue();

  const items = data?.map((pro) => (
    <div key={pro.id} className="ok">
      <div className="pro__card">
        <img src={pro.url} alt="" className="pro__img" />
        <button
          onClick={() => dispatch({ type: "ADD_WISHLIST", payload: pro })}
        >
          {state.wishlist?.some((item) => item.id === pro.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>
      <div className="pro__text">
        <div className="pro">
          <h2 className="pro__title">{pro.title}</h2>
            <del className="pro__del">{pro.del}</del>
          <div className="cart">
            <strong className="pro__price">{pro.price}</strong>
            <button onClick={()=> dispatch({type: "ADD_CART", payload: pro})} className="pro__btn"><BiCart/></button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="prod">
      <div className="container">
        <div className="pro__toop">
          <p>Market</p>
        </div>
        <div className="pro__wrapper">{items}</div>
      </div>
    </section>
  );
}

export default React.memo(Products);
