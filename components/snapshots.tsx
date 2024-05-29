import {Heading, Text, Stack} from '@chakra-ui/react';

function Snapshots() {
  return (
    <>
      <Heading as="h2" size="lg" mb={6}>
        Snapshot Testing
      </Heading>
      <Stack spacing={6} mb={6}>
        <Text>
          Snapshot tests are a great way of ensuring that any changes don't
          unexpectedly change the output of other components and affect the
          wider UI.
        </Text>
        <Text>
          A typical snapshot tests renders a UI component, takes a snapshot,
          then creates or compares it to a reference snapshot file stored
          alongside the test. A snapshot test will fail if there's a mismatch
          between the new and reference snapshot. Either a change needs to be
          reverted or the snapshot needs to be updated.
        </Text>
      </Stack>
    </>
  );
}

export default Snapshots;
