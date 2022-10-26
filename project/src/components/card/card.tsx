import { cityType } from '../../types';

type cardProps = {
  data: cityType;
  classes: string;
}

function Card({ data, classes }: cardProps): JSX.Element {
  return (
    <article className={`${classes}__card place-card`}>
      {data.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${classes}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={data.imageURL}
            width="260"
            height="200"
            alt={data.name}
          />
        </a>
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
