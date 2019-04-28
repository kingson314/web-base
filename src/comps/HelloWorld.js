const PropTypes = require('prop-types')
const React = require('react')
const Component = React.Component
const el = React.createElement

class HelloWorld extends Component {
  render() {
    return el('div', null, [
      sayHello(this.props)
    ])
  }
}

HelloWorld.propTypes = {
  text: PropTypes.string.isRequired,
}

function sayHello(props) {
  return el('div', {key:Math.random()}, props.text)
}

module.exports = HelloWorld
