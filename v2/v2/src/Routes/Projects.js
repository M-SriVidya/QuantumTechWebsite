import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Navbar from "../Components/Navbar";
import { projectsData } from "../data"; // Assuming the project data is imported from a data file

function App() {
  return (
    <div className="bg-black">
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-wrap justify-around p-5">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          authors={project.description}
          // Optionally, you can add more properties here and pass them to the ProjectCard component as well.
        />
      ))}
    </div>
    </div>
  );
}

export default App;
