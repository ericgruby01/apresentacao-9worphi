import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import getProjects from "../../data/projects";

const Projects = () => {
  const projects = Object.keys(getProjects);

  return (
    <>
      <DocumentTitle title={`9Worphi - Projetos`} />
      <ul className="projects">
        {projects.map((id) => {
          const project = getProjects[id];
          return (
            <li key={`project_${id}`}>
              <Link to={`/project/${id}`}>
                <img src={project.logo} alt={project.name} className="logo" />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
