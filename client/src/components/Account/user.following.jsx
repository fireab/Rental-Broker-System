import { StarIcon } from "@chakra-ui/icons";
import { Button, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useUser } from "../../hooks/user";
import capitalize from "../../utils/Capitalize";
import FolloweRow from "./followe.row";

const Following = ({
	following,
	refetchFollowing,
	isFollowingLoading,
	isFollowingFetching,

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
				<span className="text-2xl font-bold">Not Following anyone</span>
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
						{following.map((user, index) => {
							return <FolloweRow loggedUser={loggedUser} key={index} user={user} />;
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Following;
