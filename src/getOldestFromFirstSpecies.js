const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const { species } = data;
  const funcionario = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const especie = species.find((animal) => animal.id === funcionario).residents;
  const animalVelho = especie.reduce((acc, nome) => {
    if (acc.age > nome.age) {
      return acc;
    }
    return nome;
  },
  {});
  const { age, name, sex } = animalVelho;
  const resultado = [name, sex, age];
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
