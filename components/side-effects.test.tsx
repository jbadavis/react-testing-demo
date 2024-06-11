import {render, screen} from '@testing-library/react';
import sleep from 'sleep-promise';
import useGetCat, {type Cat} from '../hooks/use-get-cat';
import SideEffects from './side-effects';

jest.mock('sleep-promise');
jest.mock('../hooks/use-get-cat');

const mockSleep = jest.mocked(sleep);
const mockUseGetCat = jest.mocked(useGetCat);

const mockCatResponse: Cat = {
  id: 'an-id',
  url: 'http://foo.bar/mock-cat',
  height: 10,
  width: 20,
};

describe('SideEffects', () => {
  beforeEach(() => {
    mockSleep.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when getCat returns a cat', () => {
    test('render the cat correctly', async () => {
      mockUseGetCat.mockReturnValueOnce(mockCatResponse);

      render(<SideEffects />);

      const image = (await screen.findByAltText(
        'A cat',
      )) as unknown as HTMLImageElement;

      expect(image.src).toContain(mockCatResponse.url);
    });
  });

  describe('when getCat rejects', () => {
    beforeEach(() => {
      mockUseGetCat.mockReturnValueOnce(undefined);

      render(<SideEffects />);
    });

    test('not render the cat', () => {
      expect(screen.queryByAltText('A cat')).toBeNull();
    });

    test('render the loading copy', () => {
      expect(screen.findByText('Loading a cat...')).toBeDefined();
    });
  });
});
