import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Holiday = ({ holiday }) => {
  const {
    date, description, name, type,
  } = holiday;
  return (
    <tr key={uuidv4()}>
      <td>
        {date.iso.replace('T', ' ')}
      </td>
      <td>
        {description}
      </td>
      <td>
        {name}
      </td>
      <td>
        {type.map((type) => (
          <p key={uuidv4()}>
            {type}
            <br />
          </p>
        ))}
      </td>
    </tr>
  );
};

export const holidayProp = {
  date: PropTypes.object,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.string),
};

Holiday.propTypes = {
  holiday: PropTypes.shape(holidayProp).isRequired,
};

export default Holiday;
