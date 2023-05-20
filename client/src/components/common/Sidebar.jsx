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
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";

const sidebarItems = [
  { name: "Categories", icon: FiHome, content: "Home content" },
  { name: "Price range", icon: FiTrendingUp, content: "Trending content" },
  { name: "Location", icon: FiCompass, content: "Explore content" },
  { name: "Brand", icon: FiStar, content: "Brand content" },
  { name: "Color", icon: FiSettings, content: "Color content" },
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
      <VStack spacing={4} align="start" >
        {sidebarItems.map((item) => (
          <FormControl alignItems={'start'} key={item.name}>
            <Icon as={item.icon} mr="2" />
            <FormLabel fontWeight="bold">{item.name}</FormLabel>
            <Stack direction={'row'} spacing={2}>
              <Checkbox
                value={item.content.toLowerCase()}
                onChange={handleFilterChange}
                isChecked={selectedFilters.includes(item.name.toLowerCase())}
              >
                
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
