import React from "react";
import "./Projects.css";
import { ProjectList } from "./../../Components/ProjectList";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section className="project-section">
      <h2>These are some recent projects of mine</h2>
      <div className="project-container">
        <ProjectList />
      </div>
    </section>
  );
};
