const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SQLrootpass2",
  database: "employee_trackerdb",
});

connection.connect((err) => {
  if (err) throw err;
  // init();
  action();
});

function init() {
  // need to select employee id and name, role title, department, salary, manager
  let query = "SELECT ";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
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
        "View all departments",
        "View all roles",
        "View all employees",
        "Update an employee's role",
        "Delete an employee",
        "Exit application",
      ],
    })
    .then((answer) => {
      let choice = answer.action;
      switch (choice) {
        case "Add a new department": {
          addDepartment();
          break;
        }
        case "Add a new role": {
          addRole();
          break;
        }
        case "Add a new employee": {
          addEmployee();
          break;
        }
        case "View all departments": {
          viewDepartments();
          break;
        }
        case "View all roles": {
          viewRoles();
          break;
        }
        case "View all employees": {
          viewEmployees();
          break;
        }
        case "Update an employee's role": {
          updateRole();
          break;
        }
        case "Delete an employee": {
          deleteEmployee();
          break;
        }
        default: {
          connection.end();
        }
      }
    });
}

const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Enter the name of the department you would like to add",
      name: "department",
    })
    .then((answer) => {
      let query = "INSERT INTO department SET ?";
      connection.query(
        query,
        {
          name: answer.department,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`Added to department table: ${answer.department}`);
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the title of the role you would like to add",
        name: "role",
      },
      {
        type: "input",
        message: "Enter the salary for this new role",
        name: "salary",
      },
      {
        type: "input",
        message: "Enter the department ID for this new role",
        name: "deptId",
      },
    ])
    .then((answer) => {
      let query = "INSERT INTO role SET ?";
      connection.query(
        query,
        {
          title: answer.role,
          salary: answer.salary,
          department_id: answer.deptId,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`Added new role: ${answer.role}`);
        }
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the new employee's first name",
        name: "firstName",
      },
      {
        type: "input",
        message: "Enter the new employee's surname",
        name: "lastName",
      },
      {
        type: "input",
        message: "Enter the role ID for this new employee",
        name: "roleId",
      },
      {
        type: "input",
        message: "Enter the department ID for this new employee",
        name: "deptId",
      },
    ])
    .then((answer) => {
      let query = "INSERT INTO role SET ?";
      connection.query(
        query,
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          department_id: answer.deptId,
        },
        (err, res) => {
          if (err) throw err;
          console.log(
            `Added new employee: ${answer.firstName} ${answer.firstName}`
          );
        }
      );
    });
};

const viewDepartments = () => {
  let query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const viewRoles = () => {
  let query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const viewEmployees = () => {
  let query = "SELECT * FROM employee";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

const updateRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the ID of the employee you would like to update",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the ID of the new role for this employee",
        name: "role",
      },
    ])
    .then((answer) => {
      let query = "UPDATE employee SET ? WHERE ?";
      connection.query(
        query,
        [{ role_id: answer.role }, { id: answer.id }],
        (err, res) => {
          if (err) throw err;
          console.log(
            `Updated employee ID: ${answer.id} to new role: ${answer.role}`
          );
        }
      );
    });
};

const deleteEmployee = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Enter the ID of the employee you would like to delete",
      name: "employee",
    })
    .then((answer) => {
      let query = "DELETE FROM employee WHERE ?";
      connection.query(
        query,
        {
          id: answer.employee,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`Deleted from employee table ID: ${answer.employee}`);
        }
      );
    });
};
