import { StarIcon } from "@chakra-ui/icons";
import { Button, Image, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/user";
import capitalize from "../../utils/Capitalize";

const FolloweRow = ({ user, loggedUser }) => {
	const navigate = useNavigate();
	const { follow, followData, isFollowLoading, isFollowFetching, getUserProfileByUsername, isGetUserProfileByUsernameLoading } = useUser(user.username);

	const handleFollow = async (e, userId) => {
		e.stopPropagation();
		await follow(userId);
	};

	return (
		<Tr
			onClick={() => {
				if (loggedUser === user.id) {
					navigate(`/user`);
				} else {
					navigate(`/user/${user.username}`);
				}
			}}
			className="hover:bg-gray-400/20 font-semibold cursor-pointer"
		>
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
				{loggedUser !== user.id && (
					<Button isLoading={isFollowLoading || isFollowFetching} onClick={(e) => handleFollow(e, user.id)} colorScheme="messenger">
						{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : user.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
					</Button>
				)}
			</Td>
			<Td onClick={
				(e) => {
					e.stopPropagation();
				}	
			} className="text-sm ">{loggedUser !== user.id && <span className="text-sm text-gray-700">Message</span>}</Td>
		</Tr>
	);
};

export default FolloweRow;
