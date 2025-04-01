const inquirer = require(`inquire`)
const chalk = require (`chalk`)

const fs = require (`fs`)
function operation (){
    inquirer.prompt ([
        {
            type: 'list',
            name: 'action',
            mensagem: 'Escolha uma das opções do menu:',
            choices:[
            'Criar conta'
            'Consultar saldo'
            'Depositar'
            'Sacar'
            'Sair'
          ]
        }
       
    ]}.then((answer) => {
        const action = answer ['action']
        

    if(action === ' Criar conta')
    }
    
    
    
    )
 

