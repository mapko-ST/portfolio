import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import compositionCv from "../../Assets/Projects/compositionCv.png";
import cardNautilus from "../../Assets/Projects/cardNautilus.png";
import compositionPs5 from "../../Assets/Projects/compositionPs5.png";
import digicom from "../../Assets/Projects/digicom.png";
import nautilus from "../../Assets/Projects/nautilus.png";
import biotex from "../../Assets/Projects/biotex.png";
import immersive from "../../Assets/Projects/immersive.png";
import justePrix from "../../Assets/Projects/justePrix.png";
import fitCo from "../../Assets/Projects/fitCo.png";
import compositionGuideline2 from "../../Assets/Projects/compositionGuideline2.png";
import dali2 from "../../Assets/Projects/dali2.png";
import ProjectCard2 from "./ProjectCards2";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes derniers <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          <i>Voici quelques projets sur lesquels j'ai travaillé récemment.</i>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={digicom}
              isBlog={false}
              title="DIGI'COM"
              description="Réalisation d'un porte badge pour une entreprise fictive à partir d'un mockup et avec le logiciel Photoshop."
              viewLink="https://mapko-st.github.io/CV/concept.DIGICOM.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={compositionPs5}
              isBlog={false}
              title="MANETTE PS5 - REDBULL"
              description="Réalisation d'un concept de manette de jeu pour l'entreprise Redbull à partir d'un mockup et avec le logiciel Photoshop."
              viewLink="https://mapko-st.github.io/CV/compositionPs5a.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={compositionCv}
              isBlog={false}
              title="DESIGN GUIDELINES - CV"
              description="Création d'une guideline pour la mise en place d'un cv via le logiciel Photoshop."
              viewLink="https://mapko-st.github.io/CV/compositionCv2.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={biotex}
              isBlog={false}
              title="BIO'TEX"
              description="Réalisation d'un t-shirt pour une entreprise écologique fictive. La recherche dans la création était la mise en avant de la protection de la planète et l'usage de produit recyclable."
              viewLink="https://mapko-st.github.io/CV/biotex.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={nautilus}
              isBlog={false}
              title="DESIGN GUIDELINES - NAUTILUS"
              description="Création d'une guideline pour une entreprise fictive avec le logiciel Photoshop et le logiciel Illustrator."
              viewLink="https://mapko-st.github.io/CV/nautilus.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={cardNautilus}
              isBlog={false}
              title="NAUTILUS"
              description="Réalisation d'un visuel de carte de visite pour une entreprise fictive en respectant la charte graphique avec le logiciel Photoshop."
              viewLink="https://mapko-st.github.io/CV/cardnautilus.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={immersive}
              isBlog={false}
              title="IMMERSIVE NATURE"
              description="Immersive Nature est un projet réalisé durant ma formation Front-End. Il s’agissait de créer un site vitrine avec comme contrainte l'unique emploi du Html et du Css, que le site ait une charte graphique et enfin qu'il soit responsive."
              ghLink="https://github.com/mapko-ST/immersive-nature/"
              demoLink="https://mapko-st.github.io/immersive-nature/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={justePrix}
              isBlog={false}
              title="JUSTE PRIX"
              description="Juste prix est un projet réalisé durant ma formation. Il s’agissait de créer un jeu avec comme contrainte l'unique emploi du Html, du Css et du Javascript. Le but du jeu étant de retrouver le bon résultat avant la fin du chronomètre."
              ghLink="https://github.com/mapko-ST/justeprix"
              demoLink="https://mapko-st.github.io/justeprix/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitCo}
              isBlog={false}
              title="FIT'CO"
              description="Fit'Co est un projet réalisé durant ma formation Front-End. Il s’agissait de reprendre un site déjà créé en Html et css, d'en faire la refonte sans modifier le contenu, charte graphique et image et le tout en Bootstrap."
              ghLink="https://github.com/mapko-ST/fitco"
              demoLink="https://mapko-st.github.io/fitco/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={dali2}
              isBlog={false}
              title="CHUPA CHUPS x DALÍ"
              description="Réalisation d'une affiche dans son support en pleine rue mêlant passé et présent avec le logiciel Photoshop. Le but étant un rappel sur le créateur du logo de la marque Chupa Chups."
              viewLink="https://mapko-st.github.io/CV/dali2.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={compositionGuideline2}
              isBlog={false}
              title="DESIGN GUIDELINES - APPROXI ESPORT"
              description="Création d'une guideline pour une association esport sous loi 1901 avec le logiciel Photoshop."
              viewLink="https://mapko-st.github.io/CV/compositionGuideline.png"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
