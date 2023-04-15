import React from 'react'


//import Home from './components/home/Home';
import Hero from '../components/product/hero/Hero';
import Slider from '../components/product/slider/Slider';
import Related from '../components/product/related/Related';
import Recommend from '../components/product/recommend/Recommend';
import News from '../components/product/news/News';



const ProductPage = () => {
  return (
    <div>
        
        <main className='main'>
        <Hero/>
        <Slider/>
        <Related/>
        <Recommend/>
        <News/>
      </main>
        
        
    </div>
  )
}

export default ProductPage