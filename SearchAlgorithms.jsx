import { Box, Button, Input, VStack, Text, HStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';

function SearchAlgorithms() {
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState(null);
  const toast = useToast();

  const generateSortedArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
      .sort((a, b) => a - b);
    setArray(newArray);
  };

  const binarySearch = () => {
    let left = 0;
    let right = array.length - 1;
    const target = parseInt(searchValue);

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        setResult(mid);
        return;
      }
      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    setResult(-1);
  };

  return (
    <VStack spacing={4}>
      <Button onClick={generateSortedArray} colorScheme="blue">
        Generate Sorted Array
      </Button>
      <HStack>
        <Input
          placeholder="Search value"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="number"
        />
        <Button onClick={binarySearch} colorScheme="green" isDisabled={array.length === 0}>
          Binary Search
        </Button>
      </HStack>
      <Box>
        <Text>Array: {array.join(', ')}</Text>
        {result !== null && (
          <Text>
            {result === -1 
              ? 'Value not found' 
              : `Value found at index ${result}`}
          </Text>
        )}
      </Box>
    </VStack>
  );
}

export default SearchAlgorithms; 