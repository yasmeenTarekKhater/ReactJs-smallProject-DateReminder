import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateCounts = ({data}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8">
            <h2>لديك {data.length} مواعيد</h2>
          </Col>
    </Row>
  )
}

export default DateCounts