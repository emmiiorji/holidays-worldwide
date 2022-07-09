import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/pages/Home';
import store from '../redux/configureStore';

it('component renders properly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
