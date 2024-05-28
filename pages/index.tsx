import NextLink from 'next/link';
import {
  Link,
  Heading,
  Text,
  Stack,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';

function Home() {
  return (
    <>
      <Stack spacing={6} mb={6}>
        <Text>Welcome to the Planes Internal Testing Demonstration.</Text>
        <Text>
          This is a core module and <strong>must</strong> be passed before your
          yearly appraisal.
        </Text>
      </Stack>
      <OrderedList stylePosition="inside">
        <ListItem>
          <NextLink href="/introduction">
            <Link bg="gray.200">Introduction</Link>.
          </NextLink>
        </ListItem>
      </OrderedList>
    </>
  );
}

export default Home;
