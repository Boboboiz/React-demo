import React, { Component } from 'react'

export default class Uncle extends Component {
  render() {
    return (
      <div className='bg-info'>
        <h1>Uncle</h1>
        <h1>img:{this.props.avatar}</h1>
      </div>
    )
  }
}
