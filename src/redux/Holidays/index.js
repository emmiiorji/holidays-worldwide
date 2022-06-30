import axios from 'axios';
import { countriesURL } from '../../services/APIs';

// Actions
const Actions = {
  LOAD_BY_COUNTRIES: 'worldwide-holidays-app/holidays/LOAD_BY_COUNTRIES',
};

const stateInit = {};

// Reducer
const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case Actions.LOAD_BY_COUNTRIES:
      return { ...action.payLoad };
    default:
      return state;
  }
};

// Action Creators
export const loadCountries = () => async (dispatch) => {
  const response = await axios.get(countriesURL());
  if (response.status === 200) {
    const allCountries = {};
    response.data.response.countries.forEach((country) => {
      allCountries[country['iso-3166']] = country;
    });
    dispatch({
      type: Actions.LOAD_BY_COUNTRIES,
      payLoad: allCountries,
    });
  }
};

export default reducer;
