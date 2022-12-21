// Modulos Externos
const inquirer = require('inquirer');
const chalk = require('chalk')


// Modulos Externos
const fs = require('fs')


operation();
// Operação
function operation() {

    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que vc deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
    .then(function(answer) {

        const action = answer['action']
        console.log(action)

        if(action === 'Criar Conta') {
            createAccount()
        }

    })
    .catch((err) => console.log(err))
}

// Create An Account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabêns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a Seguir'))

    buildAccount();
}


function buildAccount() {
    inquirer.prompt([{
        name: 'accountname',
        message: 'Digite um nome para a sua conta: '
    }])
    .then((answer) => {
        const accountName = answer['accountname']

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Essa conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(error){
            console.log(err)
        })

        console.log(chalk.green('Parabêns, a sua conta foi criada!'))
        operation()
    })
    .catch((err) => {

    })
}