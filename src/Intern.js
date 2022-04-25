const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    generateHTML() {
        return `<div class="card col-lg-4 col-sm-12">
        <div class="card-body">
            <h2 class="card-title">${this.name}</h2>
            <h4>Intern</h4>
                <p class="card-text">
                <ul>
                    <li>
                        ID: ${this.id}
                    </li>
                    <li>
                        Email: <a href="mailto:">${this.email}</a>
                    </li>
                    <li>
                        School: ${this.school}
                    </li>
                </ul>
                </p>
        </div>
    </div>`
    }
}

module.exports = Intern;