import type {AppProps} from 'next/app';
import {ChakraProvider, Heading, Box} from '@chakra-ui/react';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Box maxW={600} m="0 auto">
        <Heading mt={20} mb={4}>
          Planes Internal Testing Demonstration
        </Heading>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
