const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const animalsResidents = species.filter((specie) => specie.name === animal)[0].residents;
  const minimalAges = animalsResidents.every((specie) => specie.age > age);
  return minimalAges;
}
console.log(getAnimalsOlderThan('lions', 2));

module.exports = getAnimalsOlderThan;
