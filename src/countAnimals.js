const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = species.reduce((acc, valorAnimal) =>
    ({ ...acc, [valorAnimal.name]: valorAnimal.residents.length }), {});
  if (animal === undefined) {
    return allAnimals;
  }
  const { specie } = animal;
  const sexAnimal = species.find((animalselected) => animalselected.name === specie);
  const aminalsexSelected = sexAnimal.residents.reduce((acc, valor) => {
    if (valor.sex === animal.sex) {
      return acc + 1;
    }
    return acc;
  }, 0);
  if (animal.sex) return aminalsexSelected;
  return allAnimals[specie];
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;

// ajuda da Aluna Rachel - e do grupo de estudos
