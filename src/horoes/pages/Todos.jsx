import React from 'react'
import { HeroCard } from '../components/HeroCard';
import { heroes } from '../data/heroes';

const Todos = () => {
  return (
    <>
      <h1>All List</h1>
      <hr />
      <h1>Hero List</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
}

export default Todos