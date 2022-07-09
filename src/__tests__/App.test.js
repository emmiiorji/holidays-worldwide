import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

test('Header renders with Worldwide Holidays in document', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
