import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const ProfilePageView = () => {
	return (
		<TableContainer className="border m-2 rounded-xl">
			<Table variant="striped" colorScheme="blackAlpha" size={"md"}>
				<TableCaption>Edit </TableCaption>
				<Thead>
					<Tr>
						<Th>
							<span className="text-xl font-extrabold">Profile</span>
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr className="hover:bg-gray-400/20">
						<Td>Username</Td>
						<Td>Dilamo</Td>
					</Tr>
					<Tr className="hover:bg-white/50">
						<Td>First Name</Td>
						<Td>Dilamo</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20">
						<Td>Last Name</Td>
						<Td>Deboch</Td>
					</Tr>
					<Tr className="hover:bg-white/50">
						<Td>Email</Td>
						<Td>dilamowondimu@gmail.com</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20">
						<Td>Phone Number</Td>
						<Td>0964979388</Td>
					</Tr>
					<Tr className="hover:bg-white/50">
						<Td>Region</Td>
						<Td>Oromia</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20">
						<Td>City</Td>
						<Td>Hossana</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProfilePageView;
