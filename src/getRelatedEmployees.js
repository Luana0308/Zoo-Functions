const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((manager) =>
    manager.managers.some((isManagertrue) => isManagertrue === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId) === true) {
    const trueManager = employees.filter((manager) => manager.managers.includes(managerId));
    const array = [];
    trueManager.forEach((gerente) => array.push(`${gerente.firstName} ${gerente.lastName}`));
    return array;
  }
}

module.exports = { isManager, getRelatedEmployees };
