import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
            <h1>
                My <span className="text-primary fw-bold">Education</span> 
                <FontAwesomeIcon icon={faGraduationCap} className="text-primary" />
                <br/>Journey 
                
            </h1>
        </Col>
        <Col md={6}>
          <ul className="timeline-with-icons" style={{ borderLeft: "1px solid hsl(0, 0%, 90%)", position: "relative", listStyle: "none" }}>
            <li className="timeline-item mb-5" style={{ position: "relative" }}>
              <span className="timeline-icon" style={{ position: "absolute", left: "-48px", backgroundColor: "hsl(217, 88.2%, 90%)", color: "hsl(217, 88.8%, 35.1%)", borderRadius: "50%", height: "31px", width: "31px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faSchool} color="primary" size="sm" />
              </span>

              <h5 className="fw-bold">Naga College Foundation, Inc.</h5>
              <p className="text-muted mb-2 fw-bold">2021 - Present</p>
              <p className="text-muted">
                Bachelor of Science in Information Systems
                <br/> College of Computer Studies
              </p>
            </li>

            <li className="timeline-item mb-5" style={{ position: "relative" }}>
              <span className="timeline-icon" style={{ position: "absolute", left: "-48px", backgroundColor: "hsl(217, 88.2%, 90%)", color: "hsl(217, 88.8%, 35.1%)", borderRadius: "50%", height: "31px", width: "31px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faGraduationCap} color="primary" size="sm" />
              </span>

              <h5 className="fw-bold">Tinago National High School</h5>
              <p className="text-muted mb-2 fw-bold"> 2020 - 2021</p>
              <p className="text-muted">
                General Academic Strand <br/>
                Senior High School
              </p>
            </li>

            <li className="timeline-item mb-5" style={{ position: "relative" }}>
              <span className="timeline-icon" style={{ position: "absolute", left: "-48px", backgroundColor: "hsl(217, 88.2%, 90%)", color: "hsl(217, 88.8%, 35.1%)", borderRadius: "50%", height: "31px", width: "31px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faGraduationCap} color="primary" size="sm" />
              </span>

              <h5 className="fw-bold">Tinago National High School</h5>
              <p className="text-muted mb-2 fw-bold">2017 - 2020</p>
              <p className="text-muted">
                Grade 7 - 10 <br/>
                Junior High School
              </p>
            </li>

            <li className="timeline-item mb-5" style={{ position: "relative" }}>
              <span className="timeline-icon" style={{ position: "absolute", left: "-48px", backgroundColor: "hsl(217, 88.2%, 90%)", color: "hsl(217, 88.8%, 35.1%)", borderRadius: "50%", height: "31px", width: "31px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FontAwesomeIcon icon={faGraduationCap} color="primary" size="sm" />
              </span>

              <h5 className="fw-bold">Tinago Central School</h5>
              <p className="text-muted mb-2 fw-bold">2012 - 2017</p>
              <p className="text-muted">
                Grade 1 - 6 <br/>
                Elementary
              </p>
            </li>

            {/* Add other timeline items similarly */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
