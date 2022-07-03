import { VscChevronLeft } from 'react-icons/vsc';
import { useSelector } from 'react-redux/es/exports';

const Details = () => {
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  return (
    <section>
      <button type="button">
        <VscChevronLeft style={{ fontSize: '30px' }} />
      </button>
    </section>
  );
};

export default Details;
