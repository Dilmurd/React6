import React from 'react'
import Sale from '../../components/Sale/Sale'
import Catalog from '../../components/Catalog/Catalog'
import Products from '../../components/Products/Products'
import { useFetch } from '../../hooks/useFetch'
import "./Home.scss"
import { Outlet } from 'react-router-dom'

function Home() {
  const {data} = useFetch("products")

  return (
    <>
    <Sale/> 
    <Catalog/>
    <Products data={data}/>
    <Outlet/>
    </>
  )
}

export default React.memo(Home) 