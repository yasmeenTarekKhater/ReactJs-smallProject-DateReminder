import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DateActions = ({deleteHandle,showHandle}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between my-3">
            <Button onClick={deleteHandle} className="btn btn-danger">امسح الكل</Button>
            <Button onClick={showHandle} className='btn btn-success'>اظهر الكل</Button>
          </Col>
        </Row>
  )
}

export default DateActions