const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SQLrootpass2",
  database: "employee_trackerdb",
});

connection.connect((err) => {
  if (err) throw err;
  // init()
});

function init() {
  //print table to console
}

function action() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a new department",
        "Add a new role",
        "Add a new employee",
        "View employees by department",
        "View employees by role",
        "View all employees",
        "View employees by manager",
        "View the utilized budget for a department",
        "Update an employee's role",
        "Update an employee's manager",
        "Delete a department",
        "Delete a role",
        "Delete an employee",
        "Exit application",
      ],
    })
    .then((answer) => {
      let choice = answer.action;
      switch (choice) {
        case "Add a new department": {
        }
        case "Add a new role": {
        }
        case "Add a new employee": {
        }
        case "View employees by department": {
        }
        case "View employees by role": {
        }
        case "View all employees": {
        }
        case "View employees by manager": {
        }
        case "View the utilized budget for a department": {
        }
        case "Update an employee's role": {
        }
        case "Update an employee's manager": {
        }
        case "Delete a department": {
        }
        case "Delete a role": {
        }
        case "Delete an employee": {
        }
        default: {
          connection.end();
        }
      }
    });
}

// add department

// add role

// add employee

// view employees by department

// view employees by role

// view all employees

// view employees by manager

// view utilized department budget (total of all salaries in that department)

// update employee role

// update employee manager

// delete department

// delete role

// delete employee
