import React from 'react'
import "./service.css"
import { Container,Row, Col} from "react-bootstrap"

import ServiceReusable from '../reusable/ServiceReusable';


const Service = () => {
  return (
    <div id='service'>
    <Container>
        <Row>
            <Col lg={4} >
            <ServiceReusable  titel="Immediate Deployment" para="Et vero eos et accusamus et 
                    iusto odio dignissimos"/>

            </Col>
            <Col lg={4} >
            <ServiceReusable  titel="Immediate Deployment" para="Et vero eos et accusamus et 
                    iusto odio dignissimos"/>

            </Col>
            <Col lg={4} >
            <ServiceReusable  titel="Immediate Deployment" para="Et vero eos et accusamus et 
                    iusto odio dignissimos"/>

            </Col>
            
        </Row>
    </Container>
    </div>
  )
}

export default Service
