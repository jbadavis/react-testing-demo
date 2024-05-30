import {Box, Flex, Heading} from '@chakra-ui/react';

function Footer() {
  return (
    <Box w="100%" h="120px">
      <Flex align="center" h="100%">
        <Heading as="h4" size="sm" bg="gray.200">
          Testing Demonstration 👻
        </Heading>
      </Flex>
    </Box>
  );
}

export default Footer;
