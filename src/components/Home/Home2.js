import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BIENVENUE SUR <span className="purple"> MON </span> SITE
            </h1>
            <p className="home-about-body">
              Passionné et curieux, en constante recherche d'amélioration de mon
              métier. Mon objectif est de créer des designs et une{" "}
              <b className="purple">communication unique</b>.
              <br />
              <br />
              Je suis à l'affût des dernières tendances en matière de{" "}
              <b className="purple">graphisme</b>. Je suis attentif à fournir
              des résultats de qualité pour chaque projet sur lesquel je
              travaille.
              <br />
              <br />
              En 2023, la conception d'un site web
              <b className="purple"> responsive </b> qui répond à une charte
              graphique correspondante au code actuel et qui prend en compte les
              besoins des utilisateurs devient une priorité. <br />
              <br />
              N'hésitez pas à naviguer sur mon site pour{" "}
              <b className="purple">découvrir </b>. mes divers projets.
            </p>
            <i>
              <p style={{ color: "#676f9d" }}>
                "Le design est l’ambassadeur silencieux de votre marque."{" "}
              </p>
              <footer className="blockquote-footer">Paul Rand</footer>
            </i>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Mes réseaux</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter. </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marc-steliga/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mapko-ST"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:marc.steliga@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotoneMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:0766569963"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
