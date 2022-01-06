const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const animalsIds = species.filter((animal) => ids.includes(animal.id));
  return animalsIds;
}
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
