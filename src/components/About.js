import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import design1 from '../assets/designs/ccspost.png'; // Import your design images
import design2 from '../assets/designs/design2.png';
import design3 from '../assets/designs/design3.png';
import design4 from '../assets/designs/design4.png';
import gif from '../assets/designs/gif.gif';
import appIcon1 from '../assets/designs/appIcon1.png';
import appIcon2 from '../assets/designs/appIcon2.png';
import appIcon3 from '../assets/designs/appIcon3.png';
import appIcon4 from '../assets/designs/appIcon4.png';
import design5 from '../assets/designs/design5.png';
import design6 from '../assets/designs/design6.png';
import design7 from '../assets/designs/design7.png';
import design8 from '../assets/designs/FINAL PPT ROAR QUEST.png';

import styles from '../styles/About.module.css'

const About = () => {
    // Handle click event to show full-size image
    const handleCardClick = (design) => {
      console.log('Clicked on design:', design);
    };
  
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>A third-year (3rd) year <span className="text-primary"  style={{ fontWeight: 'bold' }}>Bachelor of Science in Information Systems (BSIS) </span>student that
                also develops the love for <span className="text-primary " style={{ fontWeight: 'bold' }}>graphic designing</span>.
            </p>
          </Col>
          <Col md={6} >
            <h1 className='text-center'> Graphic Software Used </h1>
            <Card className={`shadow ${styles.container}`}>
              <Card.Body className='d-flex justify-content-center align-items-center pb-0 pt-3'>
                <Row>
                  <Col md={3}>
                    <div className={styles.appiconcontainer}>
                      <img className={styles.canva} src={appIcon1} alt="App Icon" />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.appiconcontainer}>
                      <img src={appIcon2} alt="App Icon" />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.appiconcontainer}>
                      <img src={appIcon3} alt="App Icon" />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.appiconcontainer}>
                      <img src={appIcon4} alt="App Icon" />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row  className="mt-5">
          <Col>
            <h3 className='text-center'>Design Showcase</h3>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Card>
              <img src={design8} alt="GIF Image" style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>Event Title Cards</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className='mb-4'>
            <Card>
              <img src={gif} alt="GIF Image" style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>Event Title Cards</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className='mb-4'>
            <Card onClick={() => handleCardClick(design1)}>
              <Card.Img variant="top" src={design1} />
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={design4} alt="Design 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={design2} alt="Design 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={design3} alt="Design 3" />
                </Carousel.Item>
                {/* Add more Carousel.Item components for additional designs */}
              </Carousel>
            </Card>
          </Col>
          
          <Col md={12}>
            <Card>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={design5} alt="Design 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={design6} alt="Design 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={design7} alt="Design 3" />
                </Carousel.Item>
                {/* Add more Carousel.Item components for additional designs */}
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};
  
export default About;
