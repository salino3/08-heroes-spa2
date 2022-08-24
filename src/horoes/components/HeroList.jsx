
import { useMemo } from 'react';
import {getHeroesByPulisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({Xpublisher}) => {

  const heroes = useMemo(() => getHeroesByPulisher(Xpublisher), [Xpublisher])

  return (
    <>
      <h1>Hero List</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
       {heroes.map(hero => (
       <HeroCard key={hero.id} 
        {...hero} 
       />   
    ))}
       
      </div>
    </>
  );
}

