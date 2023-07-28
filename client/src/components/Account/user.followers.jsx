import { StarIcon } from "@chakra-ui/icons";
import { Button, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useUser } from "../../hooks/user";
import capitalize from "../../utils/Capitalize";
import FolloweRow from "./followe.row";

const Followers = ({
	followers,
	refetchFollowers,
	isFollowersLoading,
	isFollowersFetching,

	followData,
	isFollowLoading,
	isFollowFetching,
	handleFollow,

	loggedUser,

	num,
}) => {
	if (num == 0) {
		return (
			<div className="flex flex-col items-center justify-center">
				<span className="text-2xl font-bold">No Followers</span>
			</div>
		);
	}

	return (
		<div>
			<TableContainer overflow={"scroll"} className="border m-2 rounded-xl">
				<Table variant="striped" colorScheme="blackAlpha" size={"md"}>
					<Thead>
						<Tr>
							<Th>
								<span className="text-xs font-bold">User</span>
							</Th>
							<Th>
								<span className="text-xs font-bold">Total Posts</span>
							</Th>
							<Th>
								<span className="text-xs font-bold">Rating</span>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{followers.map((user, index) => {
							return <FolloweRow loggedUser={loggedUser} key={index} user={user} />;
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Followers;
{
	/* <Button variant={"outline"} p={"1"} height={"full"} className="!border-gray-600 ">
											<span className="text-xs p-1 font-bold text-gray-700">Following</span>
										</Button> */
}

{
	/* <Tr key={index} className="hover:bg-gray-400/20 font-semibold">
									<Td className="flex space-x-2 items-center">
										<Image src={`/api/user/profileimage/${user.username}`} alt="Segun Adebayo" className="rounded h-10 w-10 object-cover bg-contain" />
										<div className="flex flex-col justify-evenly">
											<span className="text-sm ">{`${capitalize(user.firstName)} ${capitalize(user.lastName)}`}</span>
											<span className="text-xs text-gray-700">{user.email}</span>
										</div>
									</Td>
									<Td className="font-bold text-xs ">50</Td>
									<Td className="font-sans text-sm md:text-base">
										<div className="flex space-x-2 items-center">
											<StarIcon fontSize={"sm"} className="!text-orange-500" />
											<span className="text-xs ">50</span>
										</div>
									</Td>
									<Td className="font-sans text-sm md:text-base">
										<Button isLoading={isFollowLoading || isFollowFetching} onClick={() => handleFollow(user.id)} colorScheme="messenger">
											{user.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
										</Button>
									</Td>
									<Td className="text-sm ">
										<span className="text-sm text-gray-700">Message</span>
									</Td>
								</Tr> 
								*/
}
