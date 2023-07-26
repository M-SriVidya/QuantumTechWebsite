import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { projectsData } from "../data"; // Assuming the project data is imported from a data file

function App() {
  return (
    <div className="bg-black">
            <div>
                <Navbar/>
            </div>
            <p class="text-3xl font-semibold text-blue-500 text-center mt-12">Objective</p>
            <p class="text-xl text-white mt-4 text-center mx-48"> Our group is actively engaged in a range of cutting-edge projects that explore various aspects of quantum computing and experimental physics. These projects involve designing and implementing quantum algorithms, developing new quantum devices and architectures, and investigating the potential applications of quantum computing in different domains. By pushing the boundaries of experimental quantum technologies, we aim to pave the way for practical quantum computers capable of solving real-world problems. </p>
            <hr class="w-1/4 h-1 mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
            <p class="text-3xl font-semibold text-blue-500 text-center mt-8">Projects</p>
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
    <Footer />
    </div>
  );
}

export default App;
