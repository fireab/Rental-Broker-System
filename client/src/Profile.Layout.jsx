import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, Link as RouterLink, ScrollRestoration } from "react-router-dom";
import { Edit, Home, Home2, Lock, Pencil, Settings2, SettingsAutomation, Table } from "tabler-icons-react";

import ProfileImage from "./components/Account/profileImage";
import ProfilePageView from "./components/Account/ProfilePage.view";
import { useUser } from "./hooks/user";
import capitalize from "./utils/Capitalize";

const ProfileLayout = () => {
	const { getUserProfile, isGetUserProfileLoading, refetchUserProfile, isGetUserProfileFetching } = useUser();

	useEffect(() => {
		refetchUserProfile();
	}, [refetchUserProfile]);

	return (
		<div className="px-4  lg:px-12 pb-10">
			<div className="relative bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md flex justify-center md:block ">
				<div className="relative md:hidden block right-22 top-4">
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
				<div className="relative mb-20 bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48 rounded-b-md flex justify-center md:block ">
					<div className="flex flex-col md:flex-row items-end space-x-4">
						<div className=" flex flex-col w-full md:flex-row items-end  space-x-4 ">
							<div className="relative  -bottom-16 w-full flex flex-col md:flex-row items-center md:items-end">
								<div className="profile-image relative md:left-20  !w-52  bg-transparent ">
									<ProfileImage />
								</div>
								<div className=" flex-1">
									<div className="flex space-x-2 text-sm flex-col justify-center items-center ">
										<div>{(!isGetUserProfileLoading && !isGetUserProfileFetching && getUserProfile) && <span className="text-3xl font-extrabold ">{`${capitalize(getUserProfile.firstName)} ${capitalize(getUserProfile.lastName)}`}</span>}</div>
										<div className="flex items-center space-x-1 whitespace-nowrap">
											<StarIcon color="white" />
											<span>4.5</span>
											<span className="text-xs ">(20)</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">10 Reviews</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">10 Bookings</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">10 Followers</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">20 Following</span>
										</div>

										<div className="flex items-center space-x-1 text-black whitespace-nowrap">
											<span className="text-xs ">Joined</span>
											<span className="text-xs ">{new Date().toLocaleDateString()}</span>
											<span className="text-xs ">|</span>
											<span className="text-xs ">Last Active</span>
											<span className="text-xs ">{new Date().toLocaleDateString()}</span>
											<span className="text-xs ">|</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-40 md:mt-28">
				<Box marginTop={"100px"} className="border-2 rounded-md">
					<div className="flex md:divide-x-2">
						<div className="hidden w-[45%] md:w-[40%] lg:w-[30%] md:flex flex-col items-stretch px-4 ">
							<Heading className="whitespace-nowrap my-4 text-center" size={"md"} color={"#870bad"}>
								{(!isGetUserProfileLoading && !isGetUserProfileFetching && getUserProfile) && `${capitalize(getUserProfile?.firstName)} ${capitalize(getUserProfile?.lastName)}`}
							</Heading>
							<div className="rounded-lg flex flex-col items-stretch divide-y bg-gradient-to-b text-white from-[#870bad] to-[#d60c60]">
								<RouterLink to="/user">
									<div className=" p-2 hover:bg-white/10">
										<div className=" flex space-x-4 items-center p-2 ">
											<Home2 className="text-md" />
											<span className="text-md font-bold whitespace-nowrap text-sm ">Account Overview</span>
										</div>
									</div>
								</RouterLink>
								<RouterLink to="edit">
									<div className=" p-2 hover:bg-white/10">
										<div className=" flex space-x-4 items-center p-2 ">
											<Pencil className="text-md" />
											<span className="text-md font-bold whitespace-nowrap text-sm ">Edit Profile</span>
										</div>
									</div>
								</RouterLink>
								<RouterLink to="changepassword">
									<div className=" p-2 hover:bg-white/10">
										<div className=" flex space-x-4 items-center p-2 ">
											<Lock className="text-md" />
											<span className="text-md font-bold whitespace-nowrap text-sm ">Change Password</span>
										</div>
									</div>
								</RouterLink>
								<RouterLink to="/user/CreateAd">
									<div className=" p-2 hover:bg-white/10">
										<div className=" flex space-x-4 items-center p-2 ">
											<EditIcon className="text-md" />
											<span className="text-md font-bold whitespace-nowrap text-sm ">Edit Profile</span>
										</div>
									</div>
								</RouterLink>
								<RouterLink to="/user/CreateAd">
									<div className=" p-2">
										<div className=" flex space-x-4 items-center p-2 ">
											<EditIcon className="text-md" />
											<span className="text-md font-bold whitespace-nowrap text-sm ">Edit Profile</span>
										</div>
									</div>
								</RouterLink>
							</div>
						</div>
						<div className="w-full p-2">
							<Outlet />
						</div>
					</div>
				</Box>
			</div>
		</div>
	);
};

export default ProfileLayout;
