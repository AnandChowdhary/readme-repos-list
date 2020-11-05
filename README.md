# 🖇️ README Repositories List

GitHub Action to list repositories in a README

[![Build CI](https://github.com/koj-co/readme-repos-list/workflows/Build%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Build+CI%22)
[![Release CI](https://github.com/koj-co/readme-repos-list/workflows/Release%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Release+CI%22)
[![Node CI](https://github.com/koj-co/readme-repos-list/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Node+CI%22)

## ⭐ Usage

You can create your `README.md` file with some comments, where this action will add a list of repositories:

```md
This is my fancy README

<!-- start: YOUR_STARTER -->...the list will be added here...<!-- end: YOUR_STARTER -->

Your README continues after the list
```

By default, "readme-repos-list" is the value for `YOUR_STARTER`. Then, add the workflow which runs, for example, every day:

```yaml
name: README Repos List
on:
  schedule:
    - cron: "0 0 * * 1"
jobs:
  list:
    runs-on: ubuntu-latest
    steps:
      - name: Run readme-repos-list
        uses: koj-co/readme-repos-list@master
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          query: "Octocat in:readme"
          max: 10
```

This will create a README like so:

<!-- start: readme-repos-list -->
<!-- end: readme-repos-list -->

### Inputs

#### `token` (required)

Your GitHub token or personal access token. If you don't have a bot account, you should use the default `${{ secrets.GITHUB_TOKEN }}`.

#### `query` (required)

Search query used to find repositories. See [Constructing a search query](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#constructing-a-search-query) on GitHub Docs for more information. An example query can look like:

```
Octocat in:readme user:koj-co
```

#### Optional inputs

| Input            | Description                            |
| ---------------- | -------------------------------------- |
| `owner`          | Owner of repository to commit to       |
| `repo`           | Name of repository to commit to        |
| `max`            | Maximum number of repositories to list |
| `prefix`         | Content to add before the list         |
| `weserv-query`   | Image manipulation query parameters    |
| `no-homepage`    | Link to repository, not homepage       |
| `suffix`         | Content to add at the end of the list  |
| `path`           | Path to file to update with content    |
| `start`          | Starting comment to look for           |
| `end`            | Ending comment                         |
| `commit-message` | Updating file commit message           |

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- "GitHub" is a trademark of GitHub, Inc.

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
