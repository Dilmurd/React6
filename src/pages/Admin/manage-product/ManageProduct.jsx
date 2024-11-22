import React from 'react'
import "./ManageProduct.scss"
import Products from '../../../components/Products/Products'
import { useFetch } from '../../../hooks/useFetch'

function ManageProduct() {
  const {data} = useFetch("products")
  return (
    <div>
    <Products admin={true} data={data}/>

    </div>
  )
}

export default ManageProduct