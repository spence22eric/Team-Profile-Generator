const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNum) {
        super(name, role, id, email);
        this.officeNum = officeNum;
    }
    OfficeNumber() {
        return this.officeNum;
    }
    generateHTML() {
        return `<div class="card col-lg-4 col-sm-12">
        <div class="card-body">
            <h2 class="card-title">${this.name}</h2>
            <h4>Manager</h4>
                <p class="card-text">
                <ul>
                    <li>
                        ID: ${this.id}
                    </li>
                    <li>
                        Email: <a href="mailto:">${this.email}</a>
                    </li>
                    <li>
                        Office Number: ${this.officeNum}
                    </li>
                </ul>
                </p>
        </div>
    </div>`
    }
}

module.exports = Manager;