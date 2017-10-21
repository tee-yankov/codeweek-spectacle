import React, { PureComponent } from 'react'
import cloud from 'd3-cloud'

const style = {
  rootElement: {
    width: '100%',
    height: '100%'
  }
}

export default class WordCloud extends PureComponent {
  constructor (props) {
    super(props)
    this.words = []
    this.bindElement = this.bindElement.bind(this)
    this.registerWordElement = this.registerWordElement.bind(this)
  }

  registerWordElement (word) {
    this.word.push(word)
  }

  componentDidMount () {
    cloud()
      .on('end', (words, bounds) => console.log(words, bounds))
      .padding(10)
      .font('Roboto')
      .fontSize(12)
      .size([this.rootElement.width, this.rootElement.height])
      .canvas(() => this.rootElement)
      .words(['JavaScript', 'React', 'Angular', 'Coalesce'])
      .text((v) => console.log(v) || v)
      .start()
  }

  bindElement (elm) {
    if (!elm) return
    this.rootElement = elm
  }

  render () {
    return (
      <canvas
        style={style.rootElement}
        ref={this.bindElement}
      />
    )
  }
}
