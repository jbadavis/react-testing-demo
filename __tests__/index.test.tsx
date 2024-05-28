import {render, screen} from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  test('render', () => {
    const {container} = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
