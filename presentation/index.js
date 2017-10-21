// Import React
import React from 'react'
import ChangingWords from './changing-words'
import WordCloud from './wordcloud'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Link
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('./custom.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
}

preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

const Word = ({ children }) => <Heading size={2} textAlign='left' style={{display: 'inline'}} textColor='primary' fill>{children}</Heading>

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck theme={theme}>
        <Slide bgColor='primary' transition={['fade']}>
          <Heading size={1} lineHeight={1} fit textColor='secondary'>
            Intro to JavaScript or:
          </Heading>
          <Text fit>
            How I Learned to Stop Worrying and Love JavaScript
          </Text>
          <Appear>
            <Text margin='1em 0 0 0' textColor='tertiary'>
              a short presentation by Teodor Yankov
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['zoom']} bgColor='tertiary'>
          <Heading textAlign='left' size={6} textColor='secondary'>Ok, so what can we build with this thing?</Heading>
          <Appear>
            <div style={{ display: 'flex', justifyContent: 'left' }}>
              <ChangingWords
                words={['Web', 'Mobile', 'Desktop', 'Server']}
                component={Word}
                delay={3000}
              />
              <Heading size={2} textColor='primary' fill>Applications</Heading>
            </div>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading fit>2017 StackOverflow Developer Survey</Heading>
          <Heading size={6} textColor='tertiary'>Programming Languages</Heading>
          <Link href='https://insights.stackoverflow.com/survey/2017#technology-programming-languages' target='_blank'>
            <Image src={require('../assets/insights.stackoverflow.com_survey_2017.png')} />
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>Java is to JavaScript what Car is to Carpet.</Quote>
            <Cite>Chris Heilmann</Cite>
          </BlockQuote>
        </Slide>
        <Slide id='slide3' className='spectacle-content--full'>
          <WordCloud />
        </Slide>
      </Deck>
    )
  }
}
