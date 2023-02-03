import React from 'react'
import '../Styles/Home.scss'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div className='home'>
      {/* <h1>Home Component</h1>   */}
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default Home
