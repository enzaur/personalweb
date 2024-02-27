import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await emailjs.send(
        'service_2m74w2j', // Your EmailJS service ID
        'template_av1nurg', // Your EmailJS template ID
        emailData,
        'VSVehDdtZbSQTDRNX' // Your EmailJS user ID
      );

      setShowSuccessMessage(true);
      setEmailData({
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setShowErrorMessage(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData({ ...emailData, [name]: value });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} className='mb-4'>
          <h2>Contact Me</h2>
          {showSuccessMessage && (
            <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
              Email sent successfully!
            </Alert>
          )}
          {showErrorMessage && (
            <Alert variant="danger" onClose={() => setShowErrorMessage(false)} dismissible>
              Error sending email. Please try again later.
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formBasicEmail" className="justify-content-center mt-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email"
                value={emailData.email}
                onChange={handleChange}
                required 
              />
            </Form.Group>
            <Form.Group controlId="formBasicSubject" className="justify-content-center mt-4">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter subject" 
                name="subject"
                value={emailData.subject}
                onChange={handleChange}
                required 
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage" className="justify-content-center mt-4">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="message"
                value={emailData.message}
                onChange={handleChange}
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="justify-content-center mt-4">Send Email</Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2 className='text-center'>Follow Me</h2>
          <div className="d-flex justify-content-around">
            <a href="https://www.facebook.com" target="https://www.facebook.com/lawrehnzoh" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-3" />
            </a>
            <a href="https://www.instagram.com" target="https://www.instagram.com/__nxcz0/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-3" />
            </a>
            <a href="https://www.messenger.com" target="m.me/lawrehnzoh" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="mr-3" />
            </a>
            <a href="https://www.github.com" target="https://github.com/enzaur" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
