import axios from 'axios';
import { continentsURL } from '../../services/APIs';

// Actions
const Actions = {
  LOAD: 'worldwide-holidays-app/continents/LOAD',
};

// Reducer
const stateInit = {};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case Actions.LOAD:
      return { ...action.payLoad };
    default:
      return state;
  }
};

// Action creators
export const loadContinents = () => async (dispatch) => {
  const response = await axios.get(continentsURL());
  const continentsCountries = {};
  response.data.forEach((continent) => {
    continentsCountries[continent.continent] = continent.countries;
  });

  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: continentsCountries,
    });
  }
};

export default reducer;
