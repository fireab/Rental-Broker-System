import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import React from "react";
import PropertyCard from "../components/RentalProperty/PropertyCard";
import ImageSlider from '../components/RentalProperty/ImageSlider';

const Homepage = () => {
	return (
		<>
			<div className="bg-[url('https://cdn.sanity.io/images/za5m6yef/production/46152070cc2faf24d3f035d2ade2426da25a5361-960x600.jpg?rect=0,67,960,465&w=930&h=450&blur=50')] bg-cover bg-no-repeat bg-center h-screen">{/* This is homepage */}</div>
			{/* <img className="h-screen w-screen" src="https://cdn.sanity.io/images/za5m6yef/production/46152070cc2faf24d3f035d2ade2426da25a5361-960x600.jpg?rect=0,67,960,465" alt="" /> */}
			<PropertyCard/>
			

		</>
	);
};

export default Homepage;
