const minimist = require("minimist")

const args = minimist(process.argv.slice(2))


const a = args['a']
const b = args['b']

let soma = require('./soma').soma


soma(a, b)
