export const nameCleanup = (name) => {
  if(!name) return ''
  let author
  author = nameReverse(name)
  author = removeNonAlphabetChars(author)
  author = removeTrailingPeriod(author)

  return `- ${author}`
}

const nameReverse = (name) => {
  return name.indexOf(',') ? name.split(',').reverse().join(' ') : name
}

const removeNonAlphabetChars = (name) => {
  return /\d/.test(name) ? name.replace(/[^a-zA-Z.]/g, ' ').trim() : name
}

const removeTrailingPeriod = (name) => {
  return name.endsWith('.') ? name.slice(0, -1) : name
}
