import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Par Marc STELIGA | Tous Droits Réservés</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/marc-steliga/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/mapko-ST"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:marc.steliga@outlook.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiTwotoneMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:0766569963"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiFillPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
