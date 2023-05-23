import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Avatar, Box, Button, Checkbox, Divider, Flex, FormControl, FormLabel, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import React, {useState} from 'react';
import { FiChevronLeft, FiChevronRight, FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings, } from 'react-icons/fi';
import { GrCatalog } from 'react-icons/gr';
import { FaFunnelDollar } from 'react-icons/fa';

const sidebarItems = [
    { name: "Catagories", icon: GrCatalog, content: "Home content" },
    { name: "Price range", icon: FaFunnelDollar, content: "Trending content" },
    { name: "Location", icon: FiCompass, content: "Explore content" },
  ];

const Sidenav = () => {
  const [selectedFilters, setSelectedFilters] = React.useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
  };
  return (
    <Flex p={4} position={"sticky"} 
        h='95vh' 
        borderRight={1}
        bg={'white'}
        marginTop='2.5vh'
        w={isOpen ? '300px' : '90px'}
        flexDir='column'
        justifyContent='space-between'
        cursor="pointer" 
         >
        <Flex bg={'gray.100'} onClick={handleToggle} justifyContent={"space-between"} flexDir={'row'} align={'center'}>
          Logo
          {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
        </Flex>
        <Flex bg={'gray.100'} justifyContent={"space-between"}>
            <Heading fontWeight={'medium'} size={'md'}>Filter</Heading>
            <Heading fontWeight={'normal'} size={'md'}>Reset All</Heading>
        </Flex>
        <Divider />
        <VStack mt={5} spacing="4" align="stretch">
        {sidebarItems.map((item) => (
          <Accordion key={item.name} allowToggle>
            <AccordionItem border={'none'}>
              <h2>
                <AccordionButton>
                  <Icon as={item.icon} mr="2" />
                  <Text>{item.name}</Text>
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text>{item.content}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </VStack>
      <VStack alignItems={'center'} spacing={4} align="start">
        {sidebarItems.map((item) => (
          <FormControl key={item.name}>
            <FormLabel fontWeight="bold">{item.name}</FormLabel>
            <Stack spacing={2}>
              <Checkbox
                value={item.name.toLowerCase()}
                onChange={handleFilterChange}
                isChecked={selectedFilters.includes(item.name.toLowerCase())}
              >
              <Stack direction={'row'}> 
                <Icon as={item.icon} mr="2" />
                <Text>{item.name}</Text>
              </Stack>
              </Checkbox>
            </Stack>
          </FormControl>
        ))}
      </VStack>
        <Flex p='5%'
            flexDir='column'
            w='100%'
            alignItems='flex-start' mb={4}
        >
        <Divider   />
        <Stack direction={'row'} align={'center'} justify={'space-between'} mt={5}>
          <Button >Apply</Button>
          <Button >Reset</Button>
        </Stack>

        </Flex>
         
    </Flex>
  )
}

export default Sidenav