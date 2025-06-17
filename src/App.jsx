import { Box, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Main from "./components/main";

function App() {
  return (
    <Container bg={"#f8fafd"} maxW="container.xl" minH={"100vh"} py={10}>
      <Flex justify="center">
        <Box w="full">
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;