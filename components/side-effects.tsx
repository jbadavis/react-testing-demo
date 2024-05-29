import {useEffect, useState} from 'react';
import {Heading, Text, Stack, Image} from '@chakra-ui/react';
import sleep from 'sleep-promise';

type Cat = {
  _id: string;
  mimetype: string;
  size: number;
  tags: string[];
};

const catUrl = 'https://cataas.com/cat';

function SideEffects() {
  const [cat, setCat] = useState<string | undefined>();

  useEffect(() => {
    async function getCat() {
      try {
        // The call to global.fetch below is a side effect
        const response = await fetch(catUrl, {
          headers: {
            accept: 'application/json',
          },
        });

        // Sleep is another side effect we need to mock
        await sleep(1000);

        const data = (await response.json()) as Cat;

        setCat(data._id);
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
          from the deepest reaches of the internet:
        </Text>
        {cat ? (
          <Image src={`${catUrl}/${cat}?size=small`} alt="A cat" width={400} />
        ) : (
          <Text>Loading a cat...</Text>
        )}
      </Stack>
    </>
  );
}

export default SideEffects;
