import {render, waitFor, screen} from '@testing-library/react';
import sleep from 'sleep-promise';
import SideEffects from './side-effects';

jest.mock('sleep-promise');

const mockSleep = jest.mocked(sleep);

const mockCatResponse = [
  {
    url: 'http://foo.bar/mock-cat',
  },
];

describe('SideEffects', () => {
  beforeEach(() => {
    mockSleep.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when getCat resolves', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(async () => ({
        json: async () => mockCatResponse,
      }));
    });

    test('call fetch correctly', async () => {
      render(<SideEffects />);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          'https://api.thecatapi.com/v1/images/search',
        );
      });
    });

    test('call sleep correctly', async () => {
      render(<SideEffects />);

      await waitFor(() => {
        expect(mockSleep).toHaveBeenCalledWith(1000);
      });
    });

    test('render the cat correctly', async () => {
      render(<SideEffects />);

      const image = (await screen.findByAltText(
        'A cat',
      )) as unknown as HTMLImageElement;

      expect(image.src).toContain(mockCatResponse[0].url);
    });
  });

  describe('when getCat rejects', () => {
    const mockError = new Error('mock error');

    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation();

      global.fetch = jest.fn(async () => {
        throw mockError;
      }) as jest.Mock;

      render(<SideEffects />);
    });

    test('call console.error', async () => {
      await waitFor(() => {
        expect(console.error).toHaveBeenCalledWith(
          "Couldn't get a cat",
          mockError,
        );
      });
    });

    test('not render the cat', () => {
      expect(screen.queryByAltText('A cat')).toBeNull();
    });

    test('render the loading copy', () => {
      expect(screen.findByText('Loading a cat...')).toBeDefined();
    });
  });
});
