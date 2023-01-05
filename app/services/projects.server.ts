import type { ProjectT } from "../models/project";
import { extractInfoReadme } from "~/utils/project-utils";

const URLS = {
  repos: "https://api.github.com/users/franjsb1903/repos",
  readme: "https://api.github.com/repos/franjsb1903/$name/readme",
};

export async function getProjects(): Promise<ProjectT[]> {
  const repos = await (await fetch(URLS.repos)).json();

  const projects: ProjectT[] = [];
  console.log({ repos });
  const promises = repos?.map(async (repo: any) => {
    const { id, name, description, url } = repo;

    const { content } = await (
      await fetch(URLS.readme.replace("$name", name))
    ).json();

    const { technologies: tools, url: link } = extractInfoReadme(content ?? "");

    const project: ProjectT = {
      id,
      title: name,
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
