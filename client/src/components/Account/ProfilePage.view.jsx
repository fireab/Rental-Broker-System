import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useUser } from "../../hooks/user";

const ProfilePageView = () => {
	const { getUserProfile, isGetUserProfileLoading, refetchUserProfile, isGetUserProfileFetching } = useUser();

	useEffect(() => {
		refetchUserProfile();
	}, [refetchUserProfile]);

	if (isGetUserProfileLoading || isGetUserProfileFetching || !getUserProfile) {
		return <div>Loading...</div>;
	}

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
						<Td className="font-sans text-sm md:text-base">{getUserProfile.username}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">First Name</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.firstName}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Last Name</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.lastName}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Email</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.email}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">Phone Number</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.phoneNumber}</Td>
					</Tr>
					<Tr className="hover:bg-white/50 font-semibold">
						<Td className="text-sm ">Region</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.address[0].region}</Td>
					</Tr>
					<Tr className="hover:bg-gray-400/20 font-semibold">
						<Td className="text-sm ">City</Td>
						<Td className="font-sans text-sm md:text-base">{getUserProfile.address[0].city}</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProfilePageView;
