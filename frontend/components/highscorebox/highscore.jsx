

import React, { Component } from 'react'

export class HighScore extends Component {
  constructor(props){
    super(props)
    // debugger
    this.renderScores = this.renderScores.bind(this)
  }
  componentDidMount(){
    this.props.fetchAllScores()
  }
  renderScores(){
    let {scoresBest} = this.props
    debugger
    let count = 0
    let scoresbox = scoresBest.map(score => {
      return(
      <div>
        <p>{count += 1}{score.username}{score.score}</p>
      </div>
      )
    })
    return scoresbox
  }
  render() {
    // debugger
    if (this.props.scores == []){
      return null
    }
    return (
      <div>
        {this.renderScores()}
      </div>
    )
  }
}

export default HighScore
