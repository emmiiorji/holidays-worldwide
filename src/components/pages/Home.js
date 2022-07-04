import { useSelector } from 'react-redux/es/exports';
import Header from '../Header';

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
    <>
      <Header />
      <section>
        <h1>Welcome</h1>
      </section>
    </>

  );
};

export default Home;
