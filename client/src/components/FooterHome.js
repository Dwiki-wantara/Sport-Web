import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram,FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Foooter() {
  return (
    <div bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#' className='me-4 text-reset'>
            <FaFacebook/>
          </a>
          <a href='#' className='me-4 text-reset'>
            <FaTwitter/>
          </a>
          <a href='#' className='me-4 text-reset'>
            <FaGoogle/>
          </a>
          <a href='#' className='me-4 text-reset'>
            <FaInstagram/>
          </a>
          <a href='#' className='me-4 text-reset'>
            <FaLinkedin/>
          </a>
          <a href='#' className='me-4 text-reset'>
            <FaGithub/>
          </a>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h1>
                Hypwee
              </h1>
              <p>
                Hi, we are a blog that provides updated articles, so that it gives satisfaction to our readers.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textAlign:"center"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Node
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Golang
                </a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4' style={{textAlign:"center"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:"none"}}>
                  Help
                </a>
              </p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
               Tangerang, Indonesia
              </p>
              <p>
                tarawantara17@gmail.com
              </p>
              <p>
                +62 8211 9576 114
              </p>
             
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright
        
      </div>
    </div>
  );
}