import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Edit, Home, Home2, Lock, Pencil, Settings2, SettingsAutomation } from "tabler-icons-react";

import Followers from "./components/Account/followers";
import ProfileImage from "./components/Account/profileImage";
import UserImage from "./components/Account/userImage";
import UserprofileView from "./components/Account/userprofile.view";
import { useUser } from "./hooks/user";
import PropertyListPage from "./pages/Rentals/PropertyList.page";

const UserLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	// useUserQuery
	// follow: followUser.mutateAsync,
	// refetchFollow: followUser.refetch,
	// isFollowLoading: followUser.isLoading,
	// isFollowFetching: followUser.isFetching,
	const {
		follow,
		followData,
		refetchFollow,
		isFollowLoading,
		isFollowFetching,
		getUserProfileByUsername,
		isGetUserProfileByUsernameLoading,

		refetchUserProfileByUsername,
		isGetUserProfileByIdFetching,
	} = useUser(location.pathname.split("/")[2]);

	const [isLoadingFollow, setLoadingFollow] = useState(false);

	useEffect(() => {
		refetchUserProfileByUsername();
	}, [refetchUserProfileByUsername]);

	if (isGetUserProfileByUsernameLoading || isGetUserProfileByIdFetching || !getUserProfileByUsername) {
		return <div>Loading...</div>;
	}

	const user = getUserProfileByUsername.user;

	if (getUserProfileByUsername.username == pathname.split("/")[2]) {
		navigate("/user");
	}

	const handleFollow = async () => {
		await follow(user.id);
	};

	return (
		<div>
			<div className="px-4  lg:px-12 pb-10">
				<div className="relative mb-20 bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md flex justify-center md:block ">
					{/* dan image */}
					<div className="absolute md:hidden block right-8 top-4">
						<Menu>
							<MenuButton as={IconButton} aria-label="Options" icon={<SettingsIcon fontSize={"2xl"} color={"white"} />} variant="link" />
							<MenuList>
								<MenuItem as={RouterLink} to={"/user"} icon={<Home color="gray" />}>
									<span className="whitespace-nowrap text-sm">Account Overview</span>
								</MenuItem>
								<MenuItem as={RouterLink} to={"edit"} icon={<Pencil />}>
									<span className="whitespace-nowrap text-sm">Edit Profile</span>
								</MenuItem>
								<MenuItem as={RouterLink} to={"changepassword"} icon={<Lock color="gray" />}>
									<span className="whitespace-nowrap text-sm">Change Password</span>
								</MenuItem>
							</MenuList>
						</Menu>
					</div>
					{/*  */}

					<div className="profile-image !w-52 relative -bottom-16 md:left-24 bg-transparent ">
						<UserImage username={pathname.split("/")[2]} />
					</div>
				</div>
				<div className=" bg-resd-700 flex justify-center py-2 md:py-0 md:justify-end md:pr-20">
					<Button isLoading={isFollowLoading || isFollowFetching} onClick={handleFollow} colorScheme="messenger">
						{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : getUserProfileByUsername.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
					</Button>
				</div>
				<div>
					<Tabs align="center" variant="line">
						<TabList>
							<Tab>Profile</Tab>
							<Tab>Posts</Tab>
							<Tab>
								<span>Followers</span>
								<Badge colorScheme="green">200</Badge>
							</Tab>
							<Tab>
								<span>Following</span>
								<Badge colorScheme="purple">40</Badge>
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
										<Followers user={user} />
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<p>four!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default UserLayout;
