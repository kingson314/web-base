import React,{Component} from 'react';

import HelloWorld from "./comps/HelloWorld"

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld text='hello, world!'/>
      </div>
    )
  }
}
export default App;
