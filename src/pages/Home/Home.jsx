import React from 'react'
import Sale from '../../components/Sale/Sale'
import Catalog from '../../components/Catalog/Catalog'
import Products from '../../components/Products/Products'

function Home() {
  return (
    <>
    <Sale/> 
    <Catalog/>
    <Products/>
    </>
  )
}

export default React.memo(Home) 