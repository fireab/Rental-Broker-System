import { StarIcon } from "@chakra-ui/icons";
import { Badge, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Followers from "./components/Account/user.followers";
import Following from "./components/Account/user.following";
import UserImage from "./components/Account/userImage";
import UserprofileView from "./components/Account/userprofile.view";
import SkeletonPage from "./components/common/skeleton.page";
import { useUser } from "./hooks/user";
import PropertyListPage from "./pages/Rentals/PropertyList.page";
import capitalize from "./utils/Capitalize";

const UserLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [navClick, setNavClick] = React.useState();
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);
	const {
		follow,
		followData,
		isFollowLoading,
		isFollowFetching,
		getUserProfileByUsername,
		isGetUserProfileByUsernameLoading,
		refetchUserProfileByUsername,
		isGetUserProfileByIdFetching,
		followers,
		refetchFollowers,
		isFollowersLoading,
		isFollowersFetching,
		following,
		refetchFollowing,
		isFollowingLoading,
		isFollowingFetching,
	} = useUser(location.pathname.split("/")[2]);
	useEffect(() => {
		refetchUserProfileByUsername();
		refetchFollowers();
		refetchFollowing();
	}, [refetchUserProfileByUsername, refetchFollowers, refetchFollowing]);
	if (isGetUserProfileByUsernameLoading || isGetUserProfileByIdFetching || !getUserProfileByUsername) {
		return <SkeletonPage page="profile" />;
	}
	const user = getUserProfileByUsername.user;
	if (getUserProfileByUsername.username == pathname.split("/")[2]) {
		navigate("/user");
	}
	const handleFollow = async (userId) => {
		await follow(userId);
	};
	return (
		<div>
			<div className="px-4  lg:px-12 pb-10">
				<div className="relative mb-20 bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md flex justify-center md:block ">
					<div className="flex flex-col md:flex-row items-end space-x-4">
						<div className=" flex flex-col w-full md:flex-row items-end  space-x-4 ">
							<div className="relative  -bottom-16 w-full flex flex-col md:flex-row items-center md:items-end">
								<div className="user profile-image relative md:left-20  !w-52  bg-transparent ">
									<UserImage username={pathname.split("/")[2]} />
								</div>
								<div className=" flex-1">
									<div className="flex space-x-2 text-sm flex-col justify-center items-center ">
										<div>
											<span className="text-3xl font-extrabold ">{`${capitalize(user.firstName)} ${capitalize(user.lastName)}`}</span>
										</div>
										<div className="flex items-center space-x-1 whitespace-nowrap">
											<StarIcon color="white" />
											<span>4.5</span>
											<span className="text-xs ">(20)</span>
											<span className="text-xs ">|</span>
											{}
											<span className="text-xs ">|</span>
											<span className="text-xs ">{user.postsCount} Posts</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">{(!isFollowersLoading || !isFollowersFetching || followers) && followers.followersCount} Followers</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">{(!isFollowingLoading || !isFollowingFetching || following) && following.followingCount} Following</span>
										</div>
										<div className="flex items-center space-x-1 text-black whitespace-nowrap">
											<span className="text-xs ">Joined</span>
											<span className="text-xs ">{new Date(user.createdAt).toLocaleDateString()}</span>
										</div>
									</div>
								</div>
								<div className="bg-resd-700 flex justify-center py-2 md:py-0 md:justify-end md:pr-20">
									<Button isLoading={isFollowLoading || isFollowFetching} onClick={() => handleFollow(user.id)} colorScheme="messenger">
										{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : getUserProfileByUsername.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-56 md:mt-28">
					<Tabs align="center" variant="line">
						<TabList>
							<Tab>Profile</Tab>
							<Tab>
								<span>Posts</span>
								<Badge colorScheme="green">{user.postsCount}</Badge>
							</Tab>
							<Tab>
								<span>Followers</span>
								<Badge colorScheme="green">{(!isFollowersLoading || !isFollowersFetching || followers) && followers.followersCount}</Badge>
							</Tab>
							<Tab>
								<span>Following</span>
								<Badge colorScheme="purple">{(!isFollowingLoading || !isFollowingFetching || following) && following.followingCount}</Badge>
							</Tab>
						</TabList>
						<TabPanels className="">
							<TabPanel overflowX={"auto"}>
								<div className="w-full md:w-2/3">
									<UserprofileView user={user} isLoading={isGetUserProfileByUsernameLoading} isFetching={isGetUserProfileByIdFetching} refetch={refetchUserProfileByUsername} />
								</div>
							</TabPanel>
							<TabPanel>
								<div>
									<PropertyListPage user={user} username={pathname.split("/")[2]} />
								</div>
							</TabPanel>
							<TabPanel>
								<div className="w-full md:w-2/3">
									<div>
										{isFollowersLoading || isFollowersFetching || !followers ? (
											<div>Loading...</div>
										) : (
											<div>
												<Followers loggedUser={followers.loggedInUserId} num={followers.followersCount} handleFollow={handleFollow} followers={followers.followers} refetchFollowers={refetchFollowers} isFollowersLoading={isFollowersLoading} isFollowersFetching={isFollowersFetching} />
											</div>
										)}
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="w-full md:w-2/3">
									<div>
										{isFollowingLoading || isFollowingFetching || !following ? (
											<div>Loading...</div>
										) : (
											<div>
												<Following loggedUser={followers.loggedInUserId} num={following.followingCount} handleFollow={handleFollow} following={following.following} refetchFollowing={refetchFollowing} isFollowingLoading={isFollowingLoading} isFollowingFetching={isFollowingFetching} />
											</div>
										)}
									</div>
								</div>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
			</div>
		</div>
	);
};
export default UserLayout;
