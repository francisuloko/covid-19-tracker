import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen,
} from '@testing-library/react';
import App from '../../App';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';

describe('App integration', () => {
  test('render covid-19 data source', async () => {
    const MockApp = () => (
      <Provider store={store}>
        <App />
      </Provider>
    );
    render(<MockApp />);
    expect(screen.queryByTestId('app')).toBeInTheDocument();
  });
});
