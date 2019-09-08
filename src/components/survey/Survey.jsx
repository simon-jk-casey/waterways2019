import React, { Component } from 'react'
import Question from '../question/Question'
import { surveyQuestions } from '../../lib/surveyQuestions'

import './Survey.css'

export default class Survey extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      sectionEnd: false,  
      questions: surveyQuestions,
      answers: []
    }
  }

  clickHandler (e) {
    e.preventDefault()
    let submittedAnswer = {[e.target.name]: e.target.value}
    this.setState(prevState => ({
      index: prevState.index + 1,
      answers: [...prevState.answers, submittedAnswer]
    }))
  }

  render () {
    const currentPosition = this.state.questions[this.state.index]
    const currentQuestion = currentPosition.q
    const qNo = currentPosition.s + currentPosition.n
    const currentAnswers = currentPosition.a
    return (
      <div>
        {console.log(this.state.answers, 'answers')}
        <Question
          qTitle={qNo}
          question={currentQuestion}
          answers={currentAnswers}
          handler={this.clickHandler.bind(this)}
        />
      </div>
    )
  }
}