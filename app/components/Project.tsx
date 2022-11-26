import type { ProjectT } from "~/models/project";

const Project = ({ project }: { project: ProjectT }) => (
  <div className="w-[400px] h-[250px] rounded-md bg-black dark:bg-white p-8 transition duration-300 shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-500  mb-10">
    <div className="p-2 border-b-2 border-gray-400 w-full">
      <h3 className="text-3xl text-white dark:text-black uppercase">
        {project.title}
      </h3>
    </div>
    <div className="p-5">
      <p className="text-xl text-white dark:text-black">
        {project.description}
      </p>
    </div>
  </div>
);

export default Project;
