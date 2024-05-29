import {useEffect, useState} from 'react';
import {Heading, Text, Stack, Image} from '@chakra-ui/react';
import sleep from 'sleep-promise';

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const catUrl = 'https://api.thecatapi.com/v1/images/search';

function SideEffects() {
  const [cat, setCat] = useState<Cat | undefined>();

  useEffect(() => {
    async function getCat() {
      try {
        // The call to global.fetch below is a side effect
        const response = await fetch(catUrl, {
          headers: {
            'x-api-key':
              'live_dUAPokq8pMyv7jgTZYmamjYKwuILfvQ2hIZ0kAj9W9pXzHdMdbLmxMhQpTcEJzid',
          },
        });

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

  return (
    <>
      <Heading as="h2" size="lg" mb={6}>
        Side Effects
      </Heading>
      <Stack spacing={6} mb={6}>
        <Text>
          The component rendering this copy has a side effect. It fetches a cat
          from the deepest reaches of the internet.
        </Text>
        {cat ? (
          <Image src={cat.url} alt="A cat" width={400} />
        ) : (
          <Text>Loading a cat...</Text>
        )}
      </Stack>
    </>
  );
}

export default SideEffects;
