import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Admin.scss";

function Admin() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    const storage = JSON.parse(localStorage.getItem("storage"))
    delete storage.token
    localStorage.setItem("storage", JSON.stringify(storage))
    navigate("/")

  }
  return (
    <main>
      <section className="admin">
        <div className="admin__wrapper">
          <div className="links">
            <h2 className="adminn">Admin</h2>
            <NavLink className="navlink" to={"/admin/create-product"}>
              Create-Product
            </NavLink>
            <NavLink className="navlink" to={"/admin/manage-product"}>
              Manage-Product
            </NavLink>
          </div>
        <div  className="btnss">
          <button onClick={handleLogOut} className="admin__btn">Log Out</button>
        </div>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Admin;
