import { Avatar, Button, Card, CardBody, CardFooter, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import capitalize from "../../utils/Capitalize";

const RequestCard = ({ request }) => {
	const navigate = useNavigate();
	console.log(request);
	return (
		<Card rounded={"2xl"} className="w-full !bg-blue-300 overflow-hidden" direction={{ base: "column", sm: "row" }}  variant="outline">
			<div className="flex flex-col md:flex-row w-full">
				<Image objectFit="cover" className="w-full h-24 md:h-full md:w-56 " src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Caffe Latte" />

				<div className="flex flex-col w-full">
					<CardBody pb={0}>
						<Heading size="md">{`${capitalize(request?.RequestTitle)}`}</Heading>

						<span className="text-xs text-left flex-1 !w-16 line-clamp-3 " >
						description 
							{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius. Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk. */}
						
						</span>

						<div className="flex flex-col items-center whitespace-nowrap  ">
							<div className="flex">
								<span className="text-xs whitespace-pre">4.5 </span>

								<span className="text-xs whitespace-pre ">(20) </span>

								<span className="text-xs whitespace-pre ">| </span>

								<span className="text-xs whitespace-pre ">Add Review </span>

								
							</div>

							<div className="flex">
								<span className="text-xs whitespace-pre ">See Reviews </span>

								<span className="text-xs whitespace-pre ">| </span>

								<span className="text-xs whitespace-pre ">See Reviews </span>

							</div>
						</div>
					</CardBody>

					<CardFooter pt={0}>
						<div className="flex flex-1 items-end md:items-center space-x-4 justify-between">
							<Button
								onClick={() => {
									console.log("clicked");
									navigate("/rentals/createad");
								}}
								variant="solid"
								colorScheme="blue"
							>
								<span className="text-sm">Create A Post</span>
							</Button>
							<Link>
								<div className="flex  flex-col-reverse md:flex-row md:space-x-2  items-center">
									<span className="font-bold text-sm whitespace-nowrap">{
										`${capitalize(request?.author?.firstName)} ${capitalize(request?.author?.lastName)}`
									}</span>
									<Avatar size="md" name="Kent Dodds" src={`/api/user/profileimage/${request.author.username}`} />
								</div>
							</Link>
						</div>
					</CardFooter>
				</div>
			</div>
		</Card>
	);
};

export default RequestCard;
