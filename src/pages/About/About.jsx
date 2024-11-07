import React from 'react'
import Company from '../../components/Company/Company'
import Brand from '../../components/Brand/Brand'
import Blog from "../../components/Blog/Blog"

function About() {
  return (
    <>
    <Company/>
    <Brand/>
    <Blog/>
    </>
  )
}

export default React.memo(About) 