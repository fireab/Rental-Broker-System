import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { Home } from 'tabler-icons-react';

const sidebarItems = [
  { name: "Categories", icon: Home, content: "Home content" },
  { name: "Price range", icon: Home, content: "Trending content" },
  { name: "Location", icon: Home, content: "Explore content" },
  { name: "Brand", icon: Home, content: "Brand content" },
  { name: "Color", icon: Home, content: "Color content" },
];

const Sidebar = () => {
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

  return (
    <Box bg="gray.100" p={4} w="250px">
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
                <Icon as={item.icon} mr="2" />
                <Text>{item.name}</Text>
              </Checkbox>
            </Stack>
          </FormControl>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
