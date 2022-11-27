import Project from "~/components/Project";
import projects from "~/data/projects.json";

const Projects = () => {
  return (
    <div className="flex flex-wrap flex-col xl:flex-row items-center justify-center md:justify-start mt-10">
      {projects.projects.map((project) => (
        <div className="lg:w-1/2 mb-10 flex justify-center" key={project.id}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
