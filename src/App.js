import React,{Component} from 'react';
import './styles/main.scss'

import { Button } from 'antd';

import Grid from "./comps/Grid"

const Hello = ({}) => {
  return (
  <div>
   hello world
  </div>
 )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [
        {
          index:0,
          cols: [
            {
              index:0,
              xs: 12,
              className: 'gutter-box',
              children: <Button type="primary"><Hello/></Button>
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className='home-page'>
        <Grid rows={this.state.rows}/>
      </div>
    )
  }
}

export default App;
