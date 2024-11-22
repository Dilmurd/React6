import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import "./Admin.scss"

function Admin() {
  return (
    <main>
      <section className='admin'>
        <div className='admin__wrapper'>
          <div className='links'>
            <h2 className='adminn'>Admin</h2>
        <NavLink className="navlink" to={"/admin/create-product"}>Create-Product</NavLink>
        <NavLink className="navlink" to={"/admin/manage-product"}>Manage-Product</NavLink>
          </div>
        </div>
        <div>
      <Outlet/>
        </div>
      </section>
    </main>
  )
}

export default Admin