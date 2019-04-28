import React,{Component} from 'react';
import {react,moment,numeral,math,Konva,ReactKonva,ViserReact,anime,d3,$,Mock,_} from "./utils"
const HelloWorld = react.HelloWorld
const {Stage, Layer, Rect, Text} = ReactKonva
const {Chart} = ViserReact

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('time',moment().format())
    let myNumeral2 = numeral('1,000')
    console.log('num',myNumeral2.value())
    console.log('math',math.round(math.e, 3))
    console.log('viser chart',Chart)
    anime({
      targets: '.content',
      translateX: 250
    })
    let arr = [2,4,6,2,67,9,4]
    console.log('d3 min',d3.min(arr))
    console.log('$',$('.content').html())
    const data = Mock.mock({
      'list|1-10': [{
        "id|+1": 1
      }]
    })
    console.log('Mock data',data)

    console.log('lodash',_.chunk(['a', 'b', 'c', 'd'],2))
  }

  render() {
    return (
      <div className='content'>
        content
      </div>
    )
  }
}

class ColoredRect extends Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}
class MyCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
    )
  }
}
function App() {
  return (
    <div>
      <HelloWorld text='hello world!'/>
      <Content/>
      <MyCanvas/>
    </div>
  );
}

export default App;
