import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Heading, IconButton, Input, InputLeftElement, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Baguette, BrandFacebook, BrandInstagram, BrandTelegram, BrandTiktok, BrandTwitter, BrandWhatsapp, BrandYoutube, ClockCancel, Mail, PhoneCall } from "tabler-icons-react";
import * as yup from "yup";

import AdPreviewModal from "../../../components/RentalProperty/AdPreview.modal";
import ImageDrop from "./../../../components/RentalProperty/ImageDrop";
import InputField from "./../../../components/RentalProperty/InputField";
import InputFieldSelect from "./../../../components/RentalProperty/InputField.select";
import InputFieldTextarea from "./../../../components/RentalProperty/InputField.textarea";

const Price_Type = [
	{
		name: "per day",
		value: "per day",
	},
	{
		name: "per week",
		value: "per week",
	},
	{
		name: "per month",
		value: "per month",
	},
	{
		name: "per year",
		value: "per year",
	},
];
const Lease_Length_Type = [
	{
		name: "days",
		value: "days",
	},
	{
		name: "weeks",
		value: "weeks",
	},
	{
		name: "months",
		value: "months",
	},
	{
		name: "years",
		value: "years",
	},
];
const Contact_Type = [
	{
		name: "email",
		value: "email",
		icon: <Mail />,
	},
	{
		name: "phone",
		value: "phone",
		icon: <PhoneCall />,
	},
	{
		name: "whatsapp",
		value: "whatsapp",
		icon: <BrandWhatsapp />,
	},
	{
		name: "telegram",
		value: "telegram",
		icon: <BrandTelegram />,
	},
	{
		name: "facebook",
		value: "facebook",
		icon: <BrandFacebook />,
	},
	{
		name: "instagram",
		value: "instagram",
		icon: <BrandInstagram />,
	},
	{
		name: "twitter",
		value: "twitter",
		icon: <BrandTwitter />,
	},
	{
		name: "youtube",
		value: "youtube",
		icon: <BrandYoutube />,
	},
	{
		name: "tiktok",
		value: "tiktok",
		icon: <BrandTiktok />,
	},
];
const regions = [
	{
		name: "Addis Ababa",
		value: "Addis Ababa",
	},
	{
		name: "Afar",
		value: "Afar",
	},
	{
		name: "Amhara",
		value: "Amhara",
	},
	{
		name: "Benishangul-Gumuz",
		value: "Benishangul-Gumuz",
	},
	{
		name: "Dire Dawa",
		value: "Dire Dawa",
	},
	{
		name: "Gambela",
		value: "Gambela",
	},
	{
		name: "Harari",
		value: "Harari",
	},
	{
		name: "Oromia",
		value: "Oromia",
	},
	{
		name: "Sidama",
		value: "Sidama",
	},
	{
		name: "Somali",
		value: "Somali",
	},
	{
		name: "Southern Nations, Nationalities, and Peoples' Region",
		value: "Southern Nations, Nationalities, and Peoples' Region",
	},
	{
		name: "Tigray",
		value: "Tigray",
	},
];

const cities = {
	"Addis Ababa": [
		{ name: "Addis Ababa", value: "Addis Ababa" },
		{ name: "Addis Ketema", value: "Addis Ketema" },
		{ name: "Akaki Kaliti", value: "Akaki Kaliti" },
		{ name: "Arada", value: "Arada" },
		{ name: "Bole", value: "Bole" },
		{ name: "Gulele", value: "Gulele" },
		{ name: "Kirkos", value: "Kirkos" },
		{ name: "Kolfe Keranio", value: "Kolfe Keranio" },
		{ name: "Lideta", value: "Lideta" },
		{ name: "Nefas Silk Lafto", value: "Nefas Silk Lafto" },
		{ name: "Yeka", value: "Yeka" },
		{ name: "Addis Ababa", value: "Addis Ababa" },
	],
	Afar: [
		{ name: "Semera", value: "Semera" },
		{ name: "Awash", value: "Awash" },
		{ name: "Gewane", value: "Gewane" },
		{ name: "Dubti", value: "Dubti" },
		{ name: "Mile", value: "Mile" },
		{ name: "Asaita", value: "Asaita" },
		{ name: "Elidar", value: "Elidar" },
		{ name: "Chifra", value: "Chifra" },
	],
	Amhara: [
		{ name: "Bahir Dar", value: "Bahir Dar" },
		{ name: "Gondar", value: "Gondar" },
		{ name: "Debre Markos", value: "Debre Markos" },
		{ name: "Dessie", value: "Dessie" },
		{ name: "Kombolcha", value: "Kombolcha" },
		{ name: "Debre Birhan", value: "Debre Birhan" },
		{ name: "Giyorgis", value: "Giyorgis" },
		{ name: "Finote Selam", value: "Finote Selam" },
		{ name: "Debre Tabor", value: "Debre Tabor" },
		{ name: "Woldia", value: "Woldia" },
		{ name: "Debre Sina", value: "Debre Sina" },
		{ name: "Debre Berhan", value: "Debre Berhan" },
	],
	"Benishangul-Gumuz": [
		{ name: "Assosa", value: "Assosa" },
		{ name: "Menge", value: "Menge" },
		{ name: "Bambasi", value: "Bambasi" },
		{ name: "Guba", value: "Guba" },
		{ name: "Kurmuk", value: "Kurmuk" },
		{ name: "Mao-Komo special woreda", value: "Mao-Komo special woreda" },
	],
	"Dire Dawa": [{ name: "Dire Dawa", value: "Dire Dawa" }],
	Gambela: [
		{ name: "Gambela", value: "Gambela" },
		{ name: "Abobo", value: "Abobo" },
		{ name: "Dimma", value: "Dimma" },
		{ name: "Gog", value: "Gog" },
		{ name: "Itang", value: "Itang" },
		{ name: "Jikawo", value: "Jikawo" },
		{ name: "Lare", value: "Lare" },
		{ name: "Mengesh", value: "Mengesh" },
		{ name: "Nuer", value: "Nuer" },
	],
	Harari: [
		{ name: "Harar", value: "Harar" },
		{ name: "Gursum", value: "Gursum" },
	],
	Oromia: [
		{ name: "Adama", value: "Adama" },
		{ name: "Jimma", value: "Jimma" },
		{ name: "Shashamane", value: "Shashamane" },
		{ name: "Ambo", value: "Ambo" },
		{ name: "Bale Robe", value: "Bale Robe" },
		{ name: "Bishoftu", value: "Bishoftu" },
		{ name: "Burayu", value: "Burayu" },
		{ name: "Dukem", value: "Dukem" },
		{ name: "Goba", value: "Goba" },
		{ name: "Hawassa", value: "Hawassa" },
		{ name: "Nekemte", value: "Nekemte" },
		{ name: "Sebeta", value: "Sebeta" },
		{ name: "Woliso", value: "Woliso" },
		{ name: "Ziway", value: "Ziway" },
		{ name: "Asella", value: "Asella" },
		{ name: "Bako", value: "Bako" },
		{ name: "Bedele", value: "Bedele" },
		{ name: "Bekoji", value: "Bekoji" },
		{ name: "Bonga", value: "Bonga" },
	],
	Somali: [
		{ name: "Jijiga", value: "Jijiga" },
		{ name: "Gode", value: "Gode" },
		{ name: "Kebri Beyah", value: "Kebri Beyah" },
		{ name: "Shilavo", value: "Shilavo" },
		{ name: "Werder", value: "Werder" },
		{ name: "Dollo", value: "Dollo" },
		{ name: "Degehabur", value: "Degehabur" },
		{ name: "Kelafo", value: "Kelafo" },
		{ name: "Kebri Dahar", value: "Kebri Dahar" },
	],
	"Southern Nations, Nationalities, and Peoples' Region": [
		{ name: "Awasa", value: "Awasa" },
		{ name: "Arba Minch", value: "Arba Minch" },
		{ name: "Hosaena", value: "Hosaena" },
		{ name: "Jinka", value: "Jinka" },
		{ name: "Sodo", value: "Sodo" },
		{ name: "Yirga Alem", value: "Yirga Alem" },
		{ name: "Yabelo", value: "Yabelo" },
		{ name: "Wendo", value: "Wendo" },
		{ name: "Wolkite", value: "Wolkite" },
		{ name: "Waka", value: "Waka" },
		{ name: "Shakiso", value: "Shakiso" },
		{ name: "Sawla", value: "Sawla" },
		{ name: "Soddo Zuria", value: "Soddo Zuria" },
		{ name: "Silti", value: "Silti" },
		{ name: "Shone", value: "Shone" },
		{ name: "Sankura", value: "Sankura" },
		{ name: "Sodo", value: "Sodo" },
		{ name: "Soro", value: "Soro" },
		{ name: "Shebedino", value: "Shebedino" },
		{ name: "Sawla", value: "Sawla" },
	],
	Tigray: [
		{ name: "Mekelle", value: "Mekelle" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Axum", value: "Axum" },
		{ name: "Humera", value: "Humera" },
		{ name: "Shire", value: "Shire" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
	],
	Sidama: [
		{ name: "Hawassa", value: "Hawassa" },
		{ name: "Yirgalem", value: "Yirgalem" },
		{ name: "Aleta Wendo", value: "Aleta Wendo" },
		{ name: "Boditi", value: "Boditi" },
	],
};

const Property_Type = [
	{
		name: "House",
		value: "House",
	},
	{
		name: "Room",
		value: "Room",
	},
	{
		name: "Construction Material",
		value: "Construction Material",
	},
	{
		name: "Land",
		value: "Land",
	},
	{
		name: "Apartment",
		value: "Apartment",
	},
	{
		name: "Clothing",
		value: "Clothing",
	},
	{
		name: "Electronics",
		value: "Electronics",
	},
	{
		name: "Furniture",
		value: "Furniture",
	},
	{
		name: "Kitchen Utensils",
		value: "Kitchen Utensils",
	},
	{
		name: "Sports Equipment",
		value: "Sports Equipment",
	},
	{
		name: "Motorcycle",
		value: "Motorcycle",
	},
	{
		name: "Video Games",
		value: "Video Games",
	},
	{
		name: "Party Supplies",
		value: "Party Supplies",
	},
	{
		name: "Outdoor Equipment",
		value: "Outdoor Equipment",
	},
	{
		name: "Computer",
		value: "Computer",
	},

	// materials that can be rented

	{
		name: "Books",
		value: "Books",
	},
	{
		name: "Bicycle",
		value: "Bicycle",
	},
	{
		name: "Services",
		value: "Services",
	},
	{
		name: "Sports Equipment",
		value: "Sports Equipment",
	},
	{
		name: "Vehicle",
		value: "Vehicle",
	},
	{
		name: "Other",
		value: "Other",
	},
];

const CreateListingPage = () => {
	// creat me a yup validaton with fields to create a rental ad for my rental findet system
	const { isOpen: isAdPreviewOpen, onOpen: onAdPreviewOpen, onClose: onAdPreviewClose } = useDisclosure();

	const validationSchema = yup.object().shape({
		PropertyTitle: yup.string().required("Please enter a property title"),
		propertyType: yup.string().required("Please select a property type"),
		propertyRegion: yup.string().required("Please enter a property state"),
		propertyCity: yup.string().required("Please enter a property city"),
		propertyAddress: yup.string().required("Please enter a property address"),
		// array of prices like for a day or mothet or year
		propertyPrice: yup.array().of(
			yup.object().shape({
				price: yup.number().required("Please enter a price"),
				priceType: yup.string().required("Please select a price type"),
			}),
		),
		propertyQuantity: yup.string().required("Please enter a quantity"),
		propertyDescription: yup.string().required("Please enter a property description"),
		propertyImages: yup.array().of(
			yup.object().shape({
				image: yup.string().required("Please select an image"),
			}),
		),

		// MaxLeaseLength with a value and with a type
		MaxLeaseLength: yup.object().shape({
			value: yup.string().required("Please enter a max lease length"),
			type: yup.string().required("Please select a max lease length type"),
		}),
		MinLeaseLength: yup.object().shape({
			value: yup.string(),
			type: yup.string(),
		}),

		propertyContact: yup.array().of(
			yup.object().shape({
				type: yup.string().required("Please select a contact type"),
				value: yup.string().required("Please enter a contact value"),
			}),
		),
	});

	const initialValues = {
		PropertyTitle: "",
		propertyType: "",
		propertyRegion: "",
		propertyCity: "",
		propertyAddress: "",
		propertyPrice: [
			{
				price: "",
				priceType: "",
			},
		],
		propertyQuantity: "",
		propertyDescription: "",
		propertyImages: [
			{
				image: "",
			},
		],
		MaxLeaseLength: {
			value: "",
			type: "",
		},
		MinLeaseLength: {
			value: "",
			type: "",
		},

		propertyLeaseTerm: "",
		propertyContact: [
			{
				type: "",
				value: "",
			},
		],
	};

	const handelSubmit = (values) => {
		onAdPreviewOpen();
	};

	return (
		<div className="bg-[#EDF2FA] px-20 py-10">
			<AdPreviewModal isOpen={isAdPreviewOpen} onClose={onAdPreviewClose} />
			<div className="flex flex-col space-y-8">
				<Heading color={"#2b6aa0"} size={"lg"}>
					Create Listing
				</Heading>
				<div className="p-4 bg-white rounded-lg shadow-2xl">
					<Formik
						initialValues={initialValues}
						// validationSchema={validationSchema}
						onSubmit={handelSubmit}
					>
						{/* { values, errors, touched, handleChange, handleBlur, handleSubmit } */}
						{(formik) => (
							<Form>
								<div className="flex w-full">
									<div className="flex flex-col flex-1 justify-start space-y-2">
										<div>
											<Heading color={"#2b6aa0"} size={"sm"}>
												Property Details
											</Heading>
											<div>
												<InputField name="PropertyTitle" label="Name of Property" placeholder="Property Title" />
												<InputFieldSelect name="propertyType" label="Property Type" options={Property_Type} />
												{/* <InputField name="propertyType" label="Property Type" placeholder="Property Type" /> */}
												<InputFieldTextarea name="propertyDescription" label="Property Description" placeholder="Property Description" />
											</div>
										</div>
										<div className="p-2">
											<Heading color={"#2b6aa0"} size={"sm"}>
												Address
											</Heading>
											<div className="flex flex-col space-y-2">
												<div className="flex space-x-2">
													<InputFieldSelect name="propertyRegion" label="Property Region" options={regions} />
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
													/>
													{/* )} */}
												</div>
												<InputField name="propertyAddress" label="Property Address" placeholder="Property Address" />
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
															<InputField name={`propertyPrice[${index}].value`} label="Property Price" placeholder="Property Price" type="number" inputRightAddon={"Birr"} />
															<InputFieldSelect name={`propertyPrice[${index}].type`} label="Property Price Type" options={Price_Type} />
															<IconButton
																onClick={() => {
																	formik.setFieldValue(
																		"propertyPrice",
																		formik.values.propertyPrice.filter((_, i) => i !== index),
																	);
																}}
																backgroundColor={"red.400"}
																color={"white"}
																alignSelf={"end"}
																icon={<DeleteIcon />}
															/>
														</div>
													))}
													<IconButton
														onClick={() => {
															formik.setFieldValue("propertyPrice", [...formik.values.propertyPrice, { type: "", value: "" }]);
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
													<InputField name="MinLeaseLength.value" label="Minimum Lease Length" placeholder="Min Lease Length" type="number" />
													<div>
														<InputFieldSelect name="MinLeaseLength.type" label="Min Lease Length Type" options={Lease_Length_Type} />
													</div>
												</div>
												<div className="flex space-x-1">
													<InputField name="MaxLeaseLength.value" label="Maximum Lease Length" placeholder="Max Lease Length" type="number" />
													<div>
														<InputFieldSelect name="MaxLeaseLength.type" label="Max Lease Length Type" options={Lease_Length_Type} />
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
															<InputFieldSelect name={`propertyContact[${index}].type`} label="Property Contact Type" options={Contact_Type} />
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
										<Button type="submit" className="!bg-[#2b6aa0] text-white p-2 rounded-md mt-4 w-full">
											Create Listing
										</Button>
									</div>
									<div className="w-2/5 p-4 mt-10">
										<ImageDrop />
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
