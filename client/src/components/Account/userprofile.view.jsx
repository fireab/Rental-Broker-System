import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useUser } from "../../hooks/user";

const UserprofileView = ({user, isLoading, isFetching, refetch}) => {
	
	


	return (
		<TableContainer  overflow={"scroll"} className="border m-2 rounded-xl">
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
						<Td className="font-sans text-sm md:text-base">{user.username}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">First Name</Td>
						<Td className="font-sans text-sm md:text-base">{user.firstName}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Last Name</Td>
						<Td className="font-sans text-sm md:text-base">{user.lastName}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Email</Td>
						<Td className="font-sans text-sm md:text-base">{user.email}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Phone Number</Td>
						<Td className="font-sans text-sm md:text-base">{user.phoneNumber}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Region</Td>
						<Td className="font-sans text-sm md:text-base">{user.address[0].region}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">City</Td>
						<Td className="font-sans text-sm md:text-base">{user.address[0].city}</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default UserprofileView;
