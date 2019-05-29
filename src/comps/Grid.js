import React,{Component} from 'react';
import { Row, Col } from 'antd';

class Grid extends Component {
  render() {
    const rows = this.props.rows
    return (
      <div>
        {
          rows.map(row =>
            <Row
              className={row.className}
              type={row.type}
              justify={row.justify}
              align={row.align}
              order={row.order}
              gutter={row.gutter}
              key={row.index}>
              {
                row.cols.map(col =>
                  <Col
                    className={col.className}
                    span={col.span}
                    offset={col.offset}
                    push={col.push}
                    pull={col.pull}
                    xs={col.xs}
                    sm={col.sm}
                    md={col.md}
                    lg={col.lg}
                    xl={col.xl}
                    xxl={col.xxl}
                    key={col.index}>
                    {
                      col.children
                    }
                    </Col>
                )
              }
            </Row>
          )
        }
      </div>
    )
  }
}

export default Grid;
