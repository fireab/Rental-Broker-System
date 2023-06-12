import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProfilePageView = () => {
	const profile = useLoaderData();
	console.log(profile);
	return (
		<TableContainer className="border m-2 rounded-xl">
			<Table variant="striped" colorScheme="blackAlpha" size={"md"}>
				<Thead>
					<Tr>
						<Th>
							<span className="text-xl font-extrabold">Profile</span>
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm font-bold">Username</Td>
						<Td className="font-sans text-sm md:text-base">Dilamo</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">First Name</Td>
						<Td className="font-sans text-sm md:text-base">Dilamo</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Last Name</Td>
						<Td className="font-sans text-sm md:text-base">Deboch</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Email</Td>
						<Td className="font-sans text-sm md:text-base">dilamowondimu@gmail.com</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Phone Number</Td>
						<Td className="font-sans text-sm md:text-base">0964979388</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Region</Td>
						<Td className="font-sans text-sm md:text-base">Oromia</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">City</Td>
						<Td className="font-sans text-sm md:text-base">Hossana</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProfilePageView;
