import React from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Products.scss";
import { useStateValue } from "../../context";
import { useState } from "react";
import { FaRegHeart, FaHeart, FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import axios from "../../api";
import Loading from "../Loading/Loading";

function Products({ data, admin, loading }) {
  const [state, dispatch] = useStateValue();
  const [updateData, setUpdateData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const deleteProduct = (id) => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "RELOAD" });
      })
      .catch((res) => console.log(res));
  };

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
            {admin ? (
              <button onClick={() => deleteProduct(pro.id)} className="trash">
                <FaRegTrashAlt />
              </button>
            ) : (
              <button
                onClick={() => dispatch({ type: "ADD_CART", payload: pro })}
                className="pro__btn"
              >
                <BiCart />
              </button>
            )}
          </div>
          {admin && (
            <button
              onClick={() => handleUpdateClick(pro)}
              className="pro__btn edit"
              aria-label="Edit Product"
            >
              <FaEdit />
            </button>
          )}
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
        <div className="loading">{!data && <Loading />}</div>
      </div>

      {isUpdating && updateData && (
        <div className="update__modal">
          <form onSubmit={handleUpdateSubmit} className="update__form">
            <h2>Update Product</h2>
            <label>
              Title:
              <input
                type="text"
                value={updateData.title}
                onChange={(e) =>
                  setUpdateData({ ...updateData, title: e.target.value })
                }
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={updateData.price}
                onChange={(e) =>
                  setUpdateData({ ...updateData, price: e.target.value })
                }
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                value={updateData.url}
                onChange={(e) =>
                  setUpdateData({ ...updateData, url: e.target.value })
                }
              />
            </label>
            <div className="update__actions">
              <button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update"}
              </button>
              <button type="button" onClick={() => setIsUpdating(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default React.memo(Products);
