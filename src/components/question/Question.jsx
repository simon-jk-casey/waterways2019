import React, { Component } from 'react'

import './Question.css'

export default class Question extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.question}</h3>
      </div>
    )
  }
}