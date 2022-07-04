import { useSelector } from 'react-redux/es/exports';
import Header from '../Header';

const Home = () => {
  const state = useSelector((state) => state);
  const { countries, continents } = state;

  const getTotalHolidays = (countries) => Object.values(countries).reduce((acc, country) => (
    { total: acc.total + country.total_holidays }
  ), { total: 0 }).total.toLocaleString();

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
