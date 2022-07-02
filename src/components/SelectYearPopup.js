import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const SelectYearPopup = ({ display, hidePopup, countrySelected }) => {
  (
    <div className="popupOverlay" style={{ display }}>
      <div className="popupContainer">
        <FaTimes onClick={() => hidePopup()} className="closeBu" />
        {/* <div className="selectYearPopup"> */}
        <form className="selectYearPopup">
          <p>Select Year</p>
          <Datetime dateFormat="YYYY" timeFormat={false} closeOnSelect />
          {/* <input type="date" id="year" onChange={handleChange} /> */}
          <input type="submit" value="See Holidays" />
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

SelectYearPopup.propTypes = {
  display: PropTypes.string.isRequired,
  hidePopup: PropTypes.func.isRequired,
  countrySelected: PropTypes.string.isRequired,
};

export default SelectYearPopup;
