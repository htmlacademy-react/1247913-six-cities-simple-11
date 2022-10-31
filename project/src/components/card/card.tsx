import { Link } from 'react-router-dom';
import { cityType } from '../../types';
import { AppRoute } from '../../const';


type cardProps = {
  data: cityType;
  location: string;
}

function Card({ data, location }: cardProps): JSX.Element {
  {/* eslint-disable-next-line no-console*/}
  console.log('data: ', data);

  return (
    <article className={`${location}__card place-card`}>
      {data.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${location}__image-wrapper place-card__image-wrapper`}>
        {/* <Link to={`${AppRoute.Property}/${data.id as 'string'}`}> */}
        {/* <Link to={`property/${data.id as string}`}> */}
        <Link to={`${AppRoute.Property}${data.id }`}>
          <img
            className="place-card__image"
            src={data.imageURL}
            width="260"
            height="200"
            alt={data.name}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: data.ratingStarsWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{data.name}</a>
        </h2>
        <p className="place-card__type">{data.roomType}</p>
      </div>
    </article>
  );
}

export default Card;
