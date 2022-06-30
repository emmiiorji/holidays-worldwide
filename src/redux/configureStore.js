import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countries, { loadCountries } from './Holidays';
import continents, { loadContinents } from './Continents';

const rootReducer = combineReducers({
  countries,
  continents,
});

const store = configureStore({ reducer: rootReducer });

store.dispatch(loadCountries());
store.dispatch(loadContinents());

export default store;
