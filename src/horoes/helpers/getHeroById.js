import { heroes } from "../data/heroes"

export const getHeroById = (id) =>{
// find() de default si es 'false' devuelve 'undefined'
  return  heroes.find(hero => hero.id === id)
}

