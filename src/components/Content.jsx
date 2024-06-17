import { Container, Center } from "@chakra-ui/react";

const Content = ({ children }) => {
  return (
    <Center minH="100dvh" pt={16} pb={16}>
      <Container maxW="2xl">{children}</Container>
    </Center>
  );
};

export default Content;
