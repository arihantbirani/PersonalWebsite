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

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Machine Learning Model",
      description: "Developed a predictive model using Python and scikit-learn for analyzing customer behavior patterns. Achieved 85% accuracy in predictions.",
      technologies: ["Python", "scikit-learn", "pandas", "numpy"],
      link: "https://github.com/yourusername/ml-project"
    },
    {
      id: 2,
      name: "Web Application",
      description: "Built a full-stack web application using React and Node.js. Features include user authentication, real-time updates, and responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/web-app"
    },
    {
      id: 3,
      name: "Data Analysis Dashboard",
      description: "Created an interactive dashboard using Tableau for visualizing business metrics and KPIs. Helped stakeholders make data-driven decisions.",
      technologies: ["Tableau", "SQL", "Excel"],
      link: "https://public.tableau.com/your-dashboard"
    },
    {
      id: 4,
      name: "Mobile App",
      description: "Developed a cross-platform mobile application using React Native. Features include GPS tracking, push notifications, and offline functionality.",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "https://github.com/yourusername/mobile-app"
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Projects</h2>
            <p className="text-center mb-5">Here are some of the projects I've worked on</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col lg={3} md={6} sm={12} key={project.id} className="mb-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{project.name}</h3>
                    <p>Hover for details</p>
                  </div>
                  <div className="flip-card-back">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="technologies">
                      <strong>Technologies:</strong>
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
