import {render} from '@testing-library/react';
import UnitTesting from './unit-testing';

describe('UnitTesting', () => {
  test('renders correctly', () => {
    const {container} = render(<UnitTesting />);

    expect(container).toMatchSnapshot();
  });
});
