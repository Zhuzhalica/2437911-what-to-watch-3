import {JSX} from 'react';

export type CatalogFilmCardProp = {
  srcImg: string;
  Title: string;
}

function CatalogFilmCard({srcImg, Title}: CatalogFilmCardProp): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={srcImg} alt={Title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{Title}</a>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
