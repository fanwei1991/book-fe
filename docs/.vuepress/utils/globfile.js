const glob = require('glob')
console.log(glob)

module.exports =  async function getFileList() {
  const vueFile = await glob('/**/*.md')
  console.log(vueFile)
}
