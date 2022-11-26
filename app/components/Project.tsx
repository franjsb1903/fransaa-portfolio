import type { ReactElement } from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import type { ProjectT } from "~/models/project";

const ContainerForLinks = ({ children }: { children: ReactElement }) => (
  <div className="flex justify-start items-center gap-5">{children}</div>
);

const Link = ({ children, url }: { children: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="underline text-violet-700 dark:text-violet-400 text-xs md:text-lg"
  >
    {children}
  </a>
);

const Project = ({ project }: { project: ProjectT }) => (
  <div
    className="
      w-[300px]
      md:w-[500px] 
      h-[200px] 
      flex
      flex-col
      justify-between
      rounded-md 
      mb-10
      p-2 
      transition 
      duration-300 
      bg-white 
      shadow-gray-400 
      hover:shadow-gray-700 
      shadow-md 
      hover:shadow-lg
      dark:bg-black
      dark:border-2
      dark:border-violet-400
      dark:shadow-violet-700 
      dark:hover:shadow-violet-400"
  >
    <div className="p-2 w-full ">
      <h3 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600">
        {project.title}
      </h3>
      <p className="text-md text-black dark:text-gray-400 py-2">
        {project.description}
      </p>
    </div>
    <div className="p-2 flex flex-col gap-2">
      <ContainerForLinks>
        <>
          <AiFillGithub className="text-white" size={"1.5rem"} />
          <Link url={project.repo}>{project.repo}</Link>
        </>
      </ContainerForLinks>
      {project.link && (
        <ContainerForLinks>
          <>
            <AiOutlineLink className="text-white" size={"1.5rem"} />
            <Link url={project.link}>{project.link}</Link>
          </>
        </ContainerForLinks>
      )}
    </div>
  </div>
);

export default Project;
