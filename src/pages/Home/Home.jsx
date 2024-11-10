import React from 'react'
import Sale from '../../components/Sale/Sale'
import Catalog from '../../components/Catalog/Catalog'
import Menu from "../../components/Menu/Menu"

function Home() {
  return (
    <>
    <Sale/> 
    <Catalog/>
    <Menu/>
    </>
  )
}

export default React.memo(Home) 