import { Button, Card, CardBody, Image, Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/user";
import capitalize from "./../../utils/Capitalize";

const FollowCard = ({ user }) => {
	const navigate = useNavigate();
	const { follow, followData, isFollowLoading, isFollowFetching } = useUser(user.username);

	const handleFollow = async (e, userId) => {
		e.stopPropagation();
		await follow(userId);
	};
	return (
		<Card onClick={
			() => {
				navigate(`/user/${user.username}`);
			}
		} className="p-4" direction={{ base: "column", sm: "row" }} cursor="pointer" overflow="hidden" variant="outline">
			<div className="flex ">
				<Image objectFit="cover" overflow="hidden" rounded={"full"} className="h-32 w-32" src={`/api/user/profileimage/${user.username}`} alt="" />
			</div>
			<CardBody className="flex justify-between ">
				<div className="flex flex-col justify-between items-start">
					<div>
						<span className="font-bold text-xl">{`${capitalize(user.firstName)} ${capitalize(user.lastName)}`}</span>
						<div className="flex items-center whitespace-nowrap">
							<span className="text-xs whitespace-pre">4.5 </span>

							<span className="text-xs whitespace-pre ">(20) </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">Add Review </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">See Reviews </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">See Reviews </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">See Reviews </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">See Reviews </span>

							<span className="text-xs whitespace-pre ">| </span>

							<span className="text-xs whitespace-pre ">See Reviews </span>

							<span className="text-xs whitespace-pre ">| </span>
						</div>
					</div>
					<Link>
						<div>
							<h1 className="hover:text-blue-600 text-sm">View Profile</h1>
						</div>
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<Button isLoading={isFollowLoading || isFollowFetching} onClick={(e) => handleFollow(e, user.id)} colorScheme="messenger">
						{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : user.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default FollowCard;
