import React, { Component } from 'react'

export default class Child extends Component {
    // avatar = 'abc.jpg'
  render() {
    return (
      <div className='bg-danger mb-3'>
        <h1>Child</h1>
        {/* <h2>email: {this.props.email}</h2>
        <button className='btn btn-success' onClick={()=> {
            this.props.setAvatar(this.avatar)
        }}>Emit Avatar</button> */}
        <h2>Name:{this.props.item.name}</h2>
        <h2>Avatar:{this.props.item.avatar}</h2>
        <button className='btn btn-success' onClick={()=> {
            this.props.setAvatar(this.props.item.avatar)
        }}>Emit Avatar</button>
      </div>
    )
  }
}
