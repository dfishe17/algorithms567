import { Box, Button, VStack, Text, NumberInput, NumberInputField, HStack } from '@chakra-ui/react';
import { useState } from 'react';

function OptimizationAlgorithms() {
  const [items, setItems] = useState([]);
  const [capacity, setCapacity] = useState(50);
  const [solution, setSolution] = useState(null);

  const generateItems = () => {
    const newItems = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      value: Math.floor(Math.random() * 30) + 10,
      weight: Math.floor(Math.random() * 20) + 5,
    }));
    setItems(newItems);
  };

  const knapsack = () => {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (items[i-1].weight <= w) {
          dp[i][w] = Math.max(
            items[i-1].value + dp[i-1][w-items[i-1].weight],
            dp[i-1][w]
          );
        } else {
          dp[i][w] = dp[i-1][w];
        }
      }
    }

    setSolution({
      maxValue: dp[n][capacity],
      items: traceback(dp, items, capacity)
    });
  };

  const traceback = (dp, items, capacity) => {
    const selected = [];
    let i = items.length;
    let w = capacity;

    while (i > 0 && w > 0) {
      if (dp[i][w] !== dp[i-1][w]) {
        selected.push(items[i-1]);
        w -= items[i-1].weight;
      }
      i--;
    }

    return selected;
  };

  return (
    <VStack spacing={4}>
      <HStack>
        <Text>Knapsack Capacity:</Text>
        <NumberInput value={capacity} onChange={(value) => setCapacity(parseInt(value))}>
          <NumberInputField />
        </NumberInput>
      </HStack>
      <Button onClick={generateItems} colorScheme="blue">
        Generate Items
      </Button>
      <Button onClick={knapsack} colorScheme="green" isDisabled={items.length === 0}>
        Solve Knapsack
      </Button>
      <Box>
        <Text fontWeight="bold">Available Items:</Text>
        {items.map((item, index) => (
          <Text key={index}>
            Item {index + 1}: Value = {item.value}, Weight = {item.weight}
          </Text>
        ))}
      </Box>
      {solution && (
        <Box>
          <Text fontWeight="bold">Solution:</Text>
          <Text>Maximum Value: {solution.maxValue}</Text>
          <Text>Selected Items:</Text>
          {solution.items.map((item, index) => (
            <Text key={index}>
              Item {item.id + 1}: Value = {item.value}, Weight = {item.weight}
            </Text>
          ))}
        </Box>
      )}
    </VStack>
  );
}

export default OptimizationAlgorithms; 