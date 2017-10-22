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
  Link,
  S,
  List,
  ListItem,
  Notes,
  ComponentPlayground
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
  quartenary: '#CECECE',
  jsYellow: '#F7DF1E'
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
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <ChangingWords
              words={['Web', 'Mobile', 'Desktop', 'Server', 'Toaster']}
              component={Word}
              delay={3000}
            />
            <Heading size={2} textColor='primary' fill>Applications</Heading>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor='primary' textColor='tertiary'>
          <Heading size={5} textColor='tertiary' fit>2017 <Link href='https://stackoverflow.com' target='_blank'><S bold={false} textFont='Arimo' type='' textColor='#000000'>stack<S type='bold'>overflow</S></S></Link> Developer Survey</Heading>
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
        <Slide transition={['zoom', 'fade']} bgImage={require('../assets/History-Channel-Alien-Guy.jpg')} bgDarken={0.4}>
          <Heading textColor='primary' fit>Let's Talk Ancient History</Heading>
        </Slide>
        <Slide transition={['slide']}>
          <Notes>
            <ul>
              <li>Jim Gosling, Sun Microsystems 1992</li>
              <li>HotJava 1995</li>
              <li>decided to use it in the browser</li>
              <li>LiveScript in NetScape</li>
              <li>Sun wanted Java directly in the browser</li>
              <li>LiveScript changes to JavaScript</li>
              <li>Microsoft reverse-engineers JavaScript into JScript</li>
            </ul>
          </Notes>
          <List>
            <ListItem>C++++</ListItem>
            <ListItem>Oak</ListItem>
            <ListItem>HotJava</ListItem>
            <ListItem>JScript</ListItem>
            <ListItem>Mocha</ListItem>
            <ListItem>LiveScript</ListItem>
            <ListItem>ActionScript</ListItem>
            <ListItem>ECMAScript</ListItem>
            <Appear>
              <ListItem textColor='jsYellow'>JavaScript</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor='secondary'>
          <Notes>
            <ul>
              <li>Everything is an object</li>
              <li>Functions are first-class objects</li>
            </ul>
          </Notes>
          <Heading size={3} textColor='tertiary' textAlign='left'>Key Features</Heading>
          <List>
            <ListItem textColor='primary'>Load and go delivery</ListItem>
            <ListItem textColor='primary'>Loose types</ListItem>
            <ListItem textColor='primary'>Objects as general containers</ListItem>
            <ListItem textColor='primary'>Prototypal inheritance</ListItem>
            <ListItem textColor='primary'>Lambda</ListItem>
            <ListItem textColor='primary'>Non-blocking, evented IO (in Node.js)</ListItem>
            <ListItem textColor='primary'>C-like syntax</ListItem>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor='secondary'>
          <Notes>
            <ul>
              <li>Numbers</li>
              <li>Strings</li>
              <li>Operators</li>
              <li>Arrays</li>
              <li>Objects</li>
              <li>Ref vs copy</li>
              <li>Functions</li>
            </ul>
          </Notes>
          <ComponentPlayground
            code={`
const c = 1 + 1

const Sandbox = () => (<span>{JSON.stringify(c)}</span>);
render(<Sandbox />, mountNode);
            `}
          />
        </Slide>
        <Slide transition={['slide']} className='spectacle-content--full'>
          <WordCloud />
        </Slide>
      </Deck>
    )
  }
}
