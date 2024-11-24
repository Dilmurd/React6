import React from 'react'
import "./ManageProduct.scss"
import Products from '../../../components/Products/Products'
import { useFetch } from '../../../hooks/useFetch'
import { useStateValue } from '../../../context'

function ManageProduct() {
  const [state] = useStateValue()
  const {data} = useFetch("products",{},[state.reload])
  return (
    <div>
    <Products admin={true} data={data}/>

    </div>
  )
}

export default ManageProduct