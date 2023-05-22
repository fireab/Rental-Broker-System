import { EditIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Edit, Table } from "tabler-icons-react";

import ProfilePageView from "../../components/Account/ProfilePage.view";

const ProfilePage = () => {
	return (
		<div className="px-20 pb-10">
			<div className="bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md ">
				{/* dan image */}
				<Image shadow={"2xl"} position={"relative"} height={"200px"} bottom={"-50px"} left={"50px"} width={"200px"} rounded={"full"} src="https://bit.ly/dan-abramov" alt="Segun Adebayo" />
			</div>
			<Box marginTop={"100px"} className="border-2">
				<div className="flex divide-x-2">
					<div className="w-1/4 flex flex-col items-stretch divide-y">
						<Heading size={"lg"} color={"#870bad"}>
							Dilamo Wondimu
						</Heading>
						<div className=" p-2">
							<div className=" flex space-x-4 items-center p-2 ">
								<EditIcon className="text-xl" />
								<span className="text-lg">Edit Profile</span>
							</div>
						</div>
						<div className=" p-2">
							<div className=" flex space-x-4 items-center p-2 ">
								<EditIcon className="text-xl" />
								<span className="text-lg">Edit Profile</span>
							</div>
						</div>
						<div className=" p-2">
							<div className=" flex space-x-4 items-center p-2 ">
								<EditIcon className="text-xl" />
								<span className="text-lg">Edit Profile</span>
							</div>
						</div>
						<div className=" p-2">
							<div className=" flex space-x-4 items-center p-2 ">
								<EditIcon className="text-xl" />
								<span className="text-lg">Edit Profile</span>
							</div>
						</div>
						<div className=" p-2">
							<div className=" flex space-x-4 items-center p-2 ">
								<EditIcon className="text-xl" />
								<span className="text-lg">Edit Profile</span>
							</div>
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
