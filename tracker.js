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
  action();
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
          console.log("add department");
          break;
        }
        case "Add a new role": {
          console.log("add role");
          break;
        }
        case "Add a new employee": {
          console.log("add employee");
          break;
        }
        case "View employees by department": {
          console.log("view department");
          break;
        }
        case "View employees by role": {
          console.log("view role");
          break;
        }
        case "View all employees": {
          console.log("view employees");
          break;
        }
        case "View employees by manager": {
          console.log("view managers");
          break;
        }
        case "View the utilized budget for a department": {
          console.log("view budget");
          break;
        }
        case "Update an employee's role": {
          console.log("update role");
          break;
        }
        case "Update an employee's manager": {
          console.log("update manager");
          break;
        }
        case "Delete a department": {
          console.log("delete department");
          break;
        }
        case "Delete a role": {
          console.log("delete role");
          break;
        }
        case "Delete an employee": {
          console.log("delete employee");
          break;
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
