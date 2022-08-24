import { Link } from 'react-router-dom';
import './style.css'


export const HeroCard = ({
id,
superhero,
publisher,
alter_ego,
first_appearance,
characters
}) => {

 const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const charactersByHero = <p className="changheSize">{characters}</p>

  return (
    <>
      <div className="col animate__animated animate__bounceInDown">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-6  ">
              <img
                src={heroImageUrl}
                className="card-img sizeImage"
                alt={superhero}
              />
              <div className="col-8 miBox">
                <div className="card-body">
                  <h5 className="card-title sizeTitle">{superhero}</h5>
                  <p className="card-text changheSize">{alter_ego}</p>
                  {alter_ego !== characters && charactersByHero}
                  <p className="card-text ">
                    <small className="text-muted changheSize">
                      {first_appearance}
                    </small>
                  </p>
                  <Link className="changheSize" to={`/hero/${id}`}>
                    Más..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

