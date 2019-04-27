const PropTypes = require('prop-types')
const React = require('react')

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return React.createElement('div', null, `${this.props.text}`)
  }
}

HelloWorld.propTypes = {
  text: PropTypes.string.isRequired
}

module.exports = HelloWorld
