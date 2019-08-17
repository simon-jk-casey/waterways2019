import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <div>
          <h1>Waterway Self Assessment</h1>
          <h4>Miranda Polglase & Russell Death</h4>
          <h4>Massey University</h4>
        </div>
        <div>
          <input type="text" placeholder='username' />
          <input type='text' placeholder='password' /> {/*make this a password input */}
          <Link to='/landing'>LOGIN</Link>
        </div>
      </div>
    )
  }
}