import React,{Component} from 'react';
import { Form } from 'antd';

class myForm extends Component {
  render() {
    const props = this.props
    return (
      <Form
        style={props.style}
        className={props.className}
        layout={props.layout}
        onSubmit={props.onSubmit}>
        {
          props.items.map(item =>
            <Form.Item
              key={item.index}
              style={item.style}
              className={item.className}

              colon={item.colon}
              extra={item.extra}
              hasFeedback={item.hasFeedback}
              help={item.validateStatus}
              htmlFor={item.htmlFor}
              label={item.label}
              labelCol={item.labelCol}
              required={item.required}
              validateStatus={item.validateStatus}
              wrapperCol={item.wrapperCol}>
              {
                item.children
              }
            </Form.Item>
          )
        }
      </Form>
    )
  }
}

export default myForm;
