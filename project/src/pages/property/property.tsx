import { useParams } from 'react-router-dom';
import Card from '../../components/card/card';
import ReviewForm from '../../components/review-form/review-form';
import Page404 from '../page404/page404';
import { hotelsType, reviewType } from '../../types';
import { useState } from 'react';

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

  const [fullReviewsData, setFullReviewsData] = useState(reviews);
  const reviewsAmount = fullReviewsData.length;
  const addNewReview = ({ rating , comment }: {rating: string; comment: string}) => {
    const todayData = new Date().toJSON();
    setFullReviewsData([
      ...fullReviewsData,
      {
        id: reviewsAmount,
        user: {
          id: 4,
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
        },
        rating: +rating,
        comment: [comment],
        date: todayData,
      }

    ]
    );
  };

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
                {fullReviewsData.map((review) => (
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
              <ReviewForm onAddNewReview={addNewReview}/>
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
                onCardhover={() => 0}
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
