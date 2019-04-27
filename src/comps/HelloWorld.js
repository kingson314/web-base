const PropTypes = require('prop-types')
const React = require('react')
const Component = React.Component
const el = React.createElement

const {Button} = require('antd')

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonName: 'Click Me!'
    }
  }

  render() {
    return el('div', null, [
      sayHello(this.props),
      myButton(this.state.buttonName)
    ])
  }
}

HelloWorld.propTypes = {
  text: PropTypes.string.isRequired,
}

function sayHello(props) {
  return el('div', {key:Math.random()}, props.text)
}

function myButton(buttonName) {
  return el(Button, {key:Math.random(),type:'primary'}, buttonName)
}

module.exports = HelloWorld
