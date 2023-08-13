import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiReact } from "react-icons/di";
import { DiCss3, DiSass, DiJavascript1, DiBootstrap } from "react-icons/di";
import {
  SiCsharp,
  SiDotnet,
  SiJquery,
  SiNodedotjs,
  SiWordpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p className="tech-name">Html</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p className="tech-name">Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-name">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <p className="tech-name">Sass</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p className="tech-name">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
        <p className="tech-name">JQuery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <p className="tech-name">WordPress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p className="tech-name">CSharp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <p className="tech-name">NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <p className="tech-name">Dot .NET</p>
      </Col>
    </Row>
  );
}

export default Techstack;
