import { PhoneIcon } from "@chakra-ui/icons";
import { Button, useDisclosure, useSteps } from "@chakra-ui/react";
import { Form, Formik } from "formik";
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
const cities = [
	{ name: "Hossana", value: "Hossana" },
	{ name: "Addis Ababa", value: "Addis Ababa" },
	{ name: "Dukerm", value: "Dukerm" },
];
const RegisterPage = () => {
	const { isOpen: isOTPOpen, onOpen: onOTPOpen, onClose: onOTPClose } = useDisclosure();
	const [registrationLoading, setregistrationLoding] = useState(false);
	const [OTPSending, setOTPSending] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	});
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
			address: yup.string().oneOf(["Hossana", "Addis Ababa", "Dukerm"], "City is required").notRequired().default("Addis Ababa"),
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
		address: "Addis Ababa",
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

	return (
		<main className="bg-[#EDF2F4] min-h-screen flex flex-col">
			<OTPModal setActiveStep={setActiveStep} activeStep={activeStep} onClose={onOTPClose} isOpen={isOTPOpen} />
			<div className="w-full flex-none">
				<div className="flex  items-center">
					<div className="hidden md:block md:w-1/2 p-4 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2">
						<div className="flex justify-end items-center p-4">
							<div>
								<RouterLink to="/">
									<div className="text-[#2b6cb0] font-bold p-3  flex justify-center items-center">
										<span>Home</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/login">
									<span className="text-[#2b6cb0] font-bold p-3  flex justify-center items-center">Login</span>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-full w-full flex items-center justify-center flex-1 flex-col  ">
				<RegistrationStepper setActiveStep={setActiveStep} activeStep={activeStep} steps={steps} />
				<div className="w-full lg:w-1/2 pt-5 px-4 flex flex-1">
					<div className=" flex  flex-col justify-center items-center space-y-6 flex-1">
						<Header title={"Create an Account"} stepTitle={steps[activeStep].title} />
						<div className="w-full flex-1 ">
							<Formik initialValues={initialValues} validationSchema={validationSchema[activeStep]} onSubmit={handleSubmit}>
								{(formik) => (
									<Form>
										<div className="flex flex-col justify-between h-full">
											<div className=" flex-grow flex flex-col justify-evenly space-y-4 ">
												{activeStep === 0 && (
													<>
														<InputField name="firstName" label="Firstname" leftIcon={<User color={"#2b6cb0"} />} type="text" />
														<InputField name="lastName" label="Lastname" leftIcon={<User color={"#2b6cb0"} />} type="text" />
														<InputField name="email" label="Email" leftIcon={<Mail color={"#2b6cb0"} />} type="text" />
														<InputField name="phoneNumber" label="Phone Number" inputLeftAddon="+251" rightIcon={<PhoneIcon color={"#2b6cb0"} />} type="text" />
													</>
												)}
												{activeStep === 1 && (
													<>
														<InputField liveValidate={true} name="username" label="Username" leftIcon={<User color={"#2b6cb0"} />} type="text" />
														<InputField name="password" label="Password" leftIcon={<Password color={"#2b6cb0"} />} type="password" />
														<InputField name="confirmPassword" label="Confirm Password" leftIcon={<Password color={"#2b6cb0"} />} type="password" />
													</>
												)}
												{activeStep === 2 && (
													<>
														<InputFieldSelect options={languages} name="preferedLanguage" label="prefered Language" type="select" />
														<InputFieldSelect options={cities} name="address" label="Address" type="select" />
														{/* <div className="flex justify-evenly items-center my-2">
															<InputFieldCheckbox name="emailNotification" label="Email Notification" />
															<InputFieldCheckbox name="phoneNotification" label="Email Notification" />
														</div> */}
													</>
												)}
											</div>
											<div className=" py-4 flex items-center">
												<div className="flex [&>*]:w-1/3 justify-between  items-center w-full">
													{activeStep === 2 ? (
														<Button className="flex-1" type="submit" isLoading={registrationLoading} loadingText="Registering" _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
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
		</main>
	);
};

export default RegisterPage;
