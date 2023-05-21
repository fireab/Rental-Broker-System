import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";

const ProfilePage = () => {
	return (
		<div className="px-20 pb-10">
			<div className="bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md ">
				{/* dan image */}
				<Image shadow={"2xl"} position={"relative"} height={"200px"} bottom={"-50px"} left={"50px"} width={"200px"} rounded={"full"} src="https://bit.ly/dan-abramov" alt="Segun Adebayo" />
			</div>
			<Box marginTop={"100px"} className="border-2">
				<Heading color={"#870bad"}>Dilamo Wondimu</Heading>
				<div className="flex divide-x-2">
					<div className="w-1/4">
						<Button>Some Link</Button>
					</div>
					<div className="flex-1 bg-red-700">
						<p>name: </p>
						<p>dilamo wondimu</p>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default ProfilePage;
