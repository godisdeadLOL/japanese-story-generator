import { Button, Divider, Text, VStack } from "@chakra-ui/react";

const StoryResult = ({ loading = true, story = '', onReturn }) => {
  return (
    <VStack spacing={8} alignItems="center">

      <Text align="justify" fontSize="2xl" whiteSpace='pre-line'>
        {story}
      </Text>

      {loading && <Text>Generating story...</Text>}

      <Divider />

      <Button isLoading={loading} onClick={onReturn} variant="outline">Return</Button>
    </VStack>
  );
};

export default StoryResult;
