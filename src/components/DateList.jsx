import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateList = ({data}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8">
            <div className="regtangle p-3 overflow-auto">
              {
                data.length?(
                  
                    data.map(item=>{
                      return(
                          <div key={item.id} className="d-flex px-3 my-2 border-bottom">
                <img
                  src="https://p7.hiclipart.com/preview/237/360/55/stock-photography-happiness-happy-man-image-royalty-free-man.jpg"
                  className="img-avatar"
                  alt="person-img"
                />
                <div className="me-4">
                  <h5>{item.name}</h5>
                  <p>{item.date}</p>
                </div>
                          </div>
                      )
                    })
                  
                ):(<h2 className='text-center text-danger'>لا يوجد مواعيد</h2>)
              }
              
            </div>
          </Col>
        </Row>
  )
}

export default DateList