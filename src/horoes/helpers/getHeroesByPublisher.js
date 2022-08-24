import { heroes } from "../data/heroes";

export const getHeroesByPulisher = (valuePublisher) => {
 const validPublisheres = ['DC Comics','Marvel Comics'];
if (!validPublisheres.includes(valuePublisher)) {
  throw new Error(`${valuePublisher} is not a valid publisher`);
}
// me va a devolver todos los heroes y sus datos con el mismo 'valuePublisher'
  return heroes.filter((heroe) => heroe.publisher === valuePublisher);
}



