import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import hero from '../assets/hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Import the desired icon

const Home = () => {
  const [enzoText, setEnzoText] = useState('');
  const [infoText, setInfoText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [rowHeight, setRowHeight] = useState('auto'); // Dynamically set row height
  const [largeScreen, setLargeScreen] = useState(true);

  useEffect(() => {
    const enzo = "Lorenzo Jay R. Pantalla";
    const info = "Bachelor of Science in Information Systems";

    const typeText = async (text, setText) => {
      setShowCursor(true); // Show cursor when typing starts
      for (let i = 0; i <= text.length; i++) {
        setText(text.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100)); // Adjust typing speed here (milliseconds)
      }
      setShowCursor(false); // Hide cursor when typing is complete
    };

    const startTyping = async () => {
      await typeText(enzo, setEnzoText);
      await typeText(info, setInfoText);
    };

    startTyping();

    // Update row height on window resize
    const handleResize = () => {
      setRowHeight(window.innerHeight > 768 ? '100vh' : 'auto');
      setLargeScreen(window.innerWidth > 992); // Set largeScreen to true if screen width is greater than 992px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize row height

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <Container fluid className="p-0">
      <Row style={{ height: rowHeight }}>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
          <div className="mb-0">
            <div className="mb-1">
              <h1 className={`${styles.Enzo} ${largeScreen ? '' : styles.smallScreen1}`}>{enzoText}{showCursor && <span className={styles.cursor}>|</span>}</h1>
            </div>
            <h1 className={`${styles.h1} ${largeScreen ? '' : styles.smallScreen}`}>{infoText}{showCursor && <span className={styles.cursor}>|</span>}</h1>
          </div><br/>
            <Button className={`${styles.button} ${largeScreen ? '' : styles.smallScreenButton} ${largeScreen ? 'btn-xs' : 'btn-lg'}`}>
            <Link to="/about" className="btn-link" style={{ color: 'white' }}>Know More</Link>
            <FontAwesomeIcon icon={faAngleRight} className="ml-2" /></Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img src={hero} alt="Logo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
