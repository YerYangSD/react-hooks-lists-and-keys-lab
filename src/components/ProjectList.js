import React from "react";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from 'uuid'
function ProjectList({ projects }) {
  //  console.log(projects);
  const projectItems = projects.map((project) => {
    return <ProjectItem key={uuidv4()} name={project.name} about={project.about} technologies={project.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
