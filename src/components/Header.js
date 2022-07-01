import { FiMenu } from 'react-icons/fi';
import './css/header.css';

const Header = () => (
  <header>
    <div className="hamburger">
      <FiMenu style={{ color: '#fff', width: '30px', height: '30px' }} />
    </div>
    <div className="headerMain">
      <h1 className="heading">Worldwide Holidays</h1>
    </div>
  </header>
);

export default Header;
