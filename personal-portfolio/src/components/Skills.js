import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Resume</h2>
              <p>
                See below to learn more about my education, professional background, and experiences.
              </p>
              {/* Embedded PDF */}
              <iframe
                src="/Arihant_Birani_Resume.pdf"
                width="100%"
                height="800px"
                style={{ border: "none", borderRadius: "10px" }}
                title="Arihant Birani Resume"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

