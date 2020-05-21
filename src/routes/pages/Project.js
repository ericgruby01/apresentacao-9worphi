import React from "react";
import DocumentTitle from "react-document-title";
import { useParams, Redirect, Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";

/** projetos */
import projects from "../../data/projects";

const properties = {
  transitionDuration: 300,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
};

const ProjectComponent = () => {
  const { id } = useParams();

  const project = projects[id];

  if (!project) {
    return <Redirect to="/projects" />;
  }

  return (
    <div className="project">
        <DocumentTitle title={`9Worphi - ${project.name}`} />
      <div className="logo">
        <img src={project.logo} alt={project.name} title={project.name} />
      </div>
      <div className="infos">
        <div className="info">
          <h4><i className="fas fa-quote-left fa-fw"/> Descrição</h4>
          {project.description}
        </div>
        {project.features && (
          <div className="info">
            <h4><i className="fas fa-star fa-fw"/> Features</h4>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </div>
        )}
        {project.document && (
          <div className="info">
            <h4><i className="fas fa-pencil-ruler fa-fw"/> Manual de Marca</h4>
            <a
              href={project.document}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient"
            >
              <i className="fas fa-download fa-fw"/> Download
            </a>
            <br />
            <small>
              Desenvolvido por{" "}
              <Link to={project.document_author.link}>
                <i className="fas fa-user fa-fw"/> {project.document_author.label}
              </Link>
            </small>
          </div>
        )}
        {project.prints && (
            <div className="info">
                <h4><i className="fas fa-camera fa-fw"/> Screenshots</h4>
                {project.prints.length > 1 ? (
                <Fade {...properties}>
                    {project.prints.map((foto) => (
                    <img key={foto} src={foto} />
                    ))}
                </Fade>
                ) : (
                <img
                    src={project.prints[0]}
                    alt={`Print do projeto ${project.name}`}
                    title={`Print do projeto ${project.name}`}
                />
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
