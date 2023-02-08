import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Product from './Product'
import Footer from './Footer'
import "./Landingpage.css"
export default class landingpage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className='product container'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        <Footer />
      </div>
    )
  }
}
