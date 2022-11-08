import { useState } from 'react';

type ReviewFormPropsType = {
  onAddNewReview: ({ rating, comment }: {
    rating: string;
    comment: string;
}) => void;
}

function ReviewForm({onAddNewReview}: ReviewFormPropsType ): JSX.Element {
  const [formData, setFormData] = useState(
    {
      rating: '0',
      comment: ''
    }
  );
  const handleInputStar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: e.target.value
    });
    {/* eslint-disable-next-line no-console*/ }
    console.log('e.target.value: ', e.target);

  };
  const handleInputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    {/* eslint-disable-next-line no-console*/ }
    console.dir('e.target.value: ', e.target.value);


    setFormData({
      ...formData,
      comment: e.target.value
    });
    {/* eslint-disable-next-line no-console*/ }
    console.dir('e.target.value: ', e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddNewReview(formData);
    setFormData({
      rating: '0',
      comment: ''
    });
  };

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" onChange={handleInputStar} value="5" checked={formData.rating === '5'} name="rating" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={handleInputStar} name="rating" value="4" checked={formData.rating === '4'} id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={handleInputStar} name="rating" value="3" checked={formData.rating === '3'} id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={handleInputStar} name="rating" value="2" checked={formData.rating === '2'} id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={handleInputStar} name="rating" value="1" checked={formData.rating === '1'} id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={handleInputTextArea} value={formData.comment} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
