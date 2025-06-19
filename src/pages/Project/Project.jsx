import React from "react";
import "./Project.css";
const projects = [
  {
    title: "NETFLIX CLONE",
    image: "/project1.png",
    stack: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    badge: "Frontend",
    link: "https://netfllixclone-by-ar-ritik-thakur.netlify.app/",
  },
  {
    title: "Shoply Shopping website",
    image: "/project2.png",
    stack: ["Html", "Css", "javascript"],
    badge: "Frontend",
    link: "https://ecommerce-website-ritik.netlify.app/",
  },
  {
    title: "Blog CMS App",
    image: "/project1.png",
    stack: ["Node", "Express", "React", "MongoDB"],
    badge: "Full Stack",
    link: "https://your-blog-link.netlify.app/",
  },
];

const Project = () => {
  return (
    <>
      <div className="container project" id="projectpage">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
    
        <div className="row" id="ads">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">{project.badge}</span>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="card-details-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">{project.title}</h5>
                  </div>
                  <a
                    href={project.link}
                    className="ad-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
