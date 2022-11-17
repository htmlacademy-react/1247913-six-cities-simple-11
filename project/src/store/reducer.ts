import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeActiveCity } from './action';
import { offers } from '../mocks/offers';


const initialState = {
  offers,
  activeCity: 'Paris',
  activeCitiOffers: offers.filter((offer) => offer.city.name === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload.activeCity;
      state.activeCitiOffers = state.offers.filter((offer) => offer.city.name === state.activeCity);
    })
    .addCase(loadOffers, (state) => state);
});

export { reducer };
