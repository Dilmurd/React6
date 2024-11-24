import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blog from "../components/Blog/Blog";
import Garant from "../pages/Garant/Garant";
import Shipping from "../pages/Shipping/Shipping";
import Wishlist from "../pages/Wishlist/Wishlist";
import Layout from "../Layout/Layout";
import Cart from "../pages/Cart/Cart";
import Admin from "../pages/Admin/Admin";
import CreateProduct from "../pages/Admin/create-product/CreateProduct";
import ManageProduct from "../pages/Admin/manage-product/ManageProduct";
import Auth from "../pages/auth/Auth";
import Login from "../pages/Login/Login";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
          <Route path="/login" element={<Login/>}/>

        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
          </Route>
        </Route>

        <Route />
      </Routes>
    </>
  );
}

export default Router;
