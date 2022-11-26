import Project from "~/components/Project";
import projects from "~/data/projects.json";

const Projects = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-start">
      {projects.projects.map((project) => (
        <div className="md:w-1/2" key={project.id}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
