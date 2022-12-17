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
): { id: number; label: string; Icon?: IconType } => {
  switch (tool) {
    case "react":
      return { id: 1, label: "ReactJS", Icon: SiReact };
    case "tailwindcss":
      return { id: 2, label: "TailwindCSS", Icon: SiTailwindcss };
    case "vitejs":
      return { id: 3, label: "ViteJS", Icon: SiVite };
    case "javascript":
      return { id: 4, label: "JavaScript", Icon: SiJavascript };
    case "styled_components":
      return { id: 5, label: "Styled Components", Icon: SiStyledcomponents };
    case "typescript":
      return { id: 6, label: "TypeScript", Icon: SiTypescript };
    case "redux":
      return { id: 7, label: "Redux", Icon: SiRedux };
    case "react_router_dom":
      return { id: 8, label: "React Router DOM" };
    case "nodejs":
      return { id: 9, label: "NodeJS", Icon: DiNodejs };
    case "express":
      return { id: 10, label: "Express", Icon: SiExpress };
    case "sqlite3":
      return { id: 11, label: "SQLite3" };
    case "json_web_server":
      return { id: 12, label: "JSON Web Server" };
    case "git":
      return { id: 13, label: "Git", Icon: SiGit };
    case "html":
      return { id: 14, label: "HTML", Icon: SiHtml5 };
    case "css":
      return { id: 15, label: "CSS", Icon: SiCss3 };
    case "docker":
      return { id: 16, label: "Docker", Icon: SiDocker };
    case "gitlab":
      return { id: 17, label: "GitLab", Icon: AiFillGitlab };
    case "scss":
      return { id: 18, label: "SCSS", Icon: SiSass };
    case "python":
      return { id: 19, label: "Python", Icon: SiPython };
    case "java":
      return { id: 20, label: "JAVA", Icon: SiJava };
    case "react_native":
      return { id: 21, label: "React Native", Icon: SiReact };
    case "postgresql":
      return { id: 22, label: "PostgreSQL", Icon: SiPostgresql };
    case "testing_library":
      return { id: 23, label: "Testing Library", Icon: SiTestinglibrary };
    case "mongo_db":
      return { id: 24, label: "MongoDB", Icon: SiMongodb };
    case "material_ui":
      return { id: 25, label: "Material UI", Icon: SiMaterialui };
    case "sql":
      return { id: 26, label: "SQL", Icon: AiOutlineConsoleSql };
    case "jest":
      return { id: 27, label: "Jest", Icon: SiJest };
    case "gitflow":
      return { id: 28, label: "GitFlow", Icon: AiOutlineBranches };
    case "graphql":
      return { id: 29, label: "GraphQL", Icon: SiGraphql };
    case "remix":
      return { id: 30, label: "Remix Run", Icon: SiReact };
    default:
      return { id: 0, label: "" };
  }
};
