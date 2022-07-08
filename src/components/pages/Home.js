import { shallowEqual, useSelector } from 'react-redux/es/exports';
// import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import Stat from '../Stat';
import '../css/home.css';
import SelectYearPopup from '../SelectYearPopup';
import FilterBar from '../FilterBar';

export const getObjectLength = (object) => Object.keys(object).length;

const Home = () => {
  const state = useSelector((state) => state, shallowEqual);

  const [displayPopup, setDisplayPopup] = useState('none');
  const [countrySelected, setCountrySelected] = useState('');
  const [choiceCountries, setChoiceCountries] = useState({});
  const [searchText, setSearchText] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const { countries, continents } = state;
  const { allCountries, countriesISO2Map } = countries;
  const continentNames = Object.keys(continents);

  const allCountriesNames = Object.values(countriesISO2Map);

  const getTotalHolidays = (countries) => Object.values(countries).reduce((acc, country) => (
    { total: acc.total + country.total_holidays }
  ), { total: 0 }).total.toLocaleString();

  const statsToShow = [
    { name: 'Total Recorded', value: getTotalHolidays(allCountries) },
    { name: 'Countries', value: getObjectLength(allCountries) },
    { name: 'Continents', value: getObjectLength(continents) },
  ];

  return (
    <div className="wrapper">
      <div className="overlay">
        <Header />
        <main className="homeMain">
          <h2>Coverage Stats</h2>
          <section className="showStats">
            {statsToShow.map((statToShow) => {
              const { name, value } = statToShow;
              return <Stat key={uuidv4()} name={name} value={value} />;
            })}
          </section>
          <section className="showCountries">
            <FilterBar
              handleChange={handleFilterChange}
              continentNames={continentNames}
              selectedContinent={selectedContinent}
            />
            <div className="countriesContainer">
              {Object.values(choiceCountries).map((country) => {
                const altFlagImage = 'https://res.cloudinary.com/emmii/image/upload/v1656765109/general/inserted-red-color-sticker-label-with-word-unavailable1_vavx1n.jpg';
                return (
                  <button
                    className="showCountry"
                    type="button"
                    key={uuidv4()}
                    onClick={() => { setDisplayPopup('flex'); setCountrySelected(country['iso-3166']); }}
                  >
                    <div>
                      <img className="countryFlag" src={`${country.flag || altFlagImage}`} alt={`${country.country_name}'s flag`} />
                      <p>
                        {country.country_name}
                        :&nbsp;
                        <span style={{ color: 'yellow' }}>{country.total_holidays}</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </main>
        <SelectYearPopup
          display={displayPopup}
          hidePopup={() => setDisplayPopup('none')}
          countrySelected={countrySelected}
        />
      </div>
    </div>
  );
};

export default Home;
