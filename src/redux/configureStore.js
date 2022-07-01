import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countries, { loadCountries, addCountryFlag } from './Holidays';
import continents, { loadContinents } from './Continents';

const rootReducer = combineReducers({
  countries,
  continents,
});

const store = configureStore({ reducer: rootReducer });

const storeInit = async () => {
  store.dispatch(loadContinents());
  await store.dispatch(loadCountries());
  store.dispatch(addCountryFlag()); // Depends on loadCountries action creator
};
storeInit();

export default store;
