import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "right", position: "relative" }}>
          <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
            <div>
              <input type="text" placeholder="Nom" name="firstname" required />
            </div>
            <div>
              <input
                type="text"
                placeholder="Prénom"
                name="lastname"
                required
              />
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
              <textarea placeholder="Votre message" name="message" required />
            </div>
            <div>
              <button type="submit"> ENVOYER </button>
            </div>
          </form>
          <h3>Besoin de prendre contact avec moi ?</h3>
        </Row>
      </Container>
    </div>
  );
};
export default ContactForm;
