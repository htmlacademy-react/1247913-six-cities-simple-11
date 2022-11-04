import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import Page404 from '../page404/page404';
import { hotelsType, reviewType } from '../../types';

type propertyProps = {
  data: hotelsType[];
  reviews: reviewType[];
}

function Property({ data, reviews }: propertyProps): JSX.Element {
  const params = useParams();
  const idFromParams = Number(params.id);
  const bottomCards = [1, 2, 3];
  const foundedApartment = data.find((apartment) => apartment.id === idFromParams);
  const roomFromProps = foundedApartment ? foundedApartment : data[0];
  const reviewsAmount = reviews.length;
  function getDate(str: string) {

    const date = new Date(str);
    const result = date.toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return result;
  }
  return foundedApartment ? (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {roomFromProps.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {roomFromProps.title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${roomFromProps.rating / 5 * 100}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{roomFromProps.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {roomFromProps.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {roomFromProps.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {roomFromProps.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{roomFromProps.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {roomFromProps.goods.map((good) => <li className="property__inside-item" key={good}> {good} </li>)}

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={roomFromProps.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {roomFromProps.host.name}
                </span>
                {roomFromProps.host.isPro && <span className="property__user-status"> Pro </span>}
              </div>
              <div className="property__description">
                {roomFromProps.description.map((descr) => <p className="property__text" key={descr}>{descr} </p>)}
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
              <ul className="reviews__list">
                {reviews.map((review) => (
                  <li className="reviews__item" key={review.id}>
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">
                        {review.user.name}
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: `${review.rating / 5 * 100}%` }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      {review.comment.map((line) => <p className="reviews__text" key={line}>{line}</p>)}

                      <time className="reviews__time" dateTime={review.date}>{getDate(review.date)}</time>
                    </div>
                  </li>))}

              </ul>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {bottomCards.map((city) => (
              <Card
                key={data[city].id}
                data={data[city]}
                location='near-places'
                onCardhover={()=>0}
              />
            ))}

          </div>
        </section>
      </div>
    </main>
  ) : (
    <Page404 />
  );

}

export default Property;
