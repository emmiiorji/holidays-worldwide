import { useSelector } from 'react-redux/es/exports';
import Header from '../Header';

const Home = () => {
  const state = useSelector((state) => state);
  const { countries, continents } = state;

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
