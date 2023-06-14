import Navbar from "../Components/Navbar";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="h-screen flex flex-col justify-evenly items-center p-2 bg-black">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
}

export default Projects;