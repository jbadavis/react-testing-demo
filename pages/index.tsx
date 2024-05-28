import NextLink from 'next/link';
import {
  Link,
  Heading,
  Text,
  Stack,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import ModuleList from '@/components/module-list';

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
      <ModuleList
        moduleList={[
          {title: 'Introduction', href: '/introduction'},
          {title: 'Snapshot Testing', href: '/snapshot-testing'},
        ]}
      />
    </>
  );
}

export default Home;
