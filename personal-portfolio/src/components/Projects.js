import { Container, Row, Col } from "react-bootstrap";
import travelersImage from "../assets/img/Travelers.jpg"; // Update with the correct path
import umbrellaImage from "../assets/img/umbrella.jpg";  // Update with the correct path

export const TravelersExperience = () => {
  return (
    <section className="travelers-experience" id="experience">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Summer in Hartford: My Experience @ Travelers</h2>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col md={6}>
            <img
              src={travelersImage}
              alt="Travelers Office"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
            <p>
              This past summer, I embarked on my first professional software
              engineering journey at Travelers in Hartford, CT. I had the
              privilege of working as part of the Digital Enablement Team, where
              I contributed to deploying an internal application designed to
              streamline the management of IVR call centers utilized by
              insurance claim agents. This project gave me hands-on experience
              in building impactful solutions that directly supported business
              operations and customer interactions.
            </p>
            <p>
              Throughout my time at Travelers, I was fortunate to be part of a
              dynamic, supportive, and collaborative team. The team’s welcoming
              environment and focus on mentorship allowed me to grow both
              technically and professionally. Working closely with experienced
              engineers, I gained valuable insights into software development
              best practices, Agile methodologies, and the importance of
              user-centered design in crafting effective tools.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col md={6} className="order-md-2">
            <img
              src={umbrellaImage}
              alt="Red Umbrella Sculpture"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>
          <Col md={6} className="order-md-1">
            <p>
              This internship not only strengthened my technical skills but also
              enhanced my ability to work in a fast-paced, collaborative
              environment. My time at Travelers was truly transformative,
              leaving me excited to continue pursuing impactful projects in
              software engineering and data science.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
