import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGooglePlusG, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row>
            <Col md={6}>
              <h4 style={{ color: "white" }}>RRinfosoft</h4>
              <div className='footerContent'>
                <p>Kothiwal Nagar Moradabad </p>
                <div style={{ color: "yellow" }}> +91 8279813609, +91 9315094704</div>
              </div>
            </Col>
            <Col md={6}>
              <div className='icons'>
                <div className='icon'> <FaFacebookF/></div>
                <div className='icon'> <FaGooglePlusG/></div>
                <div className='icon'> <FaTwitter/></div>
                <div className='icon'> <FaInstagramSquare/></div>
              </div>
            </Col>
          </Row>
          <Row><Col md={12}> <div className='foot'><b>Copyright 2022 RRinfosoft. Designed by Themezy. All rights reserved.</b></div>
          </Col></Row>
        </Container>
      </div>
    </>
  )
}
