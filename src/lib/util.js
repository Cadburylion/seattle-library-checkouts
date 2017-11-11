export const nameCleanup = (name) => {
  if(!name) return ''
  let author
  author = nameReverse(name)
  author = removeNonAlphabetChars(author)
  author = removeTrailingPeriod(author)

  return `- ${author}`
}

const nameReverse = (name) => name.indexOf(',') ? name.split(',').reverse().join(' ') : name

const removeNonAlphabetChars = (name) => /\d/.test(name) ? name.replace(/[^a-zA-Z.]/g, ' ').trim() : name

const removeTrailingPeriod = (name) => name.endsWith('.') ? name.slice(0, -1) : name


export const removeUnabridged = (title) => title.replace('(Unabridged)', '').replace('(unabridged)', '')

export const removeAuthorFromTitle = (title) => title.split('/').splice(0, 1).join(' ')
