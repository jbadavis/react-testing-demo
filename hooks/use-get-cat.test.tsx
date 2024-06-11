import {renderHook, waitFor} from '@testing-library/react';
import sleep from 'sleep-promise';
import useGetCat from './use-get-cat';

jest.mock('sleep-promise');

const mockSleep = jest.mocked(sleep);

const mockCatResponse = [
  {
    url: 'http://foo.bar/mock-cat',
  },
];

describe('useGetCat', () => {
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
      renderHook(() => useGetCat());

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          'https://api.thecatapi.com/v1/images/search',
        );
      });
    });

    test('call sleep correctly', async () => {
      renderHook(() => useGetCat());

      await waitFor(() => {
        expect(mockSleep).toHaveBeenCalledWith(1000);
      });
    });

    test('return the cat', async () => {
      const {result} = renderHook(() => useGetCat());

      await waitFor(() => {
        expect(result.current).toBe(mockCatResponse[0]);
      });
    });
  });

  describe('when getCat rejects', () => {
    const mockError = new Error('mock error');

    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation();

      global.fetch = jest.fn(async () => {
        throw mockError;
      }) as jest.Mock;
    });

    test('call console.error', async () => {
      renderHook(() => useGetCat());

      await waitFor(() => {
        expect(console.error).toHaveBeenCalledWith(
          "Couldn't get a cat",
          mockError,
        );
      });
    });

    test('return undefined', async () => {
      const {result} = renderHook(() => useGetCat());

      await waitFor(() => {
        expect(result.current).toBeUndefined();
      });
    });
  });
});
