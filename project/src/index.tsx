import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const cities = [
  {
    isPremium: true,
    imageURL: 'img/apartment-01.jpg',
    name: 'Beautiful luxurious apartment at great location',
    priceValue: '120',
    ratingStarsWidth: '80%',
    roomType: 'Apartment'
  },
  {
    isPremium: false,
    imageURL: 'img/room.jpg',
    name: 'Wood and stone place',
    priceValue: '80',
    ratingStarsWidth: '80%',
    roomType: 'Private room'
  },
  {
    isPremium: false,
    imageURL: 'img/apartment-02.jpg',
    name: 'Canal View Prinsengracht',
    priceValue: '132',
    ratingStarsWidth: '80%',
    roomType: 'Apartment'
  },
  {
    isPremium: true,
    imageURL: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    priceValue: '180',
    ratingStarsWidth: '100%',
    roomType: 'Apartment'
  },
  {
    isPremium: true,
    imageURL: 'img/room.jpg',
    name: 'Wood and stone place',
    priceValue: '80',
    ratingStarsWidth: '80%',
    roomType: 'Private room'
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App data={cities}/>
  </React.StrictMode>,
);
