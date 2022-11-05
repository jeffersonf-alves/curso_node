

console.log(process.argv)

const args = process.argv.slice(2);


console.log(args)

const nome = args[0].split("=")
const idade = args[1].split("=")

console.log(nome[1])
console.log(idade[1])
