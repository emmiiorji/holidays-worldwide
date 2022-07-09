import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import HolidaysDetails from '../components/pages/HolidaysDetails';

it('render matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <HolidaysDetails />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
