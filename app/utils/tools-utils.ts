export const formatTool = (tool: string) => {
  switch (tool) {
    case "react":
      return "ReactJS";
    case "tailwindcss":
      return "TailwindCSS";
    case "vitejs":
      return "ViteJS";
    case "javascript":
      return "JavaScript";
    case "styled_components":
      return "Styled Components";
    case "typescript":
      return "TypeScript";
    case "redux":
      return "Redux";
    case "react_router_dom":
      return "React Router DOM";
    case "nodejs":
      return "NodeJS";
    case "express":
      return "Express";
    case "sqlite3":
      return "SQLite3";
    case "json_web_server":
      return "JSON Web Server";
  }
};
