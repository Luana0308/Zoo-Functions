const { species, employees } = require('../data/zoo_data');

function verificaInformaçõesInválidas(parametro) {
  const nomeFuncionarioExisteFuncionarios = employees.some((item) =>
    parametro.name === item.firstName);
  const sobrenomeFuncionarioExisteFuncionarios = employees.some((item) =>
    parametro.name === item.lastName);
  const idFuncionarioExisteFuncionarios = employees.some((item) =>
    parametro.id === item.id);

  if (!nomeFuncionarioExisteFuncionarios
    && !sobrenomeFuncionarioExisteFuncionarios
    && !idFuncionarioExisteFuncionarios) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(parametro) {
  verificaInformaçõesInválidas(parametro);
}
module.exports = getEmployeesCoverage;
