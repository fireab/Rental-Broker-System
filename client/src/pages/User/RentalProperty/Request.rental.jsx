import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Tex } from "tabler-icons-react";

import logo from "../../../assets/Awashlogo.svg";
import SkeletonPage from "../../../components/common/skeleton.page";

const RequestRental = () => {
	return (
		<div>
			<div className="flex items-center flex-col space-y-4 p-4">
				<Card className="w-full lg:w-2/3 md:w-4/5" direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
					<Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Caffe Latte" />

					<Stack>
						<CardBody>
							<Heading size="md">White Weeding Dress</Heading>

							<Text py="2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius. Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
						</CardBody>

						<CardFooter>
							<Button variant="solid" colorScheme="blue">
								Create A Post
							</Button>
						</CardFooter>
					</Stack>
				</Card>
                <SkeletonPage page="request"/>
                {/* <SkeletonPage page="request"/> */}
				

			
			</div>
		</div>
	);
};

export default RequestRental;
