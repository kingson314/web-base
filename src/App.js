import React,{Component} from 'react';
import './styles/main.scss'

import { Button,Form,Input,Icon,Checkbox } from 'antd';

import Grid from "./comps/Grid"
import MyForm from "./comps/Form"

const Hello = ({}) => {
  return (
  <div>
   hello world
  </div>
 )
}

const lastItem = (getFieldDecorator) => {
  return (
  <div>
    {
      getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
      })(<Checkbox>Remember me</Checkbox>)
    }
    <a className="login-form-forgot" href="">
      Forgot password
    </a>
    <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
    </Button>
    Or
    <a href="">register now!</a>
  </div>
 )
}

class CustomForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }else {
        console.error('error %o',err)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    let items = [
      {
        index: 0,
        children:
          getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )
      },
      {
        index: 1,
        children:
          getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
        )
      },
      {
        index: 2,
        children: lastItem(getFieldDecorator)
      },
    ]
    return <MyForm items={items} onSubmit={this.handleSubmit}/>
  }
}

const WrappedCustomForm = Form.create({name:'my-form'})(CustomForm)

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
              style: {
                border: '1px solid red',
              },
              className: 'gutter-box',
              children: <Button type="primary"><Hello/></Button>
            }
          ]
        }
      ],
    }
  }

  render() {
    return (
      <div className='home-page'>
        <Grid rows={this.state.rows}/>
        <WrappedCustomForm/>
      </div>
    )
  }
}

export default App;
