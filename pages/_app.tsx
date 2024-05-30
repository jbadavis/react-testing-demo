import '@fontsource/fira-mono';
import type {AppProps} from 'next/app';
import NextLink from 'next/link';
import {ChakraProvider, Heading, Box} from '@chakra-ui/react';
import theme from '../theme';
import Footer from '@/components/footer';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={600} m="0 auto" px={8} minH="100vh">
        <NextLink href="/">
          <Heading as="h1" mt={20} mb={6}>
            Internal Testing Demonstration
          </Heading>
        </NextLink>
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
