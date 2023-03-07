import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Marc. </span>
            <br />
            <br />
            Je suis développeur <b className="purple">Front-End</b> de
            formation. Autodidacte sur divers langages et frameworks, je suis
            passionné des logiciels Adobe et la communication. Je souhaite
            aujourd'hui étendre mes compétences en tant que Concepteur Designer
            UI.
            <br />
            <br />
            Sensible à l’ergonomie et à la démarche{" "}
            <b className="purple">centrée utilisateur</b>, je suis à l'affût des
            tendances et des actualités. Je travaille avec la méthode Scrum pour
            une bonne communication et un rendu fonctionnel, appliqué et
            respectant les besoins de chacun.
            <br />
            <br />
            Mes sources d'inspiration sont liées à ma passion pour l'histoire,
            l'espace et les technologies de demain. Je suis donc en{" "}
            <b className="purple">vieille </b>
            constante avec une facilité d'adaptation pour la création et la
            gestion de projet.
          </p>
          <br />
          <p style={{ color: "#676f9d" }}>
            <i>"La seule limite est votre imagination."</i>{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
