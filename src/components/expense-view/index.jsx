import { Box, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";

export default function ExpenseView() {
  const { allTransactions, deleteTransaction } = useContext(GlobalContext);

  const expenseTransactions = allTransactions.filter(
    (item) => item.type === "expense"
  );
  const incomeTransactions = allTransactions.filter(
    (item) => item.type === "income"
  );

  const TransactionList = ({ items, title, colorScheme }) => (
    <Box
      flex="1"
      p="6"
      bg="white"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="8"
    >
      <Heading size="md" mb="6" color={`${colorScheme}.600`}>
        {title}
      </Heading>
      <Flex flexDirection="column" gap={4}>
        {items && items.length > 0 ? (
          items.map((item) => (
            <Flex
              key={item.id}
              bg={`${colorScheme}.50`}
              p="4"
              borderRadius="8"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid"
              borderColor={`${colorScheme}.100`}
            >
              <Flex flexDirection="column" gap={2}>
                <Text color={`${colorScheme}.600`} fontWeight="bold">
                  {item.description}
                </Text>
                <Text color={`${colorScheme}.400`} fontSize="sm">
                  {new Date(item.id).toLocaleDateString()}
                </Text>
              </Flex>
              <Flex alignItems="center" gap={4}>
                <Text color={`${colorScheme}.500`} fontWeight="bold">
                  R {item.amount}
                </Text>
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme={colorScheme}
                  variant="ghost"
                  size="sm"
                  aria-label="Delete transaction"
                  onClick={() => deleteTransaction(item.id)}
                />
              </Flex>
            </Flex>
          ))
        ) : (
          <Text textAlign="center" color="gray.500">
            No {title.toLowerCase()} found
          </Text>
        )}
      </Flex>
    </Box>
  );

  return (
    <Flex
      gap={8}
      w="full"
      flexDirection={{ base: "column", md: "row" }}
      py="6"
      px="4"
    >
      <TransactionList
        items={expenseTransactions}
        title="Expenses"
        colorScheme="red"
      />
      <TransactionList
        items={incomeTransactions}
        title="Income"
        colorScheme="green"
      />
    </Flex>
  );
}