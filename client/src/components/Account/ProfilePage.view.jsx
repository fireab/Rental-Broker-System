import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const ProfilePageView = () => {
	return (
		<TableContainer>
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
					<Tr>
						<Td>Username</Td>
						<Td>Dilamo</Td>
					</Tr>
					<Tr>
						<Td>First Name</Td>
						<Td>Dilamo</Td>
					</Tr>
					<Tr>
						<Td>Last Name</Td>
						<Td>Deboch</Td>
					</Tr>
					<Tr>
						<Td>Email</Td>
						<Td>dilamowondimu@gmail.com</Td>
					</Tr>
					<Tr>
						<Td>Phone Number</Td>
						<Td>0964979388</Td>
					</Tr>
					<Tr>
						<Td>Region</Td>
						<Td>Oromia</Td>
					</Tr>
					<Tr>
						<Td>City</Td>
						<Td>Hossana</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProfilePageView;
