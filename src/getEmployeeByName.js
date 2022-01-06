const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const objectEmployees = employees.filter((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName)[0];
  if (employeeName === undefined) {
    return {};
  }
  return objectEmployees;
}

module.exports = getEmployeeByName;
