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

// what would you like to do?
//inquirer prompt for actions
//switch case for callback functions

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
