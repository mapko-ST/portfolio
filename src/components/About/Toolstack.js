import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiVisualstudiocode,
  SiVisualstudio,
  SiTrello,
  SiMicrosoftpowerpoint,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPhpstorm,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-name">Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpstorm />
        <p className="tech-name">Php Storm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-name">MySqL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p className="tech-name">Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p className="tech-name">Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <p className="tech-name">Photoshop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
        <p className="tech-name">Illustrator</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <p className="tech-name">Canva</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <p className="tech-name">Trello</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftpowerpoint />
        <p className="tech-name">PowerPoint</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p className="tech-name">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="tech-name">GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
