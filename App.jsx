import { Box, Container, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import SortingAlgorithms from './components/SortingAlgorithms';
import SearchAlgorithms from './components/SearchAlgorithms';
import OptimizationAlgorithms from './components/OptimizationAlgorithms';

function App() {
  return (
    <Container maxW="container.xl" py={8} className="algorithm-container">
      <Heading mb={8} textAlign="center">Algorithm Visualizer</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sorting</Tab>
          <Tab>Searching</Tab>
          <Tab>Optimization</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SortingAlgorithms />
          </TabPanel>
          <TabPanel>
            <SearchAlgorithms />
          </TabPanel>
          <TabPanel>
            <OptimizationAlgorithms />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App; 