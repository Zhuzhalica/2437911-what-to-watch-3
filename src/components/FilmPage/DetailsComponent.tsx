import {JSX} from 'react';
import {Person} from '../../types/Person.ts';
import {Genres} from '../../consts/Genres.ts';

export type DetailsProps = {
  director: Person;
  starring: Person[];
  runTimeMinute: number;
  releaseDate: string;
  genre: Genres;
}

function DetailsComponent({director, starring, runTimeMinute, releaseDate, genre}: DetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">
            {`${director.firstName} ${director.lastName}`}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              starring
                .map((p, index) => (
                  index + 1 === starring.length
                    ?
                    `${p.firstName} ${p.lastName}`
                    :
                    <>
                      {`${p.firstName} ${p.lastName}`}, <br/>
                    </>
                ))
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTimeMinute}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{releaseDate}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsComponent;
