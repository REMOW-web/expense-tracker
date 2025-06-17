import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    totalIncome,
  } = useContext(GlobalContext);

  return (
    <Flex direction="column" gap={6}>
      <Flex justify="space-between" align="center">
        <Heading size="lg" color="blue.600">
          Expense Tracker
        </Heading>
        <Button 
          onClick={onOpen} 
          colorScheme="blue" 
          size="md"
          leftIcon={<AddIcon />}
        >
          Add Transaction
        </Button>
      </Flex>

      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Box px="4">
        <ExpenseView />
      </Box>
    </Flex>
  );
}