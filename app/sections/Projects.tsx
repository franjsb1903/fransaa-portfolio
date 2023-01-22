import type { ProjectT } from "~/models/project";
import Project from "~/components/Project";

const Projects = ({ projects }: { projects: ProjectT[] }) => (
  <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center md:justify-start mt-10">
    {projects.map((project) => (
      <div className="lg:w-1/2 mb-10 flex justify-center" key={project.id}>
        <Project project={project} />
      </div>
    ))}
  </div>
);

export default Projects;
