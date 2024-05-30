import useGetCat from './use-get-cat';

describe('useGetCat', () => {
  test('should return a cat', () => {
    const cat = useGetCat();

    expect(cat).toEqual(
      'https://cdn2.thecatapi.com/images/MTY5NjAwOQ.jpg?size=small',
    );
  });
});
