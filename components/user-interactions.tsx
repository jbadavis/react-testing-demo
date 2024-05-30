import {useState} from 'react';
import {Heading, Text, Stack, Button, Input} from '@chakra-ui/react';

function UserInteractions() {
  const [textInput, setTextInput] = useState('');
  const [showGhost, setShowGhost] = useState(false);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTextInput(event.target.value);
  }

  return (
    <>
      <Heading as="h2" size="lg" mb={6}>
        User Interactions
      </Heading>
      <Stack spacing={6} mb={6}>
        <Text>
          User interactions are often part of the public interface of our UI our
          component. In order to test them we need to simulate user
          interactions, such a clicking a button or typing into an input field.
        </Text>
        <Heading as="h3" size="md">
          Some Typing
        </Heading>
        <Input
          data-testid="an-input"
          onChange={handleOnChange}
          placeholder="Type something or else"
          borderColor="gray.400"
        />
        <Text
          p={4}
          data-testid="user-output"
          background="gray.100"
          borderRadius={10}
        >
          <strong>You are typing:</strong> {textInput}
        </Text>
        <Heading as="h3" size="md">
          A Click
        </Heading>
        <Button
          bg="gray.400"
          onClick={() => {
            setShowGhost(!showGhost);
          }}
        >
          {showGhost ? 'Hide' : 'Show'}
        </Button>
        {showGhost ? (
          <Heading as="h3" size="md">
            👻 BOO! 👻
          </Heading>
        ) : null}
      </Stack>
    </>
  );
}

export default UserInteractions;
