import useGetCat from './use-get-cat';

describe('useGetCat', () => {
  test('should return a cat', async () => {
    const cat = await useGetCat();

    expect(cat).toEqual(
      'https://cdn2.thecatapi.com/images/MTY5NjAwOQ.jpg?size=small',
    );
  });
});
