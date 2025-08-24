import { Container, Row, Col } from "react-bootstrap";
import travelersImage from "../assets/img/Travelers.jpg";
import umbrellaImage from "../assets/img/umbrella.jpg";
import aigImage11 from "../assets/img/AIG11.jpg";
import aigImage2 from "../assets/img/AIG2.jpg";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Professional Experience</h2>
          </Col>
        </Row>
        
        {/* AIG Experience */}
        <Row className="align-items-center mt-5">
          <Col md={12}>
            <h3 className="text-center">Summer in Atlanta: My Experience @ AIG</h3>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col md={6}>
            <img
              src={aigImage11}
              alt="AIG Office"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
            <p>
              This past summer, I joined the Data Office at AIG in Atlanta, GA as a Data Science Intern, where I focused on building an agentic network to generate structured summaries from claims documents, reducing the manual time adjusters spent reviewing these lengthy files.
            </p>
            <p>
              I experimented with several orchestration strategies. My first prototype used an explicit router, where claims documents were classified by type and subtype before being sent to specialized summarization agents. While transparent, this design quickly reached a bottleneck as I was introduced to many document formats. I then migrated the workflow into LangGraph, which let me define conditional edges between agents and manage branching logic more dynamically.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col md={6} className="order-md-2">
            <img
              src={aigImage2}
              alt="AIG Data Office"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>
          <Col md={6} className="order-md-1">
            <p>
              Ultimately, the most effective solution came from implementing the pipeline within Palantir Foundry AIP's agentic structure. Its tool calling feature allowed agents to invoke specialized summarization tools on demand, yielding far higher accuracy and scalability than the earlier approaches. This became the final prototype, and it set the foundation for integrating agentic networks into AIG's broader claims-processing workflows.
            </p>
            <p>
              To demonstrate the value of this system beyond engineering, I also developed a workshop within Palantir Foundry for managers and non-technical stakeholders, showcasing how the network worked, how it drove accuracy improvements, and how these techniques could generalize to other document-processing tasks. The workshop helped bridge the gap between technical design and business adoption, making the results tangible for leadership.
            </p>
            <p>
              This internship gave me hands-on experience in agentic system design across multiple frameworks, and reinforced how important it is to balance transparency, flexibility, and enterprise integration when deploying LLM-based workflows.
            </p>
          </Col>
        </Row>

        {/* Travelers Experience */}
        <Row className="align-items-center mt-5">
          <Col md={12}>
            <h3 className="text-center">Summer in Hartford: My Experience @ Travelers</h3>
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
              In the summer of 2024, I embarked on my first professional software
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
              dynamic, supportive, and collaborative team. The team's welcoming
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