import React,{Component} from 'react';
import './styles/main.scss'

import HelloWorld from "./comps/HelloWorld"

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className='home-page'>
        <HelloWorld text='hello, world!'/>
      </div>
    )
  }
}

export default App;
