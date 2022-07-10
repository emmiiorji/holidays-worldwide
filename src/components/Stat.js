import PropTypes from 'prop-types';

const Stat = ({ name, value }) => (
  <div className="statItem">
    <p className="value">
      {value}
    </p>
    <p className="statName">{name}</p>
  </div>
);

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Stat;
