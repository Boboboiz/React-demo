import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Slidebar from './Slidebar'
import "./Home.css"
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/> {/** new Header().render()*/}
        <div className='homeFlex'>
            <Content/>
            <Slidebar/>
        </div>
        <Footer/>
      </div>
    )
  }
}
