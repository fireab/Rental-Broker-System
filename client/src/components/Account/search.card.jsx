import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/user";
import capitalize from "../../utils/Capitalize";

const SearchCard = ({ user, loggedInUserId }) => {
	const navigate = useNavigate();
	const { follow, followData, isFollowLoading, isFollowFetching, getUserProfileByUsername, isGetUserProfileByUsernameLoading } = useUser(user.username);

	const handleFollow = async (e, userId) => {
		e.stopPropagation();
		await follow(userId);
	};
	return (
		<div
			onClick={() => {
				if (loggedInUserId === user.id) {
					navigate(`/user`);
				} else {
					navigate(`/user/${user.username}`);
				}
			}}
			className="flex-1 h-32 rounded-xl bg-slate-300 cursor-pointer "
		>
			<div className=" flex flex-row justify-between items-center  h-full flex-1 p-2">
				<div className="flex items-center space-x-2">
					{/* cat image */}
					{/* <Image src={`/api/user/profileimage/${user.username}`} alt="Segun Adebayo" className="rounded h-10 w-10 object-cover bg-contain" /> */}
					<Image objectFit="cover" src={`/api/user/profileimage/${user.username}`} className="w-20 h-20 rounded-full" />
				</div>
				<div className="flex px-4 flex-col md:flex-row flex-1 justify-between">
					<div className="flex flex-col">
						<span className="whitespace-nowrap font-bold">{`${capitalize(user.firstName)} ${capitalize(user.lastName)}`}</span>
						<div className="flex flex-col md:flex-row items-center whitespace-nowrap">
							<span className="text-xs">{user.followers.length} Followers</span>

							<span className="whitespace-pre hidden md:block">{` | `}</span>
							<span className="text-xs">{user.posts.length} Posts</span>
						</div>
					</div>
					{loggedInUserId !== user.id && (
						<Button isLoading={isFollowLoading || isFollowFetching} onClick={(e) => handleFollow(e, user.id)} className="!text-sm" colorScheme="messenger">
							{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : user.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchCard;
