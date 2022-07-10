import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Holiday, { holidayProp } from './Holiday';

const Holidays = ({ holidays }) => (
  <table className="holidaysTable">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {holidays.map((holiday) => <Holiday key={uuidv4()} holiday={holiday} />)}
    </tbody>
  </table>
);

Holidays.propTypes = {
  holidays: PropTypes.arrayOf(PropTypes.shape(holidayProp)).isRequired,
};

export default Holidays;
