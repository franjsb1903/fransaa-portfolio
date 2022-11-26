import Project from "~/components/Project";
import projects from "~/data/projects.json";

const Projects = () => {
  return (
    <div className="flex gap-16 justify-evenly">
      {projects.projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
