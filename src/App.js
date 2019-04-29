import React,{Component} from 'react';
import './styles/main.scss'

import HelloWorld from "./comps/HelloWorld"

import {Two} from "./utils"

class App extends Component {

  componentDidMount() {
    var elem = document.getElementById('draw-shapes');
    var params = { width: 285, height: 200 };
    var two = new Two(params).appendTo(elem);

    var circle = two.makeCircle(72, 100, 50);
    var rect = two.makeRectangle(213, 100, 100, 100);

    circle.fill = '#FF8000';
    circle.stroke = 'orangered'; // Accepts all valid css color
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();

    two.update();
  }

  render() {
    return (
      <div className='home-page'>
        <HelloWorld text='hello, world!'/>
        <div id='draw-shapes'></div>
      </div>
    )
  }
}

export default App;
