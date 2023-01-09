import type { ProjectT } from "../models/project";

export async function getProjects(): Promise<ProjectT[]> {
  const response = await fetch(
    `${process.env.API_GITHUB}/users/franjsb1903/repos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_GITHUB_TOKEN}`,
      },
    }
  );
  const repos = await response.json();

  if (!Array.isArray(repos)) throw new Error("Error fetching projects");

  const projects: ProjectT[] = [];

  const finalRepos = repos.filter(
    (repo) =>
      repo.name !== "franjsb1903" && repo.name !== "franjsb1903.github.io"
  );

  const promises = finalRepos?.map(async (repo) => {
    const { id, name, description, url, homepage: link, topics: tools } = repo;

    const project: ProjectT = {
      id,
      title: name.replace(/-/g, " ").toUpperCase(),
      description,
      tools: tools ?? [],
      repo: url,
      link,
    };

    projects.push(project);
  });

  await Promise.all(promises);

  return projects;
}
