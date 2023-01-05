export function extractInfoReadme(contentBS64: string) {
  if (!contentBS64) return {};
  const content = Buffer.from(contentBS64, "base64").toString();

  const phrases = content.split("\n");

  const technologies = phrases
    .filter((el) => el.includes("- "))
    .map((t) => t.replace("- ", ""));

  const url = phrases.find((el) =>
    el.includes("Aquí puedes ver la [aplicación")
  );

  return {
    technologies,
    url: url?.substring(url.indexOf("(") + 1, url.lastIndexOf(")")),
  };
}
