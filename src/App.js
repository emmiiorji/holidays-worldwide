import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/holidays/:country" element={<Details />} />
    </Routes>
  );
}

export default App;
