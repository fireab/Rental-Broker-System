import { EditIcon } from "@chakra-ui/icons";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Box, Button, Heading, Image, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Edit, Home, Home2, Lock, Pencil, Table } from "tabler-icons-react";

import ProfilePageView from "../../components/Account/ProfilePage.view";

const ProfilePage = () => {
	return (
		<div className="px-20 pb-10">
			<div className="bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md ">
				{/* dan image */}
				<Image p={2} shadow={"2xl"} position={"relative"} height={"200px"} bottom={"-50px"} left={"50px"} width={"200px"} rounded={"full"} src="https://bit.ly/dan-abramov" alt="Segun Adebayo" />
			</div>
			<Box marginTop={"100px"} className="border-2">
				<div className="flex divide-x-2">
					<div className="w-1/4 flex flex-col items-stretch px-4 ">
						<Heading size={"lg"} color={"#870bad"} className="my-4">
							Dilamo Wondimu
						</Heading>
						<div className="rounded-lg flex flex-col items-stretch divide-y bg-gradient-to-b text-white from-[#870bad] to-[#d60c60]">
							<RouterLink to="/user/CreateAd">
								<div className=" p-2 hover:bg-white/10">
									<div className=" flex space-x-4 items-center p-2 ">
										<Home className="text-xl" />
										<span className="text-lg">Account Overview</span>
									</div>
								</div>
							</RouterLink>
							<RouterLink to="/user/CreateAd">
								<div className=" p-2 hover:bg-white/10">
									<div className=" flex space-x-4 items-center p-2 ">
										<Pencil className="text-xl" />
										<span className="text-lg">Edit Profile</span>
									</div>
								</div>
							</RouterLink>
							<RouterLink to="/user/CreateAd">
								<div className=" p-2 hover:bg-white/10">
									<div className=" flex space-x-4 items-center p-2 ">
										<Lock className="text-xl" />
										<span className="text-lg">Change Password</span>
									</div>
								</div>
							</RouterLink>
							<RouterLink to="/user/CreateAd">
								<div className=" p-2 hover:bg-white/10">
									<div className=" flex space-x-4 items-center p-2 ">
										<EditIcon className="text-xl" />
										<span className="text-lg">Edit Profile</span>
									</div>
								</div>
							</RouterLink>
							<RouterLink to="/user/CreateAd">
								<div className=" p-2">
									<div className=" flex space-x-4 items-center p-2 ">
										<EditIcon className="text-xl" />
										<span className="text-lg">Edit Profile</span>
									</div>
								</div>
							</RouterLink>
						</div>
					</div>
					<div className="flex-1">
						<ProfilePageView />
					</div>
				</div>
			</Box>
		</div>
	);
};

export default ProfilePage;
