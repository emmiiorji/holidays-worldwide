import { useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import Stat from '../Stat';
import '../css/home.css';

const Home = () => {
  const state = useSelector((state) => state);
  const { countries, continents } = state;

  const getTotalHolidays = (countries) => Object.values(countries).reduce((acc, country) => (
    { total: acc.total + country.total_holidays }
  ), { total: 0 }).total.toLocaleString();

  const getObjectLength = (object) => Object.keys(object).length;

  const statsToShow = [
    { name: 'Total Recorded', value: getTotalHolidays(countries) },
    { name: 'Countries', value: getObjectLength(countries) },
    { name: 'Continents', value: getObjectLength(continents) },
  ];

  return (
    <div className="wrapper">
      <div className="overlay">
        <Header />
        <main>
          <h2>Coverage Stats</h2>
          <section className="showStats">
            {statsToShow.map((statToShow) => {
              const { name, value } = statToShow;
              return <Stat key={uuidv4()} name={name} value={value} />;
            })}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
