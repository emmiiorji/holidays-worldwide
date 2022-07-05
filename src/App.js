import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HolidaysDetails from './components/pages/HolidaysDetails';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/holidays/:country" element={<HolidaysDetails />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
