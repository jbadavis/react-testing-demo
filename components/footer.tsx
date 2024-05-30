import {Box, Heading, Button} from '@chakra-ui/react';

const repoUrl = 'https://github.com/jbadavis/react-testing-demo';

function Footer() {
  return (
    <Box borderTop="1px" py={8} borderColor="gray.400">
      <Button
        as="a"
        borderColor="gray.400"
        href={repoUrl}
        mb={4}
        size="sm"
        target="_blank"
        variant="outline"
      >
        View on GitHub
      </Button>
      <Heading as="h4" size="lg">
        👻
      </Heading>
    </Box>
  );
}

export default Footer;
