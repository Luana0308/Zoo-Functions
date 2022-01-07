const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((child) => child.age < 18);
  const adults = entrants.filter((adult) => adult.age >= 18 && adult.age < 50);
  const seniors = entrants.filter((senior) => senior.age >= 50);
  return { adult: adults.length, child: childs.length, senior: seniors.length };
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;
  const { adult, senior, child } = prices;
  const visitantes = countEntrants(entrants);
  const { adult: adulto, child: crianca, senior: idoso } = visitantes;
  const calculo = (adult * adulto) + (child * crianca) + (senior * idoso);
  return calculo;
}
module.exports = { calculateEntry, countEntrants };
// ajuda da sala de estudos
