import React, { Component } from 'react';

import './Landing.css'

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Wal Footrot'
    }
  }
  render () {
    return (
      <div>
        <div className='heading'>
          <h2>Waterway Self Assessment</h2>
        </div>
        <div>
          <h6>Welcome {this.state.name}</h6>
        </div>
        <div>
          <ul>
            <li>menu item</li>
            <li>menu item</li>
            <li>menu item</li>
            <li>menu item</li>
          </ul>
        </div>
        <a href="">START SURVEY</a>
      </div>
    )
  }
}