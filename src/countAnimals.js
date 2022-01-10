const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const meuanimal = {};
    species.forEach((elemento) => {
      meuanimal[elemento.name] = elemento.residents.length;
    });
    return meuanimal;
  }
  const animalQtd = species.find((element) => animal.specie === element.name);
  if (!animal.sex) {
    return animalQtd.residents.length;
  }
  return animalQtd.residents.filter((element) => element.sex === animal.sex).length;
}
module.exports = countAnimals;

// ajuda da Aluna Rachel - e do grupo de estudos, refatorada com
