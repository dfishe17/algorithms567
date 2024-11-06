import { Box, Button, VStack, Text, SimpleGrid, useToast } from '@chakra-ui/react';
import { useState } from 'react';

function SortingAlgorithms() {
  const [array, setArray] = useState([]);
  const toast = useToast();

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  const bubbleSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    }
    toast({
      title: "Sorting Complete",
      status: "success",
      duration: 2000,
    });
  };

  return (
    <VStack spacing={4}>
      <Button onClick={generateRandomArray} colorScheme="blue">
        Generate Random Array
      </Button>
      <Button onClick={bubbleSort} colorScheme="green" isDisabled={array.length === 0}>
        Bubble Sort
      </Button>
      <SimpleGrid columns={10} spacing={2}>
        {array.map((value, index) => (
          <Box
            key={index}
            height={`${value * 2}px`}
            bg="blue.500"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            className="bar-animation"
            borderRadius="4px"
          >
            <Text color="white" fontSize="sm">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default SortingAlgorithms; 