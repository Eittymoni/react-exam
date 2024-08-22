import React from 'react'
import "./banner.css"
import {Container, Row, Col, Button} from "react-bootstrap"
import { FaRegBell } from "react-icons/fa";
import BanImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div id='banner'>
    <Container>
        <Row>
            <Col lg={4}  className='left'>
                <Row>
                    <Col lg={6} className='top'>
                        <Row>
                            <Col lg={2} className='round'> 
                               
                               <FaRegBell/>
                               
                                
                                
                            </Col>
                            <Col lg={8}>
                                <h6>Startup Business</h6>
                            </Col>
                        </Row>
                       
                        
                    </Col>

                    
                </Row>
                <h4>Empowering startups to fuel
                    their business growth</h4>
                    <p> Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet, velit
                    nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                    
                <Button className='butun'> Get started now </Button>
            </Col>
            <Col lg={{ span:4, offset:4}}>
             <img src={BanImg}/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Banner
