import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import UserInteractions from './user-interactions';

describe('UserInteractions', () => {
  let container: HTMLElement;

  describe('when button is not clicked', () => {
    beforeEach(() => {
      container = render(<UserInteractions />).container;
    });

    test('render the correct button copy', () => {
      expect(screen.getByRole('button').innerHTML).toBe('Show');
    });

    test('not render the scary element', () => {
      expect(screen.queryByText('👻 BOO! 👻')).toBeNull();
    });

    test('render correctly', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('when text is inputted', () => {
    beforeEach(async () => {
      const user = userEvent.setup();

      container = render(<UserInteractions />).container;

      await user.type(screen.getByTestId('an-input'), 'foo bar baz');
    });

    test('render the correct copy', () => {
      expect(screen.getByTestId('user-output').innerHTML).toContain(
        'foo bar baz',
      );
    });

    test('render correctly', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('when the button is clicked', () => {
    beforeEach(async () => {
      const user = userEvent.setup();

      container = render(<UserInteractions />).container;

      await user.click(screen.getByRole('button'));
    });

    test('render the correct button copy', () => {
      expect(screen.getByRole('button').innerHTML).toBe('Hide');
    });

    test('render the scary element', () => {
      expect(screen.queryByText('👻 BOO! 👻')).toBeInTheDocument();
    });

    test('render correctly', () => {
      expect(container).toMatchSnapshot();
    });
  });
});
