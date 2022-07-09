import axios from 'axios';
import { countriesURL, countriesInfoURL, holidaysURL } from '../../services/APIs';

// Actions
const Actions = {
  LOAD_BY_COUNTRIES: 'worldwide-holidays-app/holidays/LOAD_BY_COUNTRIES',
  ADD_FLAG: 'worldwide-holidays-app/holidays/ADD_FLAG',
  LOAD_HOLIDAYS: 'worldwide-holidays-app/holidays/LOAD_HOLIDAY',
};

const stateInit = {
  allCountries: {},
  countriesISO2Map: {},
};

// Reducer
const reducer = (state = stateInit, action) => {
  const { payLoad } = action;
  switch (action.type) {
    case Actions.LOAD_BY_COUNTRIES:
      return { ...payLoad };
    case Actions.ADD_FLAG: {
      const allCountries = { ...state.allCountries };
      payLoad.forEach((country) => {
        const { flag, iso2 } = country.countryInfo;
        if (allCountries[iso2]) {
          allCountries[iso2] = { ...allCountries[iso2], flag };
        } else {
          // Do nothing if the country isn't part of the countries that
          // their holiday record is available
        }
      });
      return { ...state, allCountries };
    }
    case Actions.LOAD_HOLIDAYS: {
      const { countryISO2Code, year, countryHolidays } = payLoad;
      const holidays = state.allCountries[countryISO2Code].holidays || {};
      return {
        ...state,
        allCountries: {
          ...state.allCountries,
          [countryISO2Code]: {
            ...state.allCountries[countryISO2Code],
            holidays: { ...holidays, [year]: countryHolidays },
          },
        },
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const loadCountries = () => async (dispatch) => {
  const response = await axios.get(countriesURL());
  if (response.status === 200) {
    const allCountries = {};
    const countriesISO2Map = {};
    response.data.response.countries.forEach((country) => {
      allCountries[country['iso-3166']] = country;
      countriesISO2Map[country['iso-3166']] = country.country_name;
    });
    dispatch({
      type: Actions.LOAD_BY_COUNTRIES,
      payLoad: { allCountries, countriesISO2Map },
    });
  }
};

export const addCountryFlag = () => async (dispatch) => {
  const response = await axios.get(countriesInfoURL());
  if (response.status === 200) {
    dispatch({
      type: Actions.ADD_FLAG,
      payLoad: response.data,
    });
  }
};

export const loadHolidays = ({ country, year }) => async (dispatch) => {
  const response = await axios.get(holidaysURL({ country, year }));
  const { holidays } = response.data.response;
  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD_HOLIDAYS,
      payLoad: {
        countryISO2Code: country,
        countryHolidays: holidays,
        year,
      },
    });
  }
};

export default reducer;
