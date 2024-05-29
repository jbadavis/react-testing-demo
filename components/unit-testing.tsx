import {
  Heading,
  Text,
  Stack,
  Code,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

function UnitTesting() {
  return (
    <>
      <Heading as="h2" size="lg" mb={6}>
        Unit Testing
      </Heading>
      <Stack spacing={6} mb={6}>
        <Text>
          Unit testing is a process where the smallest functional units of code
          are tested. These units are usually functions or methods. The goal of
          unit testing is to validate that each unit of the software performs as
          intended.
        </Text>
        <Text>
          If there are input, output or logic-based errors in the code unit
          tests should help catch them before they reach production. When code
          is changed or refactored, unit tests can help ensure that the changes
          don't break the existing code.
        </Text>
        <Text>
          Unit tests are, in addition, an important way of documenting code.
          Developers can read the tests and understand what behavior is
          expected.
        </Text>
      </Stack>
      <Heading as="h2" size="lg" mb={6}>
        Functional Programming
      </Heading>
      <Stack spacing={6}>
        <Text>
          Functional programming helps us understand why some code is easier to
          test through concepts such as pure functions and side-effects.
        </Text>
        <Heading as="h3" size="md">
          Pure Functions
        </Heading>
        <Stack spacing={6}>
          <Text>
            Functions that only produce output based on their input, such as the
            below:
            <Code
              my={4}
              display="block"
              children="const AddUp = (a: number, b: number) => a + b;"
            />
            are extremely straightforward to test. This is because there are no
            implicit imputs, like the browser window or system clock. Functional
            programmers call this a <strong>pure function</strong>.
          </Text>
          <Text>
            Pure function are in addition deterministic. This means that given
            an input they will always return the same output. This produces unit
            tests that are consistent, giving additional confidence in the test
            suites.
          </Text>
        </Stack>
        <Heading as="h3" size="md">
          Side Effects
        </Heading>
        <Stack spacing={6}>
          <Text>
            A function is said to have a side-effect if it uses or modifies
            state outside its scope. This could be:
          </Text>
          <UnorderedList>
            <ListItem>Reading or writing to a file.</ListItem>
            <ListItem>Network requests</ListItem>
            <ListItem>Using the system clock</ListItem>
          </UnorderedList>
          <Text>
            Any tests written for functions with side-effects are
            non-deterministic, meaning that results depend on the time of day or
            the state of a network. Non-determinism in a test suite leads to
            intermittent failures and a loss of confidence.
          </Text>
        </Stack>
      </Stack>
    </>
  );
}

export default UnitTesting;
