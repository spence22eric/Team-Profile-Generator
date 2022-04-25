const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');

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
                name: 'role',
                message: 'Please choose your role',
                choices: ["Intern", "Engineer", "Manager"]
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is your employee ID?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'text',
                name: 'contact',
                message: 'Please provide contact information.'
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
            } else {
                generateHTML(createEmployeeObj(allAnswers));
            }
        })
}

function createEmployeeObj(allAnswers) {
    let employees = [];
    allAnswers.forEach(answer => {
        if (answer.role == 'Manager') {
            employees.push(new Manager(answer.name, answer.role, answer.id, answer.email, answer.contact));
        } else if (answer.role == 'Engineer') {
            employees.push(new Engineer(answer.name, answer.role, answer.id, answer.email, answer.contact));
        } else {
            employees.push(new Intern(answer.name, answer.role, answer.id, answer.email, answer.contact));
        }
    })
    return employees;
}

function generateHTML(employees) {
    let html = ""
    employees.forEach(employee => {
        html += employee.generateHTML();
    })
    html = `
    <html>
        <head>
            <title>Team Profile Generator</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="../lib/css/styles.css">
        </head>

        <body>
            <header class="bg-danger text-light text-center pt-3">
                <h1>My Team</h1>
            </header>
            <div class="row">
            ${html}
            </div>
        </body>    
    </html>    
    `;

    fs.writeFile('./dist/index.html', html, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

employeeInfo([]);