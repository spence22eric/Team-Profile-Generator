const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email);
        this.github = github;
        console.log(github);
    }
    getGithub() {
        return this.github;
    }
    generateHTML() {        
        return `<div class="card col-lg-4 col-sm-12">
        <div class="card-body">
            <h2 class="card-title">${this.name}</h2>
            <h4>Engineer</h4>
                <p class="card-text">
                <ul>
                    <li>
                        ID: ${this.id}
                    </li>
                    <li>
                        Email: <a href="mailto:">${this.email}</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/${this.github}" target="_blank" rel="noopener">${this.github}</a>
                    </li>
                </ul>
                </p>
        </div>
    </div>`
    }    
}
module.exports = Engineer;