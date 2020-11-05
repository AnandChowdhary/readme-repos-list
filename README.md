# 🖇️ README Repositories List

GitHub Action to list repositories in a README

[![Build CI](https://github.com/koj-co/readme-repos-list/workflows/Build%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Build+CI%22)
[![Release CI](https://github.com/koj-co/readme-repos-list/workflows/Release%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Release+CI%22)
[![Node CI](https://github.com/koj-co/readme-repos-list/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/readme-repos-list/actions?query=workflow%3A%22Node+CI%22)

## ⭐ Usage

You can create your `README.md` file with some comments, where this action will add a list of repositories:

```md
This is my fancy README

<!-- start: readme-repos-list -->
<!-- This list is auto-generated using koj-co/readme-repos-list -->
<!-- Do not edit this list manually, your changes will be overwritten -->
[![fnplus/Algorithms-Hacktoberfest](https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F24355438%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://hacktoberfest.digitalocean.com/)
[![NITSkmOS/Algorithms](https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F38863995%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://nitskmos.github.io/Algorithms)
[![fnplus/interview-techdev-guide](https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F24355438%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](http://bit.ly/fnplusnow)
[![faroit/awesome-python-scientific-audio](https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F72940%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://github.com/faroit/awesome-python-scientific-audio)
[![jlord/patchwork](https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F1305617%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](http://jlord.github.io/patchwork)
[![dzharii/awesome-typescript](https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F36020%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://github.com/dzharii/awesome-typescript)
[![KotlinBy/awesome-kotlin](https://images.weserv.nl/?url=avatars0.githubusercontent.com%2Fu%2F17604656%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://kotlin.link/)
[![alexpate/awesome-design-systems](https://images.weserv.nl/?url=avatars0.githubusercontent.com%2Fu%2F3749759%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://git.io/design-systems)
[![drone/drone](https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F2181346%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://drone.io)
[![521xueweihan/HelloGitHub](https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F8255800%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)](https://hellogithub.com/)
<!-- end: readme-repos-list -->

Your README continues after the list
```

Then, add the workflow which runs, for example, every day:

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
