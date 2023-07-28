import { DeleteIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, Flex, FormControl, FormLabel, Heading, IconButton, Image, InputGroup, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Skeleton, Stack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { Form, ScrollRestoration } from "react-router-dom";
import { HomeQuestion, Tex } from "tabler-icons-react";
import * as Yup from "yup";

import logo from "../../../assets/Awashlogo.svg";
import SkeletonPage from "../../../components/common/skeleton.page";
import ImageDrop from "../../../components/RentalProperty/ImageDrop";
import InputField from "../../../components/RentalProperty/InputField";
import InputFieldSelect from "../../../components/RentalProperty/InputField.select";
import InputFieldTextarea from "../../../components/RentalProperty/InputField.textarea";
import { useRentalPosts } from "../../../hooks/rentalPost";
import { cities, Contact_Type, Lease_Length_Type, Property_Type, regions, Report_Type } from "../../../utils/list";
import RequestCard from "./../../../components/RentalProperty/request.card";

// illusion react mkyy mui
const RequestRental = () => {
	const [images, setImages] = React.useState([]);
	const [navClick, setNavClick] = React.useState();
	const { isOpen: isOpenRequest, onOpen: onOpenRequest, onClose: onCloseRequest } = useDisclosure();
	const [requesting, setRequesting] = React.useState(false);

	const {
		requestPost,
		requestPostLoading,

		getRentalRequests,
		isLoadingGetRentalRequests,
		isFetchingGetRentalRequests,
		refetchGetRentalRequests,

		getUserRentalRequests,
		isLoadingGetUserRentalRequests,
		isFetchingGetUserRentalRequests,
		refetchGetUserRentalRequests,
	} = useRentalPosts();

	useEffect(() => {
		refetchGetRentalRequests();
		refetchGetUserRentalRequests();
	}, [refetchGetRentalRequests, refetchGetUserRentalRequests]);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [navClick]);


	return (
		<div className="flex flex-col">
			<Modal
				size={{
					md: "lg",
					xs: "full",
				}}
				isOpen={isOpenRequest}
				onClose={onCloseRequest}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Report</ModalHeader>
					<ModalCloseButton />

					<ModalBody className="p-4">
						<Formik
							initialValues={{
								propertyTitle: "",
								propertyType: "",
								maxLeaseLength: {
									value: "",
									type: "days",
								},
								propertyDescription: "",
								contact: {
									value: "",
									type: "email",
								},
							}}
							validationSchema={Yup.object({
								propertyTitle: Yup.string().required("Required"),
								propertyType: Yup.string().required("Required"),
								maxLeaseLength: Yup.object({
									value: Yup.number().required("Required"),
									type: Yup.string().required("Required"),
								}),
								region: Yup.string().required("Required"),
								city: Yup.string().required("Required"),
								contact: Yup.object({
									value: Yup.string().required("Required"),
									type: Yup.string().required("Required"),
								}),

								propertyDescription: Yup.string(),
							})}
							onSubmit={async (values, actions) => {
								setRequesting(true);
								// alert(JSON.stringify(values, null, 2));
								const formData = new FormData();

								images.forEach((image) => {
									formData.append("images", image);
								});
								await axios
									.post("/api/upload", formData)
									.then((res) => {
										requestPost({ ...values, propertyImages: res.data[0] });
									})
									.finally(() => {
										setRequesting(false);
										onCloseRequest();
										setImages([]);
									});
							}}
						>
							{(formik) => (
								<Form onSubmit={formik.handleSubmit}>
									<div className="flex flex-col space-y-2">
										<InputField required name="propertyTitle" label="Name of Property" placeholder="Property Title" />
										<InputFieldSelect required placeholder="Please Select" name="propertyType" label="Property Type" options={Property_Type} />
										<div className="flex space-x-2">
											<InputField required name="maxLeaseLength.value" label="Maximum Lease Length" placeholder="Max Lease Length" type="number" />
											<div>
												<InputFieldSelect name="maxLeaseLength.type" options={Lease_Length_Type} />
											</div>
										</div>
										<div className="flex space-x-2">
											<InputFieldSelect
												required
												name="region"
												label="Property Region"
												options={regions}
												onChange={(e) => {
													formik.setFieldValue("region", e.target.value);
													formik.setFieldValue("city", e.target.value == "" ? "" : cities[e.target.value][0].value);
												}}
												placeholder="Please select a region"
											/>
											{/* {formik.values.region && ( */}
											{/* // city based on region and clear the city value if region is changed */}
											<InputFieldSelect
												required
												name="city"
												label="Property City"
												options={
													// if region is selected then show the cities of that region else show all cities
													cities[formik.values.propertyRegion]
														? cities[formik.values.propertyRegion]
														: // conver all list of region of cities to one list
														  Object.values(cities).reduce((acc, curr) => acc.concat(curr), [])
													// : cities
												}
												placeholder="Please select a city"
											/>
											{/* )} */}
										</div>

										<InputFieldTextarea name="propertyDescription" label="Property Description" placeholder="Property Description" type="text" />
										<div className="flex space-x-2">
											<InputField required name={`contact.value`} label="Contact Information" placeholder="Contact" type="text" />
											<InputFieldSelect name={`contact.type`} options={Contact_Type} />
										</div>
										<ImageDrop allowmultiple={false} setImages={setImages} images={images} />

										<Button isLoading={requestPostLoading || requesting} colorScheme="blue" mr={3} type="submit">
											Submit
										</Button>
									</div>
								</Form>
							)}
						</Formik>
					</ModalBody>


				</ModalContent>
			</Modal>
			<div className="flex flex-col items-center justify-center space-y-4 p-4">
				<Button onClick={onOpenRequest} className="flex w-1/2 md:w-1/6" colorScheme="messenger">
					<div className="flex whitespace-nowrap items-center space-x-2 justify-center">
						<HomeQuestion />
						<span>Add Rental Request</span>
					</div>
				</Button>
				<Tabs align="center" position="relative" variant="unstyled">
					<TabList>
						<Tab>Rental Requests</Tab>
						<Tab>My Rental Requests</Tab>
						{/* <Tab>Three</Tab> */}
					</TabList>
					<TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
					<TabPanels>
						<TabPanel className="flex flex-col items-center space-y-6 ">{
							isLoadingGetRentalRequests || isFetchingGetRentalRequests || !getRentalRequests ? 
							<SkeletonPage page="request" /> : 
							
							getRentalRequests.map(
								(request, index) => 
								
								<RequestCard key={index} request={request} />
								
								)}
						</TabPanel>


						<TabPanel className="flex flex-col items-center space-y-6 ">{
							isLoadingGetUserRentalRequests || isFetchingGetUserRentalRequests || !getUserRentalRequests ?
							 <SkeletonPage page="request" /> : 
							 getUserRentalRequests.map(
								(request, index) => 
								<RequestCard key={index} request={request} />
								)}
								
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
