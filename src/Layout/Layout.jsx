import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Top from '../components/Top/Top'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <>
    <Top/>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout