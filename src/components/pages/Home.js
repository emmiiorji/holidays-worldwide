import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import Stat from '../Stat';
import '../css/home.css';
import SelectYearPopup from '../SelectYearPopup';
import FilterBar from '../FilterBar';

export const getObjectLength = (object) => Object.keys(object).length;

const Home = () => {
  const state = useSelector((state) => state);

  const [displayPopup, setDisplayPopup] = useState('none');
  const [countrySelected, setCountrySelected] = useState('');
  const [choiceCountries, setChoiceCountries] = useState({});
  const [searchText, setSearchText] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');

  const { countries, continents } = state;
  const { allCountries, countriesISO2Map } = countries;
  const continentNames = Object.keys(continents);

  const allCountriesNames = Object.values(countriesISO2Map);

  const findSearch = (searchText, selectedContinent) => {
    let continentsCountries = selectedContinent === 'All' ? allCountriesNames : continents[selectedContinent];
    continentsCountries = continentsCountries.join('^&*/!').toLowerCase().split('^&*/!');

    const choiceCountries = {};
    Object.entries(countries.allCountries).forEach(([iso2, country]) => {
      if (continentsCountries.includes(country.country_name.toLowerCase())
        && country.country_name.toLowerCase().includes(searchText.toLowerCase())) {
        choiceCountries[iso2] = countries.allCountries[iso2];
      }
    });
    return choiceCountries;
  };

  const handleFilterChange = (e, filterElement) => {
    const { value } = e.target;
    if (filterElement === 'SearchBox') {
      setSearchText(value.trim());
      e.target.value = value.trim();
    } else {
      setSelectedContinent(value);
    }
  };

  useEffect(() => {
    setChoiceCountries({ ...findSearch(searchText, selectedContinent) });
  }, [searchText, selectedContinent, state.countries.allCountries]);

  const getTotalHolidays = (countries) => Object.values(countries).reduce((acc, country) => (
    { total: acc.total + country.total_holidays }
  ), { total: 0 }).total.toLocaleString();

  const statsToShow = [
    { name: 'Total Recorded', value: getTotalHolidays(allCountries) },
    { name: 'Countries', value: getObjectLength(allCountries) },
    { name: 'Continents', value: getObjectLength(continents) },
  ];

  return (
    <div data-testid="home" className="wrapper">
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
                const altFlagImage = 'https://res.cloudinary.com/emmii/image/upload/v1657434212/general/inserted-red-color-sticker-label-with-word-unavailable2_brckxe.jpg';
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
