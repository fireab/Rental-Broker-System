import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, SettingsIcon } from "@chakra-ui/icons";
import { NavLink, Outlet, Link as RouterLink } from "react-router-dom";
import { Box, Button, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Edit, Home, Home2, Lock, Pencil, Settings2, SettingsAutomation, Table } from "tabler-icons-react";

import ProfilePageView from "./components/Account/ProfilePage.view";

const ProfileLayout = () => {
	return (
		<div className="px-4  lg:px-12 pb-10">
			<div className="relative bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md flex justify-center md:block ">
				{/* dan image */}
				<div className="absolute md:hidden block right-8 top-4">
					<Menu>
						<MenuButton as={IconButton} aria-label="Options" icon={<SettingsIcon fontSize={"2xl"} color={"white"} />} variant="link" />
						<MenuList>
							<MenuItem as={RouterLink} to={"profile"} icon={<Home color="gray" />}>
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
				<Image p={2} className="relative -bottom-16 md:left-24 " shadow={"2xl"} height={"200px"} width={"200px"} rounded={"full"} src="https://bit.ly/dan-abramov" alt="Segun Adebayo" />
			</div>
			<div className="">
			<Box marginTop={"100px"} className="border-2 rounded-md">
				<div className="flex md:divide-x-2">
					<div className="hidden w-[45%] md:w-[40%] lg:w-[30%] md:flex flex-col items-stretch px-4 ">
						<Heading size={"lg"} color={"#870bad"} className="my-4 ">
							Dilamo Wondimu
						</Heading>
						<div className="rounded-lg flex flex-col items-stretch divide-y bg-gradient-to-b text-white from-[#870bad] to-[#d60c60]">
							<RouterLink to="profile">
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
