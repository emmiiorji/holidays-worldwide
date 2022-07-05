import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HolidaysDetails from './components/pages/HolidaysDetails';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/holidays/:countryName" element={<HolidaysDetails />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
