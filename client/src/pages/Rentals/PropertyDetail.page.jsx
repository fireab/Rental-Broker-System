import { Avatar, Badge, Box, Button, Container, FormControl, FormLabel, Heading, IconButton, InputGroup, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, StackDivider, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "react-query";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import SkeletonPage from "../../components/common/skeleton.page";
import InputFieldSelect from "../../components/RentalProperty/InputField.select";
import { useRentalPosts } from "../../hooks/rentalPost";
import { useUser } from "../../hooks/user";
import capitalize from "../../utils/Capitalize";
import { Report_Type } from "../../utils/list";
import NumberWithCommas from "../../utils/numberWithCommas";
import InputFieldTextarea from "./../../components/RentalProperty/InputField.textarea";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 20px;
`;

const PropertyDetailPage = () => {
	const { isOpen: isOpenReport, onOpen: onOpenReport, onClose: onCloseReport } = useDisclosure();
	// const notify = (message) => toast(message);
	// notify("Welcome to the property detail page");
	const { postId } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const {
		fetchRentalPost,
		refetchRentalPost,
		isFetchingRentalPost,
		isLoadingRentalPost,
		errorRentalPost,
		saveRentalPost,

		saveRentalPostData,
		isSavingRentalPost,
	} = useRentalPosts(postId);

	// report: actionReportPost.mutateAsync,
	//     isReportLoading: actionReportPost.isLoading,
	const {
		follow,
		followData,
		refetchFollow,
		isFollowLoading,
		isFollowFetching,

		report,
		isReportLoading,
	} = useUser();
	const [navClick, setNavClick] = React.useState();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);

	useEffect(
		(postId) => {
			refetchRentalPost(postId);
		},
		[refetchRentalPost],
	);

	const [isSavedPost, setIsSavePost] = useState(false);
	if ((isFetchingRentalPost, isLoadingRentalPost || !fetchRentalPost)) {
		return <SkeletonPage page="rental detail" />;
	}
	const post = fetchRentalPost?.post;
	const author = fetchRentalPost?.post.author;

	const handleSavePost = () => {
		saveRentalPost(post.id);
	};

	const handleFollow = async () => {
		await follow(author.id).then((data) => {});
	};

	return (
		<Container maxW={"7xl"} className="p-2 m-4 z-10 w-full md:!w-2/3 overflow-auto ">
			<Modal isOpen={isOpenReport} onClose={onCloseReport}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Report</ModalHeader>
					<ModalCloseButton />

					<ModalBody className="p-4">
						<Formik
							initialValues={{
								Report_Type: "",
								Report_Description: "",
							}}
							onSubmit={async (values, actions) => {
								// alert(JSON.stringify(values, null, 2));
								report({ postId: post.id, ...values }).then((data) => {
									onCloseReport();
								});
							}}
						>
							{(formik) => (
								<Form>
									<div className="flex flex-col space-y-2">
										<InputFieldSelect required={true} placeholder="Please Select" name="Report_Type" label="Report Type" options={Report_Type} />

										<InputFieldTextarea name="Report_Description" label="Description" placeholder="Description" type="text" />

										<Button isLoading={isReportLoading} colorScheme="blue" mr={3} type="submit">
											Submit
										</Button>
									</div>
								</Form>
							)}
						</Formik>
					</ModalBody>

					{/* <ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onCloseReport}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
			<div className="flex flex-col">
				<div className="flex justify-between items-center p-2">
					<div
						onClick={() => {
							if (author.id === fetchRentalPost.requestUserId) {
								navigate(`/user`);
							} else {
								navigate(`/user/${author.username}`);
							}
						}}
						className="flex cursor-pointer justify-center items-center space-x-4"
					>
						<Avatar name="user" size={"lg"} aria-label="User menu" src={`/api/user/profileimage/${author.username}`} />
						<div className="flex flex-col">
							<span className="text-md md:text-lg font-bold">{capitalize(author.username)}</span>
							<div className="flex flex-col md:flex-row text-xs md:text-sm font-light md:space-x-4">
								<span>4.2</span>
								<span className="whitespace-nowrap">{`${capitalize(author.address[0].region)}, ${capitalize(author.address[0].city)}`}</span>
								<span>{author.firstName}</span>
							</div>
						</div>
					</div>
					<div className="flex space-x-2">
						{author.id !== fetchRentalPost.requestUserId && (
							<div className="flex items-center space-x-2">
								<Button onClick={onOpenReport} colorScheme="orange" size="xs">
									Report
								</Button>
								<Button isLoading={isFollowLoading || isFollowFetching} onClick={handleFollow} colorScheme="messenger">
									{followData ? followData.follow ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span> : fetchRentalPost.isFollowed ? <span className="text-white">Unfollow</span> : <span className="text-white">Follow</span>}
								</Button>
							</div>
						)}

						<div onClick={handleSavePost} className="p-2  right-2 cursor-pointer top-2 z-[2]">
							<BsBookmarkFill
								style={{
									color: saveRentalPostData ? (saveRentalPostData.isSaved ? "red" : "black") : post.savedBy.length > 0 ? "red" : "black",
								}}
								className={` transition-all duration-150 ease-in-out font-bold  text-lg`}
							/>
						</div>
					</div>
				</div>
				{post.propertyImages.length > 0 && (
					<div className="flex flex-col md:flex-row justify-evenly space-x-4 w-full h-[50vh] ">
						<div className="md:w-1/2 w-full flex-1 ">
							<Box rounded={"lg"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={`url(/api/posts/images/${post.propertyImages[0].image})`} />
						</div>
						{post.propertyImages.length > 1 && (
							<div className="md:w-1/2 w-full flex ">
								{/* <div className="md:grid md:grid-cols-3 md:grid-rown-3 w-full gap-4 hidden"></div> */}
								<div
									style={{
										width: "100%",
										display: "grid",
										gridTemplateColumns: `repeat(${Math.ceil(post.propertyImages.slice(1).length / 2)}, minmax(auto, 1fr))`,
										gridAutoRows: "repeat(auto-fill, minmax(200px, 1fr))",
										gridGap: "20px",
									}}
								>
									{post.propertyImages.slice().map((image, index) => {
										return <Box key={index} rounded={"lg"} overflow={"clip"} className="h-full" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={`url(/api/posts/images/${image.image})`} />;
									})}
								</div>
							</div>
						)}
					</div>
				)}
				
				<Stack w={"full"} spacing={{ base: 6, md: 10 }}>
					<Box as={"header"}>
						<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
							{post.propertyTitle}
						</Heading>

						<Text color={"gray.900"} fontWeight={300} fontSize={"2xl"}>
							{`${NumberWithCommas(post.propertyPrice[post.propertyPrice.length - 1].price)} birr / ${post.propertyPrice[post.propertyPrice.length - 1].priceType.toLowerCase()}`}
						</Text>
					</Box>

					<Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={"gray.200"} />}>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text color={"gray.500"} fontSize={"2xl"} fontWeight={"300"}>
								{post.propertyDescription}
							</Text>
						</VStack>

						<Box>
							<Text fontSize={{ base: "16px", lg: "18px" }} color={"yellow.500"} fontWeight={"500"} textTransform={"uppercase"} mb={"4"}>
								Product Details
							</Text>

							<List spacing={2}>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Avalibliity:
									</Text>{" "}
									{post.isAvailable ? (
										<Badge fontWeight={"bold"} fontSize={"x-small"} p={1} px={2} bg={"green.500"} textColor={"white"} rounded={"full"}>
											Available
										</Badge>
									) : (
										<Badge fontWeight={"bold"} fontSize={"x-small"} p={1} px={2} bg={"red.500"} textColor={"white"} rounded={"full"}>
											Not Available
										</Badge>
									)}
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Property Name:
									</Text>{" "}
									<span>{post.propertyTitle}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Type:
									</Text>{" "}
									<span>{post.propertyType}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Quantity:
									</Text>{" "}
									<span>{post.propertyQuantity}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Address:
									</Text>{" "}
									<span>{`${post.propertyStreet} ${post.propertyRegion}, ${post.propertyCity}`}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Maximum Lease Length:
									</Text>{" "}
									<span>{`${post.maxLeaseLengthValue} ${post.maxLeaseLengthType}`}</span>
								</ListItem>
								<ListItem>
									<Text as={"span"} fontWeight={"bold"}>
										Minimum Lease Length:
									</Text>{" "}
									<span>{`${post.minLeaseLengthValue} ${post.minLeaseLengthType}`}</span>
								</ListItem>
								<ListItem>
									<div className="flex space-x-2 items-start">
										<Text as={"span"} fontWeight={"bold"}>
											Price:
										</Text>
										<div className="flex flex-col">
											{post.propertyPrice.map((price, index) => {
												return <span key={index}>{`${NumberWithCommas(price.price)} birr / ${price.priceType.toLowerCase()}`}</span>;
											})}
										</div>
									</div>
								</ListItem>
								{post.propertyContact.map((contact, index) => {
									return (
										<ListItem key={index}>
											<Text as={"span"} fontWeight={"bold"}>
												{capitalize(contact.type)}:
											</Text>{" "}
											<span>{contact.value}</span>
										</ListItem>
									);
								})}
							</List>
						</Box>
					</Stack>

					<Button
						rounded={"none"}
						w={"full"}
						mt={8}
						size={"lg"}
						py={"7"}
						bg={"gray.900"}
						color={"white"}
						textTransform={"uppercase"}
						_hover={{
							transform: "translateY(2px)",
							boxShadow: "lg",
						}}
					>
						Message
					</Button>

					{/* <Stack direction="row" alignItems="center" justifyContent={"center"}>
					<MdLocalShipping />
					<Text></Text>
				</Stack> */}
				</Stack>
			</div>
		</Container>
	);
};

export default PropertyDetailPage;
