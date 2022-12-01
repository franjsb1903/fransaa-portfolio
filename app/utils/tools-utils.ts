import type { IconType } from "react-icons";
import {
  AiFillGitlab,
  AiOutlineConsoleSql,
  AiOutlineBranches,
} from "react-icons/ai";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiStyledcomponents,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiGit,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiSass,
  SiPython,
  SiJava,
  SiPostgresql,
  SiTestinglibrary,
  SiMongodb,
  SiMaterialui,
  SiJest,
  SiGraphql,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

export const formatTool = (
  tool: string
): { label: string; Icon?: IconType } => {
  switch (tool) {
    case "react":
      return { label: "ReactJS", Icon: SiReact };
    case "tailwindcss":
      return { label: "TailwindCSS", Icon: SiTailwindcss };
    case "vitejs":
      return { label: "ViteJS", Icon: SiVite };
    case "javascript":
      return { label: "JavaScript", Icon: SiJavascript };
    case "styled_components":
      return { label: "Styled Components", Icon: SiStyledcomponents };
    case "typescript":
      return { label: "TypeScript", Icon: SiTypescript };
    case "redux":
      return { label: "Redux", Icon: SiRedux };
    case "react_router_dom":
      return { label: "React Router DOM" };
    case "nodejs":
      return { label: "NodeJS", Icon: DiNodejs };
    case "express":
      return { label: "Express", Icon: SiExpress };
    case "sqlite3":
      return { label: "SQLite3" };
    case "json_web_server":
      return { label: "JSON Web Server" };
    case "git":
      return { label: "Git", Icon: SiGit };
    case "html":
      return { label: "HTML", Icon: SiHtml5 };
    case "css":
      return { label: "CSS", Icon: SiCss3 };
    case "docker":
      return { label: "Docker", Icon: SiDocker };
    case "gitlab":
      return { label: "GitLab", Icon: AiFillGitlab };
    case "scss":
      return { label: "SCSS", Icon: SiSass };
    case "python":
      return { label: "Python", Icon: SiPython };
    case "java":
      return { label: "JAVA", Icon: SiJava };
    case "react_native":
      return { label: "React Native", Icon: SiReact };
    case "postgresql":
      return { label: "PostgreSQL", Icon: SiPostgresql };
    case "testing_library":
      return { label: "Testing Library", Icon: SiTestinglibrary };
    case "mongo_db":
      return { label: "MongoDB", Icon: SiMongodb };
    case "material_ui":
      return { label: "Material UI", Icon: SiMaterialui };
    case "sql":
      return { label: "SQL", Icon: AiOutlineConsoleSql };
    case "jest":
      return { label: "Jest", Icon: SiJest };
    case "gitflow":
      return { label: "GitFlow", Icon: AiOutlineBranches };
    case "graphql":
      return { label: "GraphQL", Icon: SiGraphql };
    default:
      return { label: "" };
  }
};
