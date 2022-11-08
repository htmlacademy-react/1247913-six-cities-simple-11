import { Link } from 'react-router-dom';
import { hotelsType } from '../../types';
import { AppRoute } from '../../const';


type cardProps = {
  data: hotelsType;
  location: string;
  onCardhover: (id: number) => void;
}

function Card({ data, location, onCardhover }: cardProps): JSX.Element {

  const handleCardHover = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {

    if (onCardhover) {
      onCardhover(data.id);
    }
  };
  return (
    <article className={`${location}__card place-card`} onMouseOver={handleCardHover}>
      {data.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${location}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}${data.id}`}>
          <img
            className="place-card__image"
            src={data.images[0]}
            width="260"
            height="200"
            alt={data.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${data.rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}${data.id}`}>
            {data.title}
          </Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}

export default Card;
