import {render} from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  test('renders correctly', () => {
    const {container} = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
