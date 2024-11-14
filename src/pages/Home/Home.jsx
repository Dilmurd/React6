import React from 'react'
import Sale from '../../components/Sale/Sale'
import Catalog from '../../components/Catalog/Catalog'
import Products from '../../components/Products/Products'
import { useFetch } from '../../hooks/useFetch'

function Home() {
  const {data} = useFetch("products")

  return (
    <>
    <Sale/> 
    <Catalog/>
    <Products data={data}/>
    </>
  )
}

export default React.memo(Home) 