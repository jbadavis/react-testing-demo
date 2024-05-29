import {useState} from 'react';
import {Heading, Text, Stack, Button} from '@chakra-ui/react';

function UserInteractions() {
  const [showGhost, setShowGhost] = useState(false);

  return (
    <>
      <Heading as="h2" size="lg" mb={6}>
        User Interactions
      </Heading>
      <Stack spacing={6} mb={6}>
        <Text>
          User interactions are often park of the public interface of a
          component. In order to test them we need to simulate user
          interactions, such a clicking a button or typing into an input field.
        </Text>
        <Button
          bg="gray.400"
          onClick={() => {
            setShowGhost(!showGhost);
          }}
        >
          {showGhost ? 'Hide' : 'Show'}
        </Button>
        {showGhost ? (
          <Heading as="h3" size="lg">
            👻 BOO! 👻
          </Heading>
        ) : null}
      </Stack>
    </>
  );
}

export default UserInteractions;
