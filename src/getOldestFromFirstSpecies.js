const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees } = data;
  const { species } = data;
  const idAnimal = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const especies = species.find((animal) => animal.id === idAnimal).residents;
  const ordenado = especies.sort((a, b) => b.age - a.age);
  const olderAnimal = ordenado[0];
  const resultadoesperado = Object.keys(olderAnimal).map((key) => olderAnimal[key]);
  return resultadoesperado;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;

// const animalMaisVelho = especies.reduce((acc, nome) => {
//   if (acc.age > nome.age) {
//     return acc;
//   }
//   return nome;
// },
// {});
// const { age, name, sex } = animalMaisVelho;
// const resultado = [name, sex, age];
// return resultado;
