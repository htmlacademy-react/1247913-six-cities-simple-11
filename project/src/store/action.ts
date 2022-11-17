import {createAction} from '@reduxjs/toolkit';

export const loadOffers = createAction('offers/loadOffers');
export const changeActiveCity = createAction<{activeCity: string}>('menu/ActiveCity');
