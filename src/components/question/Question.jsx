import React, { Component } from 'react'

import './Question.css'

export default class Question extends Component {
  render () {
    return (
      <div>
        <div>
          <h3>{this.props.qTitle} {this.props.question}</h3>
        </div>
        <div>
          <ul>
            {
              this.props.answers.map((answer, i) => {
                return (
                  <li key={i}>
                    <button value={answer.score}>{answer.text}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}