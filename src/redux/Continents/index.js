import axios from 'axios';
import { continents } from '../../services/APIs';

// Actions
const Actions = {
  LOAD: 'worldwide-holidays-app/continents/LOAD',
};

// Reducer
const stateInit = {};

const reducer = (state = stateInit, action = {}) => {
  // Write reducer
};

// Action creators
export const loadContinents = () => async (dispatch) => {
  const response = await axios.get(continents());
  const continentsContries = {};
  response.data.forEach((continent) => {
    continentsContries[continent.continent] = continent.countries;
  });

  if (response.status === 200) {
    dispatch({
      type: Actions.LOAD,
      payLoad: continentsContries,
    });
  }
};

export default reducer;
