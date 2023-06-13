/* eslint-disable react-hooks/exhaustive-deps */
import { EmailIcon } from "@chakra-ui/icons";
import { Button, filter, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { BiBookBookmark, BiCar, BiDish, BiMobile, BiParty, BiRun, BiTable } from "react-icons/bi";
import { BsBicycle, BsBuildingsFill, BsChevronDown, BsFilterRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import PropertyCard from "../../components/RentalProperty/PropertyCard";
import { useRentalPosts } from "../../hooks/rentalPost";
import InputFieldSelect from "./../../components/RentalProperty/InputField.select";
import { cities, citiesList, filter_options, Property_Type, regions } from "./../../utils/list";

const RentalsPage = () => {
	const { isOpen: isOpenFilter, onOpen: onOpenFilter, onClose: onCloseFilter } = useDisclosure();

	const { rentalsPosts, saveRentalPost, isLoading, error } = useRentalPosts();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="">
			<Modal isOpen={isOpenFilter} onClose={onCloseFilter}>
				<ModalOverlay />
				<ModalContent m={"4"}>
					<ModalHeader className="fles justify-center">
						<span>Filter</span>
					</ModalHeader>
					<ModalCloseButton />
					{/* <ModalBody></ModalBody> */}

					<Formik
						initialValues={{
							Property_Type: "",
							region: "",
							city: "",
						}}
						onSubmit={(values) => {
							onCloseFilter();
							// console.log(values);
						}}
					>
						{(formik) => (
							<Form>
								<div className="flex-col p-4">
									<InputFieldSelect name="Property_Type" label="Property Type" options={Property_Type} placeholder="Select Property Type" />
									<div className="flex space-x-2">
										<InputFieldSelect
											name="region"
											label="Region"
											options={regions}
											placeholder="Select Region"
											onChange={(e) => {
												formik.setFieldValue("region", e.target.value);
												formik.setFieldValue("city", e.target.value == "" ? "" : cities[e.target.value][0].value);
											}}
										/>
										<InputFieldSelect
											name="city"
											label="City"
											options={
												// if region is selected then show the cities of that region else show all cities
												cities[formik.values.propertyRegion]
													? cities[formik.values.propertyRegion]
													: // conver all list of region of cities to one list
													  Object.values(cities).reduce((acc, curr) => acc.concat(curr), [])
												// : cities
											}
											placeholder="Select City"
										/>
									</div>
									<ModalFooter>
										<Button type="submit" variant="ghost">
											Apply
										</Button>
									</ModalFooter>
								</div>
							</Form>
						)}
					</Formik>
				</ModalContent>
			</Modal>
			<div className="w-full bg-white sticky top-0 z-10">
				<div className="p-2">
					<div className="flex items-center justify-between">
						<div className="flex space-x-6 overflow-x-scroll scrollbar-hidden justify-start">
							{filter_options.map((item, index) => (
								<Link key={index} className="!w-48 overflow-ellipsis">
									<div className="flex flex-col justify-between items-center min-w-full">
										{item.icon}
										<span className="text-xs whitespace-nowrap ">{item.name}</span>
									</div>
								</Link>
							))}
						</div>
						<div className="whitespace-nowrap px-4">
							<Button leftIcon={<BsFilterRight />} onClick={onOpenFilter} m={0} colorScheme="teal" variant="outline">
								Filter
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{rentalsPosts.map((post, index) => {
					{/* console.log(post); */}

					{/* return <PropertyCard key={index} image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" title="Property 1" price="1000" />; */}
					return <PropertyCard key={post.id}
						propertyImages={post.propertyImages}
						propertyTitle={post.propertyTitle}
						propertyPrice={post.propertyPrice}
						propertyType={post.propertyType}
						propertyDescription={post.propertyDescription}
						propertyContact={post.propertyContact}
						propertyRegion={post.propertyRegion}
						propertyCity={post.propertyCity}
						propertyStreet={post.propertyStreet}
						maxLeaseLengthValue={post.maxLeaseLengthValue}
						maxLeaseLengthType={post.maxLeaseLengthType}
						minLeaseLengthValue={post.minLeaseLengthValue}
						minLeaseLengthType={post.minLeaseLengthType}
						propertyLeaseTerm={post.propertyLeaseTerm}
						authorId={post.authorId}
						isAvailable={post.isAvailable}
						propertyQuantity={post.propertyQuantity}
						savedBy={post.savedBy}
						postId={post.id}

					 />; 
				})}
			</div>
		</div>
	);
};

export default RentalsPage;
