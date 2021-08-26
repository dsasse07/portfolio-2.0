export const parseRepoReadme = (readmeText: string) => {
  // Matches urls after [... Logo], [... Video], [Deploy Url]
  return readmeText.match(
    /(?<=Logo\]\()(https:\/\/[\w\.\/\?\=\-\*]+)|(?<=Video\]\()(https:\/\/[\w\.\/\?\=\-]+)|(?<=Url\]\()(https:\/\/[\w\.\/\?\=\-]+)/g
  )
}
