import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const FilterBar = ({ continentNames }) => (
  <div className="filterBar">
    <input type="text" className="searchBox" placeholder="Search Country" />
    <Dropdown options={['All', ...continentNames]} />
  </div>
);

FilterBar.propTypes = {
  continentNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterBar;
