import {useEffect, useState} from 'react';
import {Heading, Text, Stack, Image} from '@chakra-ui/react';
import sleep from 'sleep-promise';
import useGetCat from '@/hooks/use-get-cat';

function SideEffects() {
  const cat = useGetCat();

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
          <Image src={`${cat.url}?size=small`} alt="A cat" width={400} />
        ) : (
          <Text>Loading a cat...</Text>
        )}
      </Stack>
    </>
  );
}

export default SideEffects;
