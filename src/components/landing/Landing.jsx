import React, { Component } from 'react';
import Survey from '../survey/Survey'

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
          <h1>Waterway Self Assessment</h1>
        </div>
        <div>
          <h2>Welcome {this.state.name}</h2>
        </div>
        <div>
          <ul>
            <li>menu item</li>
            <li>menu item</li>
            <li>menu item</li>
            <li>menu item</li>
          </ul>
        </div>
        <button>START SURVEY</button>
        <Survey />
      </div>
    )
  }
}