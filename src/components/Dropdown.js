import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({ options }) => (
  <select className="continentsDropdown">
    {options.map((option) => <option value={option} key={uuidv4()}>{option}</option>)}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
