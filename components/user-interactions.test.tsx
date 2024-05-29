import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import UserInteractions from './user-interactions';

describe('UserInteractions', () => {
  describe('when button is not clicked', () => {
    beforeEach(async () => {
      render(<UserInteractions />);
    });

    test('render the correct button copy', () => {
      expect(screen.getByRole('button').innerHTML).toBe('Show');
    });

    test('not render the scary element', () => {
      expect(screen.queryByText('👻 BOO! 👻')).toBeNull();
    });
  });

  describe('when button is clicked', () => {
    beforeEach(async () => {
      const user = userEvent.setup();

      render(<UserInteractions />);

      // Add name to the button
      await user.click(screen.getByRole('button'));
    });

    test('render the correct button copy', () => {
      expect(screen.getByRole('button').innerHTML).toBe('Hide');
    });

    test('render the scary element', () => {
      expect(screen.queryByText('👻 BOO! 👻')).toBeInTheDocument();
    });
  });
});
