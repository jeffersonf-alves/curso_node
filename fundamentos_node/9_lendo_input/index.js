const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem preferida? ', (lang) => {
    console.log(`Sua linguagem preferida é: ${lang}`)
    readline.close()
})
