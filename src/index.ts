import { getInput, setFailed } from "@actions/core";
import { getOctokit } from "@actions/github";

const token = getInput("token") || process.env.GH_PAT || process.env.GITHUB_TOKEN;

export const run = async () => {
  if (!token) throw new Error("GitHub token not found");
  const octokit = getOctokit(token);

  const q = getInput("query");
  const per_page = getInput("max") ? parseInt(getInput("max"), 10) : 100;
  const repos = await octokit.search.repos({ q, per_page });

  let md =
    getInput("prefix") ||
    "<!-- This list is auto-generated using koj-co/readme-repos-list -->\n<!-- Do not edit this list manually, your changes will be overwritten -->";
  repos.data.items.forEach((item) => {
    md += `[![${item.full_name}](https://images.weserv.nl/?url=${encodeURIComponent(
      item.owner.avatar_url.split("//")[1]
    )}&${getInput("weserv-query") || "h=50&w=50&fit=cover&mask=circle&maxage=7d"})](${
      getInput("no-homepage") ? item.html_url : item.homepage || item.html_url
    })`;
  });
};

export const wait = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
