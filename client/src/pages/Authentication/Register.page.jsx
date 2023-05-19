import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useSteps } from "@chakra-ui/react";
import { RadioGroup } from "@headlessui/react";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Mail, Password, User } from "tabler-icons-react";
import * as yup from "yup";

import Header from "../../components/Authentication/header";
import InputField from "../../components/Authentication/InputField";
import InputFieldSelect from "../../components/Authentication/InputField.select";
import OTPModal from "../../components/Authentication/OTP.modal";
import RegistrationStepper from "../../components/Authentication/registration.stepper";

const steps = [
	{ title: "Personal Information", description: ["Enter your personal information ", "to create an account"] },
	{ title: "Account Information", description: ["Choose a username and password", "to secure your account."] },
	{ title: "Personal Preferences", description: ["your rental preferences or personal preferences", "to personalize your experience. "] },
];

const languages = [
	{ name: "English", value: "English" },
	{ name: "Amheric", value: "Amheric" },
	{ name: "Afan Oromo", value: "Afan Oromo" },
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

// list of city of every region {addis abab: [{addis abab}] }
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
// const cities = [
// 	{ name: "Hossana", value: "Hossana" },
// 	{ name: "Addis Ababa", value: "Addis Ababa" },
// 	{ name: "Dukerm", value: "Dukerm" },
// ];
const plans = [
	{
		name: "Startup",
		ram: "12GB",
		cpus: "6 CPUs",
		disk: "160 GB SSD disk",
	},
	{
		name: "Business",
		ram: "16GB",
		cpus: "8 CPUs",
		disk: "512 GB SSD disk",
	},
	{
		name: "Enterprise",
		ram: "32GB",
		cpus: "12 CPUs",
		disk: "1024 GB SSD disk",
	},
];
const RegisterPage = () => {
	const {
		isOpen: isOTPOpen,
		onOpen: onOTPOpen,
		onClose: onOTPClose,
	} = useDisclosure(
		// set it true to open the modal
		true,
	);
	const {
		isOpen: isOpenModalAccountType,
		onOpen: onOpenModalAccountType,
		onClose: onCloseModalAccountType,
	} = useDisclosure({
		defaultIsOpen: true,
	});
	const [registrationLoading, setregistrationLoding] = useState(false);
	const [OTPSending, setOTPSending] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selected, setSelected] = useState(plans[0]);

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	});
	let [plan, setPlan] = useState("");

	const validationSchema = [
		yup.object().shape({
			firstName: yup.string().required("First Name is required"),
			lastName: yup.string().required("Last Name is required"),
			email: yup.string().email("Invalid email").required("Email is required"),
			phoneNumber: yup.string().matches(/^\d+$/, "Phone Number must only contain digits").min(10, "Phone Number must be at least 10 digits").required("Phone Number is required"),
		}),
		yup.object().shape({
			username: yup
				.string()
				.required("Username is required")
				.test("username-availability", "Username is already taken", async function (value) {
					// Simulating a 2-second delay
					// await new Promise((resolve) => setTimeout(resolve, 500));

					const isAvailable = value !== "taken_username";
					return isAvailable;
				}),
			password: yup.string().required("Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
			confirmPassword: yup
				.string()
				.required("Confirm Password is required")
				.oneOf([yup.ref("password"), null], "Passwords must match"),
		}),
		yup.object().shape({
			preferedLanguage: yup.string().oneOf(["English", "Amheric", "Afan Oromo"], "Prefered Language is required").notRequired().default("English"),
			// emailNotification: yup.boolean().oneOf([true, false], ""),
			// phoneNotification: yup.boolean().oneOf([true, false], ""),
			region: yup.string().required("Region is required"),
			city: yup.string().required("City is required"),
		}),
	];

	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		username: "",
		password: "",
		confirmPassword: "",
		preferedLanguage: "English",
		emailNotification: false,
		phoneNotification: false,
		region: "",
		city: "",
	};

	const handleSubmit = (values) => {
		if (activeStep < 2) {
			if (activeStep === 1) {
				setOTPSending(true);
				setTimeout(() => {
					onOTPOpen();
					setOTPSending(false);
				}, 1000);
			} else {
				setActiveStep(activeStep + 1);
			}
		} else {
			setregistrationLoding(true);
			setTimeout(() => {
				setregistrationLoding(false);
				alert(JSON.stringify(values, null, 2));
			}, 1000);
		}
	};
	console.log(plan);

	return (
		<main className="bg-gradient-to-r from-[#870bad] to-[#d60c60] min-h-screen  flex flex-col">
			<Modal closeOnOverlayClick={false} closeOnEsc={false} isCentered size={"5xl"} isOpen={isOpenModalAccountType} onClose={onCloseModalAccountType}>
				<ModalOverlay backdropFilter="auto" backdropBlur="2px" />
				<ModalContent>
					<ModalHeader>
						<span>Choose an Account Type</span>
					</ModalHeader>
					<ModalBody>
						<RadioGroup value={plan} className="flex flex-col md:flex-row md:space-x-6 " onChange={setPlan}>
							{/* <RadioGroup.Label>Plan</RadioGroup.Label> */}

							<RadioGroup.Option className="mb-2 md:mt-0" value="Personal Account">
								{({ checked }) => (
									<div className={checked ? "shadow-2xl cursor-pointer bg-[#d60c60] to-black/90 rounded-lg p-6 scale-1 transition-all duration-150 " : "cursor-pointer bg-black/20 rounded-lg p-6 text-black  "}>
										<div className="flex justify-between items-center space-x-4 text-white ">
											<div className="">
												<RadioGroup.Label as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
													Personal Account
												</RadioGroup.Label>
												<RadioGroup.Description as="span" className={`inline text-xs ${checked ? "text-sky-100" : "text-gray-500"}`}>
													<span>For individual users who want to rent or lease properties for personal use.</span>
												</RadioGroup.Description>
											</div>
											<span className={checked ? "bg-white/70 p-3  rounded-full transition-all scale-80 duration-150" : "opacity-0 scale-50 transition-all duration-150"}>
												<CheckIcon w={6} h={6} color={"black"} />
											</span>
										</div>
									</div>
								)}
							</RadioGroup.Option>
							<RadioGroup.Option className="mt-2 md:mt-0" value="Enterprise Account">
								{({ checked }) => (
									<div className={checked ? "shadow-2xl cursor-pointer bg-[#d60c60] to-black/90 rounded-lg p-6 scale-1 transition-all duration-150" : "cursor-pointer bg-black/20 rounded-lg p-6 text-black"}>
										<div className="flex justify-between items-center space-x-4 text-white">
											<div className="">
												<RadioGroup.Label as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
													Enterprise Account
												</RadioGroup.Label>
												<RadioGroup.Description as="span" className={`inline text-xs ${checked ? "text-sky-100" : "text-gray-500 "}`}>
													<span>For businesses or organizations involved in the rental brokerage industry.</span>
												</RadioGroup.Description>
											</div>
											<span className={checked ? "bg-white/70 p-3  rounded-full transition-all scale-80 duration-150" : "opacity-0 scale-50 transition-all duration-150"}>
												<CheckIcon w={6} h={6} color={"black"} />
											</span>
										</div>
									</div>
								)}
							</RadioGroup.Option>

							{/* <RadioGroup.Option value="business">{({ checked }) => <span className={checked ? "bg-blue-200" : ""}>Business</span>}</RadioGroup.Option>
							<RadioGroup.Option value="enterprise">{({ checked }) => <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>}</RadioGroup.Option> */}
						</RadioGroup>
					</ModalBody>
					<ModalFooter>
						<Button
						className={
							` w-96 text-white font-bold p-3  
							${plan == ""? "!bg-gray-300 cursor-not-allowed text-black/60" : "!bg-[#d60c60] hover:bg-[#d60c60]"}
							`
						}
							disabled={true}
							onClick={() => {
								if (plan === "Personal Account") {
									onCloseModalAccountType();
								}
							}}
						>
							Continue
						</Button>
						{/* <Button colorScheme="green">Save</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>

			<OTPModal setActiveStep={setActiveStep} activeStep={activeStep} onClose={onOTPClose} isOpen={isOTPOpen} />
			<div className="w-full h-16 flex-none">
				<div className="flex  items-center">
					<div className="hidden md:block md:w-1/2 p-4 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2">
						<div className="flex justify-end items-center p-4">
							<div>
								<RouterLink to="/">
									<div className="text-white font-bold p-3  flex justify-center items-center">
										<span>Home</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/login">
									<span className="text-white font-bold p-3  flex justify-center items-center">Login</span>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			{!isOpenModalAccountType && (
				<div className="h-full w-full flex items-center justify-center flex-1 flex-col py-4  ">
					<RegistrationStepper setActiveStep={setActiveStep} activeStep={activeStep} steps={steps} />
					<div className="bg-[#EDF2FA] overflow-hidden lg:rounded-lg w-full lg:w-1/2 pt-5 px-4 flex flex-1">
						<div className=" flex  flex-col justify-center items-center space-y-6 flex-1">
							<Header title={"Create an Account"} stepTitle={steps[activeStep].title} />
							<div className="w-full flex-1 ">
								<Formik initialValues={initialValues} validationSchema={validationSchema[activeStep]} onSubmit={handleSubmit}>
									{(formik) => (
										<Form>
											<div className="flex flex-col justify-between h-full">
												<div className=" flex-grow flex flex-col justify-evenly space-y-4 ">
													<AnimatePresence mode="wait">
														{activeStep === 0 && (
															<motion.div key={1} initial={{ opacity: 0.5, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.2 }}>
																<InputField name="firstName" label="Firstname" leftIcon={<User size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" placeholder="Enter your first name" />
																<InputField name="lastName" label="Lastname" leftIcon={<User size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" placeholder="Enter your last name" />
																<InputField name="email" label="Email" leftIcon={<Mail size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" placeholder="Enter your email" />
																<InputField name="phoneNumber" label="Phone Number" inputLeftAddon="+251" rightIcon={<PhoneIcon size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" placeholder="Enter your phone number" />
															</motion.div>
														)}
														{activeStep === 1 && (
															<motion.div key={2} initial={{ opacity: 0.5, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.2 }}>
																<InputField liveValidate={true} name="username" label="Username" leftIcon={<User size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" placeholder="Enter your username" />
																<InputField name="password" label="Password" leftIcon={<Password size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="password" placeholder="Enter your password" />
																<InputField name="confirmPassword" label="Confirm Password" leftIcon={<Password size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="password" placeholder="Confirm your password" />
															</motion.div>
														)}
														{activeStep === 2 && (
															<motion.div key={3} initial={{ opacity: 0.5, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.2 }}>
																<InputFieldSelect options={languages} name="preferedLanguage" label="prefered Language" type="select" />
																<InputFieldSelect
																	options={regions}
																	name="region"
																	label="Region"
																	type="select"
																	placeholder="Select Region"
																	onChange={(e) => {
																		formik.setFieldValue("city", "");
																		formik.setFieldValue("region", e.target.value);
																		console.log(e.target.value);
																	}}
																/>
																{formik.values.region && (
																	// city based on region and clear the city value if region is changed
																	<InputFieldSelect options={cities[formik.values.region]} name="city" label="City" type="select" placeholder="Select City" />
																)}
															</motion.div>
														)}
													</AnimatePresence>
												</div>
												<div className=" py-4 flex items-center">
													<div className="flex [&>*]:w-1/3 justify-between  items-center w-full">
														{activeStep === 2 ? (
															<Button className="flex-1" type="submit" _loading={{ color: "white" }} isLoading={registrationLoading} loadingText="Registering" _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
																<span className="text-white">Register</span>
															</Button>
														) : (
															<>
																<div>
																	{activeStep > 0 && (
																		<Button type="submit" className="w-full" variant={"outline"} onClick={() => setActiveStep(activeStep - 1)} borderColor={"#2b6aa0"} size="lg" fontSize="md">
																			<span className="text-[#2b6aa0]">Back</span>
																		</Button>
																	)}
																</div>

																<Button type="submit" _loading={{ color: "white" }} loadingText="Please wait" isLoading={OTPSending} justifySelf={"end"} alignSelf={"end"} _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
																	<span className="text-white">Next</span>
																</Button>
															</>
														)}
													</div>
												</div>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	);
};

export default RegisterPage;
