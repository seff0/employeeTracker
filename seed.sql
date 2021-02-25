USE employeeDB;

INSERT INTO department (name)
VALUES ('Sales'), ('Development'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 120000, 1), ('Salesperson', 90000, 1), ('Senior Developer', 140000, 2), ('Junior Developer', 80000, 2), ('Accountant', 100000, 3), ('Lawyer', 250000, 4), ('Consultant', 160000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Michael', 'Transactions', 1, null), ('Alma', 'Money', 2, 1), ('Rayden', `Th'Dungeon`, 3, null), ('ThreeSixty', 'NoScope', 4, 3), ('Cookin', 'Thabooks', 5, null), ('Chasen', 'Capital', 6, null), ('Lee Gal', 'Konsoltent', 7, 6);
