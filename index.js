const inquirer = require('inquirer');
const fs = require('fs');

function employeeInfo(employees) {
inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'position',
            message: 'Please choose your position',
            choices: ["Intern", "Engineer", "Manager"]
        },
        {
            type: 'number',
            name: 'ID',
            message: 'What is your employee ID?'            
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'number',
            name: 'phone',
            message: 'What is your office phone number?'
        },
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Would you like to add another employee?'
        }
    ])
    .then((answers) => {
        let allAnswers = employees.concat([answers]);
        console.log(allAnswers);

        if (answers.additionalEmployee) {            
            employeeInfo(allAnswers);
        }
    })
}

employeeInfo([]);