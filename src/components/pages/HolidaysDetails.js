import React, { useEffect } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getObjectLength } from './Home';
import Holidays from '../Holidays';
import SelectYearPopup from '../SelectYearPopup';
import headerStyle from '../css/header.module.css';
import '../css/holidaysDetails.css';

const HolidaysDetails = () => {
  const navigate = useNavigate();
  const { allCountries, countriesISO2Map } = useSelector((state) => state.countries, shallowEqual);
  const { countryName, year } = useParams();
  let countryCode = '';

  Object.entries(countriesISO2Map).every(([iso2, name]) => {
    if (countryName.toLowerCase() === name.toLowerCase()) {
      countryCode = iso2;
      return false;
    }
    return true;
  });

  const country = allCountries[countryCode];

  useEffect(() => {
    if (getObjectLength(allCountries)) {
      if (!country) {
        navigate('/404');
      }
    }
  });

  if (getObjectLength(allCountries)) {
    if (!country.holidays || !country.holidays[year]) {
      // Ask to enter year if a valid country url was visited but didn't come through the home page
      return (
        <SelectYearPopup
          display="flex"
          hidePopup={() => navigate('/')}
          countrySelected={countryCode}
        />
      );
    }
  }

  if (country) {
    const { holidays } = country;
    return (
      <div className="wrapper">
        <div className="overlay">
          <header className={headerStyle.header}>
            <div className="previousPage">
              <VscChevronLeft style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
            </div>
            <div className={headerStyle.headerMain}>
              <h1 className={headerStyle.heading}>{country.country_name}</h1>
            </div>
          </header>
          <main className="mainContainer">
            <div className="contentHeader">
              <h2>
                Holidays breakdown&nbsp; - &nbsp;
                {year}
              </h2>
            </div>
            <div className="holidaysContainer">
              <Holidays holidays={holidays[year]} />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return <></>;
};

export default HolidaysDetails;
