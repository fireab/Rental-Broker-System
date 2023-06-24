import { Avatar, Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Link, Skeleton, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { Tex } from "tabler-icons-react";

import logo from "../../../assets/Awashlogo.svg";
import SkeletonPage from "../../../components/common/skeleton.page";
import RequestCard from "./../../../components/RentalProperty/request.card";

const RequestRental = () => {
	const [navClick, setNavClick] = React.useState();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);
	return (
		<div>
			<div className="flex space-y-4 p-4">
				<Tabs align="center" position="relative" variant="unstyled">
					<TabList>
						<Tab>Rental Requests</Tab>
						<Tab>My Rental Requests</Tab>
						{/* <Tab>Three</Tab> */}
					</TabList>
					<TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
					<TabPanels>
						<TabPanel className="flex flex-col items-center space-y-6">
							<RequestCard />
						</TabPanel>
						<TabPanel className="flex flex-col items-center space-y-6">
							<RequestCard />
							<SkeletonPage page="request" />
						</TabPanel>
					</TabPanels>
				</Tabs>
				{/* <Card rounded={"2xl"} className="w-full lg:w-2/3 md:w-4/5 !overflow-hidden" direction={{ base: "column", sm: "row" }} overflow="visible" variant="outline">
					<Image objectFit="cover" className="w-40 md:w-56 " src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Caffe Latte" />

					<div className="flex flex-col">
						<CardBody className="">
							<Heading size="md">Red Wedding Dress</Heading>

							<Text className="text-sm" py="2" color={"blue.600"}>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius. Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
							</Text>

							<div className="flex flex-col items-start whitespace-nowrap ">
								<div className="flex">
									<span className="text-xs whitespace-pre">4.5 </span>

									<span className="text-xs whitespace-pre ">(20) </span>

									<span className="text-xs whitespace-pre ">| </span>

									<span className="text-xs whitespace-pre ">Add Review </span>

									<span className="text-xs whitespace-pre ">| </span>

									<span className="text-xs whitespace-pre ">See Reviews </span>

									<span className="text-xs whitespace-pre ">| </span>

									<span className="text-xs whitespace-pre ">See Reviews </span>
								</div>

								<div className="flex">
									<span className="text-xs whitespace-pre ">See Reviews </span>

									<span className="text-xs whitespace-pre ">| </span>

									<span className="text-xs whitespace-pre ">See Reviews </span>

									<span className="text-xs whitespace-pre ">| </span>

									<span className="text-xs whitespace-pre ">See Reviews </span>

									<span className="text-xs whitespace-pre ">| </span>
								</div>
							</div>
						</CardBody>

						<CardFooter>
							<div className="flex flex-1 items-end md:items-center justify-between">
								<Button variant="solid" colorScheme="blue">
									<span className="text-sm">Create A Post</span>
								</Button>
								<Link>
									<div className="flex  flex-col-reverse md:flex-row md:space-x-2  items-center">
										<span className="font-bold text-sm whitespace-nowrap">Dilamo Wondimu</span>
										<Avatar size="md" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
									</div>
								</Link>
							</div>
						</CardFooter>
					</div>
				</Card> */}
			</div>
		</div>
	);
};

export default RequestRental;
