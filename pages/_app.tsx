import '@fontsource/fira-mono';
import type {AppProps} from 'next/app';
import NextLink from 'next/link';
import {ChakraProvider, Heading, Box} from '@chakra-ui/react';
import theme from '../theme';
import Footer from '@/components/footer';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={600} m="0 auto 44px" px={8} minH="80vh">
        <NextLink href="/">
          <Heading as="h1" mt={20} mb={6}>
            Internal Testing Demonstration
          </Heading>
        </NextLink>
        <Component {...pageProps} />
      </Box>
      <Box maxW={600} m="0 auto" px={8} h="120px">
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
