import React, { Component } from 'react'
import Typist from 'react-typist'

export default class RestartingTypist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typing: true
    }
    this.done = this.done.bind(this)
  }

  done () {
    this.setState({ typing: false }, () => {
      setTimeout(() => this.setState({ typing: true }), this.props.timeout || 1200)
    })
  }

  render () {
    const {children, timeout, ...props} = this.props
    return this.state.typing
      ? <Typist {...props} onTypingDone={this.done}>{children}</Typist>
      : null
  }
}
