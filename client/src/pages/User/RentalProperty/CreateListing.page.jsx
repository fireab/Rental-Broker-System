import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Heading, IconButton, Input, InputLeftElement, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Baguette, BrandFacebook, BrandInstagram, BrandTelegram, BrandTiktok, BrandTwitter, BrandWhatsapp, BrandYoutube, ClockCancel, Mail, PhoneCall } from "tabler-icons-react";
import * as yup from "yup";

import AdPreviewModal from "../../../components/RentalProperty/AdPreview.modal";
import { useRentalPosts } from "../../../hooks/rentalPost";
import { cities, Contact_Type, Lease_Length_Type, Price_Type, Property_Type, regions } from "../../../utils/list";
import ImageDrop from "./../../../components/RentalProperty/ImageDrop";
import InputField from "./../../../components/RentalProperty/InputField";
import InputFieldSelect from "./../../../components/RentalProperty/InputField.select";
import InputFieldTextarea from "./../../../components/RentalProperty/InputField.textarea";

const CreateListingPage = () => {
	// creat me a yup validaton with fields to create a rental ad for my rental findet system
	const { isOpen: isAdPreviewOpen, onOpen: onAdPreviewOpen, onClose: onAdPreviewClose } = useDisclosure();

	const { createRentalPost, isCreatingRentalPost, isRentalPostCreated, isRentalPostCreationError, rentalPostCreationError } = useRentalPosts();

	const validationSchema = yup.object().shape({
		propertyTitle: yup.string().required("Please enter a property title"),
		propertyType: yup
			.string()
			.oneOf(Property_Type.map((type) => type.value))
			.required("Please select a property type"),
		propertyRegion: yup.string().required("Please enter a property state"),
		propertyCity: yup.string().required("Please enter a property city"),
		propertyAddress: yup.string().required("Please enter a property address"),
		// array of prices like for a day or mothet or year
		propertyPrice: yup.array().of(
			yup.object().shape({
				price: yup.number().required("Please enter a price"),
				priceType: yup.string().oneOf(["per day", "per week", "per month", "per year"]).required("Please select a price type").default("per day"),
			}),
		),
		propertyQuantity: yup.number().required("Please enter a quantity"),
		propertyDescription: yup.string(),
		// propertyImages: yup.array().of(
		// 	yup.object().shape({
		// 		image: yup.string().required("Please select an image"),
		// 	}),
		// ),

		// MaxLeaseLength with a value and with a type
		maxLeaseLength: yup.object().shape({
			value: yup.number().required("Please enter a maximum lease length"),
			type: yup.string().oneOf(["days", "weeks", "months", "years"]).default("days"),
		}),
		minLeaseLength: yup.object().shape({
			value: yup.number().required("Please enter a minimum lease length"),
			type: yup.string().oneOf(["days", "weeks", "months", "years"]).default("days"),
		}),

		propertyContact: yup.array().of(
			yup.object().shape({
				value: yup.string().required("Please select a contact type"),
				type: yup.string().oneOf(["email", "phone", "whatsapp", "telegram", "facebook", "instagram", "twitter", "youtube", "tiktok"]).required("Please enter a contact value").default("email"),
			}),
		),
	});
	const [isLoading, setLoading] = useState(false);
	const initialValues = {
		propertyTitle: "",
		propertyType: "",
		propertyRegion: "",
		propertyCity: "",
		propertyAddress: "",
		propertyPrice: [
			{
				price: "",
				priceType: "per day",
			},
		],
		propertyQuantity: "",
		propertyDescription: "",
		// propertyImages: [
		// 	{
		// 		image: "",
		// 	},
		// ],
		maxLeaseLength: {
			value: "",
			type: "days",
		},
		minLeaseLength: {
			value: "",
			type: "days",
		},

		propertyLeaseTerm: "",
		propertyContact: [
			{
				type: "email",
				value: "",
			},
		],
	};

	const [previewAdValues, setpreviewAdValues] = React.useState(initialValues);

	const [images, setImages] = useState([]);
	const navigate = useNavigate();

	const handelSubmit = async (values) => {
		setLoading(true);
		const formData = new FormData();
		images.forEach((image) => {
			formData.append("images", image);
		});

		await axios
			.post("/api/upload", formData)
			.then(async (res) => {
				console.log(res.data);
				await createRentalPost({ ...values, propertyImages: res.data.map((image) => ({ image })) });
			})
			.then(() => {
				navigate("/rentals");
			})
			.catch((err) => {
				console.log("error dil");
			});
		setLoading(false);
	};
	const handelPreview = (values) => {
		setpreviewAdValues(values);
		onAdPreviewOpen();
	};

	return (
		<div className="bg-[#EDF2FA] lg:px-20 py-10">
			<AdPreviewModal previewAdValues={previewAdValues} isOpen={isAdPreviewOpen} onClose={onAdPreviewClose} />
			<div className="flex flex-col space-y-8">
				<Heading color={"#2b6aa0"} size={"lg"}>
					Create Listing
				</Heading>
				<div className="p-4 bg-white lg:rounded-lg lg:shadow-2xl px-2 lg:px-10">
					<Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur={true} onSubmit={handelSubmit}>
						{/* { values, errors, touched, handleChange, handleBlur, handleSubmit } */}
						{(formik) => (
							<Form>
								<div className="flex flex-col-reverse lg:flex-row w-full">
									<div className="flex flex-col flex-1 justify-start space-y-2">
										<div>
											<Heading color={"#2b6aa0"} size={"sm"}>
												Property Details
											</Heading>
											<div>
												<InputField name="propertyTitle" label="Name of Property" placeholder="Property Title" />
												<InputFieldSelect placeholder="Please Select" name="propertyType" label="Property Type" options={Property_Type} />
												{/* <InputField name="propertyType" label="Property Type" placeholder="Property Type" /> */}
												<InputFieldTextarea name="propertyDescription" label="Property Description" placeholder="Property Description" type="text" />
											</div>
										</div>
										<div className="p-2">
											<Heading color={"#2b6aa0"} size={"sm"}>
												Address
											</Heading>
											<div className="flex flex-col space-y-2">
												<div className="flex space-x-2">
													<InputFieldSelect
														name="propertyRegion"
														label="Property Region"
														options={regions}
														onChange={(e) => {
															formik.setFieldValue("propertyRegion", e.target.value);
															formik.setFieldValue("propertyCity", e.target.value == "" ? "" : cities[e.target.value][0].value);
														}}
														placeholder="Please select a region"
													/>
													{/* {formik.values.region && ( */}
													{/* // city based on region and clear the city value if region is changed */}
													<InputFieldSelect
														name="propertyCity"
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
												<InputField name="propertyAddress" label="Property Address" placeholder="Property Address" type="text" />
											</div>
										</div>

										<div className="p-2 border flex flex-col space-x-2">
											<Heading color={"#2b6aa0"} size={"sm"}>
												Pricing
											</Heading>
											<div className="flex flex-col space-y-2">
												<div className="flex flex-col space-y-2">
													{formik.values.propertyPrice.map((price, index) => (
														<div key={index} className="flex space-x-1">
															<InputField name={`propertyPrice[${index}].price`} label="Property Price" placeholder="Property Price" type="number" inputRightAddon={"Birr"} />
															<div className="flex">
																<InputFieldSelect name={`propertyPrice[${index}].priceType`} label="Property Price Type" options={Price_Type} />
																<IconButton
																	onClick={() => {
																		formik.setFieldValue(
																			"propertyPrice",
																			formik.values.propertyPrice.filter((_, i) => i !== index),
																		);
																	}}
																	backgroundColor={"red.400"}
																	color={"white"}
																	icon={<DeleteIcon />}
																/>
															</div>
														</div>
													))}
													<IconButton
														onClick={() => {
															formik.setFieldValue("propertyPrice", [...formik.values.propertyPrice, { price: "", priceType: "" }]);
														}}
														aria-label="Add Price"
														icon={<AddIcon />}
													/>
												</div>
												<InputField name="propertyQuantity" label="Property Quantity" placeholder="Property Quantity" type="number" />
											</div>
										</div>
										<div className="border p-2 flex flex-col space-y-2">
											<Heading color={"#2b6aa0"} size={"sm"}>
												Lease Details
											</Heading>
											<div className="flex flex-col space-y-2">
												<div className="flex space-x-1">
													<InputField name="minLeaseLength.value" label="Minimum Lease Length" placeholder="Min Lease Length" type="number" />
													<div>
														<InputFieldSelect name="minLeaseLength.type" label="Min Lease Length Type" options={Lease_Length_Type} />
													</div>
												</div>
												<div className="flex space-x-1">
													<InputField name="maxLeaseLength.value" label="Maximum Lease Length" placeholder="Max Lease Length" type="number" />
													<div>
														<InputFieldSelect name="maxLeaseLength.type" label="Max Lease Length Type" options={Lease_Length_Type} />
													</div>
												</div>
												<InputFieldTextarea name="propertyLeaseTerm" label="Property Lease Term" placeholder="Property Lease Term" />
											</div>
										</div>
										<div className="border p-2 space-y-2">
											<Heading color={"#2b6aa0"} size={"sm"}>
												Contact Information
											</Heading>
											<div>
												{/* <InputField name="propertyContact" label="Property Contact" placeholder="Property Contact" /> */}
												<div className="flex flex-col space-y-2">
													{formik.values.propertyContact.map((contact, index) => (
														<div key={index} className="flex space-x-1">
															<InputField name={`propertyContact[${index}].value`} label="Property Contact" placeholder="Property Contact" type="text" />
															<div className="flex">
																<InputFieldSelect name={`propertyContact[${index}].type`} label="Property Contact Type" options={Contact_Type} />
																<IconButton
																	onClick={() => {
																		formik.setFieldValue(
																			"propertyContact",
																			formik.values.propertyContact.filter((_, i) => i !== index),
																		);
																	}}
																	backgroundColor={"red.400"}
																	color={"white"}
																	icon={<DeleteIcon />}
																/>
															</div>
														</div>
													))}
													<IconButton
														onClick={() => {
															formik.setFieldValue("propertyContact", [...formik.values.propertyContact, { type: "", value: "" }]);
														}}
														aria-label="Add Contact"
														icon={<AddIcon />}
													/>
												</div>
											</div>
										</div>
										<div className="flex space-x-2 justify-between ">
											<div>
												<Button
													type="button"
													variant="outline"
													className=" p-2 rounded-md mt-4 "
													borderColor={"#2b6aa0"}
													size="lg"
													fontSize="md"
													onClick={() => {
														handelPreview(formik.values);
													}}
												>
													<span className="text-[#2b6aa0]">Preview</span>
												</Button>
											</div>
											<div className="w-1/2">
												<Button isLoading={isCreatingRentalPost} type="submit" className="!bg-[#2b6aa0] text-white p-2 rounded-md mt-4 w-full">
													Create Listing
												</Button>
											</div>
										</div>
									</div>
									<div className="create-post w-full lg:w-2/5 p-4 mt-10 ">
										<ImageDrop setImages={setImages} images={images} />
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default CreateListingPage;
