import {render} from '@testing-library/react';
import Snapshots from './snapshots';

describe('Snapshots', () => {
  test('renders correctly', () => {
    const {container} = render(<Snapshots />);

    expect(container).toMatchSnapshot();
  });
});
