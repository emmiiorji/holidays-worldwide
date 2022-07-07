import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const FilterBar = ({ continentNames, handleChange, selectedContinent }) => (
  <div className="filterBar">
    <input
      type="text"
      className="searchBox"
      onChange={(e) => handleChange(e, 'SearchBox')}
      placeholder="Search Country"
    />
    <Dropdown
      options={['All', ...continentNames]}
      selected={selectedContinent}
      handleChange={(e) => handleChange(e, 'SelectContinent')}
    />
  </div>
);

FilterBar.propTypes = {
  continentNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedContinent: PropTypes.string.isRequired,
};

export default FilterBar;
