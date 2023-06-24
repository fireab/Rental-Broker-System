import { Avatar, Badge, Box, Button, Card, Container, Heading, Image, Link, List, ListItem, Skeleton, SkeletonCircle, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";

import SkeletonCard from "./skeleton.card";

const SkeletonPage = (props) => {
	if (props.page == "rentals") {
		return (
			<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</div>
		);
	} else if (props.page == "rental detail") {
		return (
			<Container maxW={"7xl"} className="p-2 m-4 z-10 w-full md:!w-2/3 overflow-auto ">
				<div className="flex flex-col space-y-4">
					<div className="flex justify-between">
						<div className="flex space-x-4">
							<Skeleton className="h-14 w-14" />
							<div className="flex flex-col justify-between">
								<Skeleton className="h-6 w-28" />
								<Skeleton className="h-6 w-72" />
							</div>
						</div>

						<Skeleton>
							<div className="flex space-x-2">
								<Button colorScheme="messenger">
									<span className="text-white">follow</span>
								</Button>

								<div className="p-2  right-2 cursor-pointer top-2 z-[2]">
									<BsBookmarkFill className={` transition-all duration-150 ease-in-out font-bold  text-lg`} />
								</div>
							</div>
						</Skeleton>
					</div>

					<div className="flex space-x-2">
						<Skeleton height="50vh" className="w-1/2" />
						<Skeleton className="flex flex-col h-[50vh] space-y-4 w-1/2">
							<Skeleton height="full" className="w-full" />
							<Skeleton height="full" className="w-full" />
						</Skeleton>
					</div>

					<Skeleton width={"40%"} className="flex flex-col !space-y-4">
						<Skeleton>Some Title about something</Skeleton>

						<Skeleton color={"gray.900"} fontWeight={300} fontSize={"2xl"}>
							Lorem ipsum dolor, sit amet e.
						</Skeleton>
					</Skeleton>

					<div className="flex flex-col space-y-4">
						<Skeleton className="h-6 w-72" />
						<Skeleton className="h-6 w-80" />
						<Skeleton className="h-6 w-72" />
						<Skeleton className="h-6 w-80" />
						<Skeleton className="h-6 w-72" />
						<Skeleton className="h-6 w-80" />
						<Skeleton className="h-6 w-72" />
						<Skeleton className="h-6 w-80" />
					</div>
				</div>
			</Container>
		);
	} else if (props.page == "request") {
		return (
			<Skeleton className="w-full !rounded-2xl lg:w-2/3 md:w-4/5" overflow="hidden" variant="outline">
				<Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Caffe Latte" />

				<Stack>
					<Skeleton>
						<Skeleton size="md">White Weeding Dress</Skeleton>

						<Skeleton py="2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius. Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Skeleton>
					</Skeleton>

					<Skeleton>
						<Button variant="solid" colorScheme="blue">
							Create A Post
						</Button>
					</Skeleton>
				</Stack>
			</Skeleton>
		);
	} else if (props.page == "profile") {
		return (
			<div className="px-10 relative ">
				<Skeleton className=" mb-20 bg-gradient-to-r from-[#870bad] to-[#d60c60] h-48  rounded-b-md flex justify-center md:block " />
				<div className="absolute left-10 -bottom-10 md:-bottom-16 md:left-24">
					<Skeleton className="w-48 h-48 !rounded-full" />
				</div>
			</div>
		);
	}else if(props.page == "follow page"){
		<div direction={{ base: "column", sm: "row" }} overflow="hidden" >
					<Skeleton className="flex ">
						<Skeleton objectFit="cover" overflow="hidden" rounded={"full"} className="h-24 w-24" src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" alt="" />
					</Skeleton>
					<Skeleton className="flex justify-between ">
						<div className="flex flex-col justify-between items-start">
							<div>
								<span className="font-bold text-xl">Dilamo Wondimu</span>
								<div className="flex items-center whitespace-nowrap">
									<Skeleton className="text-xs whitespace-pre">4.5 </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">(20) </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">Add Review </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">See Reviews </Skeleton>

									<Skeleton className="text-xs whitespace-pre ">| </Skeleton>
								</div>
							</div>
							<Link>
								<div>
									<Skeleton className="hover:text-blue-600">View Profile</Skeleton>
								</div>
							</Link>
						</div>
						<div className="flex flex-col justify-center">
							<Skeleton colorScheme="blue">Follow</Skeleton>
						</div>
					</Skeleton>
				</div>
	}
};

export default SkeletonPage;
