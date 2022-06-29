import axios from 'axios';
import { countries } from '../../services/APIs';

// Actions
const Actions = {
  LOAD: 'worldwide-holidays-app/holidays/LOAD',
};

const stateInit = [];

// Action Creators
export const loadCountries = () => async (dispatch) => {
  const response = await axios.get(countries());
  if (response.status === 200) {
    const payLoad = response.data.response.countries;
    dispatch({
      type: Actions.LOAD,
      payLoad,
    });
  }
};

export default reducer;
