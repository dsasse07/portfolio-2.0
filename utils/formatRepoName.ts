export const formatRepoName = (repoName: string) => {
  return repoName
    .replace(/-/g, ' ')
    .split(' ')
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
