import { VscChevronLeft } from 'react-icons/vsc';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const HolidaysDetails = () => {
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);
  console.log(countries);
  return (
    <section>
      <button type="button" onClick={() => navigate(-1)}>
        <VscChevronLeft style={{ fontSize: '30px' }} />
      </button>
    </section>
  );
};

export default HolidaysDetails;
