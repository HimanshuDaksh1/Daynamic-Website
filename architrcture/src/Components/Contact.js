import React from 'react'
import Layout from './Layout'
import { Row, Col, Container } from 'react-bootstrap'
import { MdLocationPin, MdCall, MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <Layout>
      <Container fluid className='bgCard'>
        <Container>
          <Row>
            <Col md={6}>
              <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.162579777678!2d78.7722546!3d28.834019299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbc04edd7e6f%3A0x5913dbddda3f6293!2sSelf%20Image!5e0!3m2!1sen!2sin!4v1672400551183!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <Row>
                <div className='icons'>
                  <Col md={4}><div className='icon'><MdLocationPin id='icon' /> Moradabad</div></Col>
                  <Col md={4}><div className='icon'><MdCall id='icon' />91 8279813609</div></Col>
                  <Col md={4}><div className='icon'><MdEmail id='icon' />rrinfosoft@gmail.com</div></Col>
                </div>
              </Row>
            </Col>
            <Col md={6} className="inp">
              <h1>WRITE US</h1>
              <p>Dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam dolorem.</p>
              <div>
              <div><input type='text' className='inpText' placeholder='Your Name...'></input></div>
              <div><input type='text' className='inpText' placeholder='Email...'></input></div>
              <div><input type='text' className='inpText' placeholder='Website...'></input></div>
              <div><input type='text' className='inpText' placeholder='Messege...'></input></div>
              <div><button className='icon'>Send Messege</button>
              </div></div>
            </Col>
          </Row>
        </Container>
        <hr />
      </Container>
    </Layout>
  )
}
