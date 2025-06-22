import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "HomeCast",
      description: "A predictive machine learning model to predict the price of houses based on various features.",
      technologies: ["Python", "scikit-learn", "pandas", "numpy", "matplotlib", "tensorflow"],
      link: "https://github.com/arihantbirani/HousePricePrediction.git"
    },
    {
      id: 2,
      name: "Market Sentiment Analysis Model",
      backName: "Sentiment Model",
      description: "A financial news sentiment analysis system that uses deep learning to classify news headlines for stock prediction.",
      technologies: ["Qiskit", "Keras", "NLTK", "ReLU Functions", "Poetry"],
      link: "https://github.com/TanglyEagle7718/VIP_QML-LSTM-.git"
    },
    {
      id: 3,
      name: "TravMatch",
      description: "A full-stack platform to match Travelers mentors and interns using a Gale-Shapely algorithm, tested with a mock database of 500+ pairings and API validation in Postman.",
      technologies: ["React", "Node.js", "Express", "Postman", "SQL"],
    },
    {
      id: 4,
      name: "GBA Graphical Application",
      description: "A graphical application for the GBA built in C. Leverages Mode 3 video and DMA for hardware-accelerated rendering, achieving 60+ FPS with real-time collision detection and optimized frame rendering.",
      technologies: ["C", "Visual Studio Code", "DMA"],
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center">Projects</h2>
            <p className="text-center mb-5">Here are some of the projects I've worked on! Hover over the squares below to learn more.</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project) => (
            <Col lg={3} md={6} sm={12} key={project.id} className="mb-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="flip-card-back">
                    <h3>{project.backName || project.name}</h3>
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
