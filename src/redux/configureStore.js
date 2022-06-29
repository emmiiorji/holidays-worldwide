import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countries from './Holidays';
import continents from './Continents';

const rootReducer = combineReducers({
  countries,
  continents,
});

const store = configureStore({ reducer: rootReducer });

export default store;
