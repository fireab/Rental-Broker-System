import { StarIcon } from "@chakra-ui/icons";
import { Button, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useUser } from "../../hooks/user";

const Followers = () => {
    const location = useLocation()
    const username = location.pathname.split("/")[2]
    
	const { followers, refetchFollowers, isFollowersLoading, isFollowersFetching } = useUser(username);

	useEffect(() => {
		refetchFollowers();
	}, [refetchFollowers]);

	if (isFollowersLoading || isFollowersFetching || !followers) {
		return <div>Loading...</div>;
	}

	console.log(followers, "something");

	return (
		<div>
			<TableContainer overflow={"scroll"} className="border m-2 rounded-xl">
				<Table variant="striped" colorScheme="blackAlpha" size={"md"}>
					<Thead>
						<Tr>
							<Th>
								<span className="text-xs font-bold">User</span>
							</Th>
							<Th>
								<span className="text-xs font-bold">Total Posts</span>
							</Th>
							<Th>
								<span className="text-xs font-bold">Rating</span>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr className="hover:bg-gray-400/20 font-semibold">
							<Td className="flex space-x-2 items-center">
								<Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" className="rounded h-10 w-10" />
								<div className="flex flex-col justify-evenly">
									<span className="text-sm ">Dilamo Wondimu</span>
									<span className="text-xs text-gray-700">dilamo@gmail.com</span>
								</div>
							</Td>
							<Td className="font-sans text-sm  font-normal">50</Td>
							<Td className="font-sans text-sm md:text-base">
								{/*  rating */}
								<div className="flex space-x-2 items-center">
									<StarIcon className="h-4 w-4 !text-orange-500" />
									<span className="text-sm ">50</span>
								</div>
							</Td>
							<Td className="font-sans text-sm md:text-base">
								{/*  follwo button */}

								<Button variant={"outline"} p={"1"} height={"full"} className="!border-gray-600 ">
									<span className="text-xs p-1 font-bold text-gray-700">Following</span>
								</Button>
							</Td>
							<Td className="text-sm ">
								<span className="text-sm text-gray-700">Message</span>
							</Td>
						</Tr>
						<Tr className="hover:bg-gray-400/20 font-semibold">
							<Td className="flex space-x-2 items-center">
								<Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" className="rounded h-10 w-10" />
								<div className="flex flex-col justify-evenly">
									<span className="text-sm ">Dilamo Wondimu</span>
									<span className="text-xs text-gray-700">dilamo@gmail.com</span>
								</div>
							</Td>
							<Td className="font-sans text-sm  font-normal">50</Td>
							<Td className="font-sans text-sm md:text-base">
								{/*  rating */}
								<div className="flex space-x-2 items-center">
									<StarIcon className="h-4 w-4 !text-orange-500" />
									<span className="text-sm ">50</span>
								</div>
							</Td>
							<Td className="font-sans text-sm md:text-base">
								{/*  follwo button */}

								<Button p={"1"} height={"full"} className="!bg-sky-600 ">
									<span className="text-xs p-1 px-4 font-bold text-white">Follow</span>
								</Button>
							</Td>
							<Td className="text-sm ">
								<span className="text-sm text-gray-700">Message</span>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Followers;
