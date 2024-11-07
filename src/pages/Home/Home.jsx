import React from 'react'
import Sale from '../../components/Sale/Sale'
import Catalog from '../../components/Catalog/Catalog'

function Home() {
  return (
    <>
    <Sale/> 
    <Catalog/>
    </>
  )
}

export default React.memo(Home) 