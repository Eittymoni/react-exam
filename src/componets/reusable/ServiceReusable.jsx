
import React from 'react'
import "../service/service.css"
import {Row, Col} from "react-bootstrap"
import { FaBaseballBall } from "react-icons/fa";

const ServiceReusable = ({ titel,para }) => {
  return (
    <div className='service-card'>
      <Row>
                    <Col lg={2} className='card-inner'>
                
                   <span style={{fontSize:"30px"}}> <FaBaseballBall/></span>
                    </Col>
                    <Col lg={8}>
                    <h5> {titel}</h5>
                    <p>{para}</p>
                    </Col>

                </Row>
    </div>
  )
}

export default ServiceReusable
