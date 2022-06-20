# Welcome to My Portfolio!

![Portfolio Logo](https://i.imgur.com/s5oruO7.png)

[Deployed Url](https://sasse.vercel.app/)

---

## Overview

This project was created using the NextJS Framework and React with Typescript. The Github GraphQL API is used to fetch tagged portfolio projects and commit activity. Additionally, the markdown from project READMEs is parsed in to create project info pages. For my blog articles, the Dev.to REST API is used to fetch article markdown which is similarly parsed.

### Adding New Projects

- Create Project Readme
- Ensure title, logo, url, and video and populated where applicable
  - Logo url is parsed by a regex match `![___ Url](insert url here)`
  - DemoVideo = URL regex match after `[Demo Video]` in Readme
  - DeployUrl = URL regex match after `[__ Url]` in Readme
- Add project description to the Githun Repo
- Add the `portfolio-project` tag to project to have it be picked up by the graphQL search
  - Add additional skill tags for the filters on the portfolio (Ex: `react`, `typescript`)

### Adding new Skills

- Add the corresponding icon to `/assets/icons`
- Complete the new map entry in `/assets/icons/icons.ts`
