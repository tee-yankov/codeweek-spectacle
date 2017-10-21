import React, { Component } from 'react'
import RestartingTypist from './restarting-typist'
import Typist from 'react-typist'

export default class ChangingWords extends Component {
  render () {
    return (
      <RestartingTypist cursor={{show: false}}>
        {this.props.words.map((word) => [
          <this.props.component>{word}</this.props.component>,
          <Typist.Backspace delay={this.props.delay} count={word.length} />
        ])}
      </RestartingTypist>
    )
  }
}
