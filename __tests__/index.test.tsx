import {render} from '@testing-library/react';
import App from '@/pages/index';

describe('App', () => {
  test('render correctly', () => {
    const {container} = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
