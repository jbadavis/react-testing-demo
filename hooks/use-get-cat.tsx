import {useEffect, useState} from 'react';
import sleep from 'sleep-promise';

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const catUrl = 'https://api.thecatapi.com/v1/images/search';

function useGetCat() {
  const [cat, setCat] = useState<Cat | undefined>();

  useEffect(() => {
    async function getCat() {
      try {
        // The call to global.fetch below is a side effect
        const response = await fetch(catUrl);

        // Sleep is another side effect we need to mock
        await sleep(1000);

        const data = (await response.json()) as Cat[];

        setCat(data[0]);
      } catch (error) {
        console.error("Couldn't get a cat", error);
      }
    }

    getCat();
  }, []);

  return cat;
}

export default useGetCat;
