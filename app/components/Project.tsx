import type { ReactElement } from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import type { ProjectT } from "~/models/project";
import { formatTool } from "~/utils/tools-utils";

const ContainerForLinks = ({ children }: { children: ReactElement }) => (
  <div className="flex justify-start items-center gap-2 md:gap-5">
    {children}
  </div>
);

const Link = ({ children, url }: { children: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="underline text-gray-700 dark:text-gray-300 text-xs lg:text-[0.8rem] xl:text-[1rem]"
  >
    {children}
  </a>
);

const Project = ({ project }: { project: ProjectT }) => (
  <div
    className="
      w-[350px]
      md:w-[420px]
      xl:w-[500px] 
      h-[260px] 
      max-h-[260px]
      xl:h-[250px]
      xl:max-h-[250px]
      flex
      flex-col
      justify-between
      rounded-md 
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
      dark:border-none
      dark:shadow-gray-400 
      dark:hover:shadow-violet-400
      cursor-default"
  >
    <div className="p-2 w-full">
      <h3 className="font-extrabold text-transparent text-xl lg:text-2xl xl:text-3xl bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600 p-1">
        {project.title}
      </h3>
      <p className="text-sm lg:text-md text-black dark:text-gray-300 py-2">
        {project.description ?? ""}
      </p>
    </div>
    <p className="text-[1rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600 p-2">
      {project.tools?.map((tool) => formatTool(tool).label).join(" / ")}
    </p>
    <div className="p-2 flex flex-col gap-2">
      <ContainerForLinks>
        <>
          <AiFillGithub
            className="text-gray-700 dark:text-gray-300"
            size={"1.5rem"}
          />
          <Link url={project.repo}>{project.repo}</Link>
        </>
      </ContainerForLinks>
      {project.link && (
        <ContainerForLinks>
          <>
            <AiOutlineLink
              className="text-gray-700 dark:text-gray-300"
              size={"1.5rem"}
            />
            <Link url={project.link}>{project.link}</Link>
          </>
        </ContainerForLinks>
      )}
    </div>
  </div>
);

export default Project;
