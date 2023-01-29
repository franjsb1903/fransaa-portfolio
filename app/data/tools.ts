import {
  AiFillGitlab,
  AiOutlineConsoleSql,
  AiOutlineBranches,
} from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
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
  SiCloudflare,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import type { ToolModel } from "~/models/tool";

export const tools: { [key: string]: ToolModel } = {
    reactjs: {
        label: "ReactJS",
        Icon: SiReact
    },
    tailwindcss: {
        label: "TailwindCSS",
        Icon: SiTailwindcss
    },
    vitejs: {
        label: "ViteJS",
        Icon: SiVite
    },
    javascript: {
        label: "JavaScript",
        Icon: SiJavascript
    },
    "styled-components": {
        label: "Styled Components",
        Icon: SiStyledcomponents
    },
    typescript: {
        label: "TypeScript",
        Icon: SiTypescript
    },
    redux: {
        label: "Redux",
        Icon: SiRedux
    },
    "react-router-dom": {
        label: "React Router DOM"
    },
    nextjs: {
        label: "NextJS",
        Icon: TbBrandNextjs
    },
    nodejs: {
        label: "NodeJS",
        Icon: DiNodejs
    },
    express: {
        label: "Express",
        Icon: SiExpress
    },
    git: {
        label: "Git",
        Icon: SiGit
    },
    html: {
        label: "HTML",
        Icon: SiHtml5
    },
    css: {
        label: "CSS",
        Icon: SiCss3
    },
    docker: {
        label: "Docker",
        Icon: SiDocker
    },
    scss: {
        label: "SCSS",
        Icon: SiSass
    },
    python: {
        label: "Python",
        Icon: SiPython
    },
    java: {
        label: "Java",
        Icon: SiJava
    },
    postgresql: {
        label: "PostgreSQL",
        Icon: SiPostgresql
    },
    testinglibrary: {
        label: "Testing Library",
        Icon: SiTestinglibrary
    },
    mongodb: {
        label: "MongoDB",
        Icon: SiMongodb
    },
    materialui: {
        label: "Material UI",
        Icon: SiMaterialui
    },
    jest: {
        label: "Jest",
        Icon: SiJest
    },
    graphql: {
        label: "GraphQL",
        Icon: SiGraphql
    },
    cloudflare: {
        label: "Cloudflare",
        Icon: SiCloudflare
    },
    gitlab: {
        label: "GitLab",
        Icon: AiFillGitlab
    },
    sql: {
        label: "SQL",
        Icon: AiOutlineConsoleSql
    },
    gitflow: {
        label: "GitFlow",
        Icon: AiOutlineBranches
    },
    "remix-run": {
        label: "Remix Run",
        Icon: SiReact
    },
    hono: {
        label: "Hono",
        Icon: SiJavascript
    },
    astro: {
        label: "Astro",
        Icon: SiJavascript
    },
    "react-native": {
        label: "React Native",
        Icon: SiReact
    },
    "json-web-server": {
        label: "JSON Web Server"
    },
    sqlite3: {
        label: "SQLite3"
    },
    threejs: {
        label: "ThreeJS"
    }
}