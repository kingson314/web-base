import React,{Component} from 'react';
import { Row, Col } from 'antd';

class Grid extends Component {
  render() {
    const rows = this.props.rows
    return (
      <>
        {
          rows.map(row =>
            <Row
              key={row.index}
              style={row.style}
              className={row.className}

              type={row.type}
              justify={row.justify}
              align={row.align}
              order={row.order}
              gutter={row.gutter}>
              {
                row.cols.map(col =>
                  <Col
                    key={col.index}
                    style={col.style}
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
                    xxl={col.xxl}>
                    {
                      col.children
                    }
                    </Col>
                )
              }
            </Row>
          )
        }
      </>
    )
  }
}

export default Grid;
