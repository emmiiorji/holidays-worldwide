import { VscChevronLeft } from 'react-icons/vsc';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getObjectLength } from './Home';
import SelectYearPopup from '../SelectYearPopup';

const HolidaysDetails = () => {
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  const { countryName } = useParams();
  let countryCode = '';
  const [country, ...rest] = Object.values(countries).filter((selectedCountry) => {
    if (selectedCountry.country_name === countryName) {
      countryCode = selectedCountry['iso-3166'];
      return true;
    }
    return false;
  });
  rest.length = 0;

  useEffect(() => {
    if (getObjectLength(countries)) {
      if (!country) {
        navigate('/404');
      }
    }
  });

  return (
    <section>
      <button type="button" onClick={() => navigate(-1)}>
        <VscChevronLeft style={{ fontSize: '30px' }} />
      </button>
    </section>
  );
};

export default HolidaysDetails;
