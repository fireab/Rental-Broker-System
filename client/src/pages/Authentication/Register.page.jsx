import { PhoneIcon } from "@chakra-ui/icons";
import { Button, useDisclosure, useSteps } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Mail, Password, User } from "tabler-icons-react";

import AccountTypeModal from "../../components/Authentication/AccountType.modal";
import Header from "../../components/Authentication/header";
import InputField from "../../components/Authentication/InputField";
import InputFieldSelect from "../../components/Authentication/InputField.select";
import OTPModal from "../../components/Authentication/OTP.modal";
import RegistrationStepper from "../../components/Authentication/registration.stepper";
import { useAuth } from "../../hooks/useAuth";
import { cities, languages, regions, steps } from "./../../utils/list";
import { signupValidationSchema as validationSchema } from "../../utils/validation";

const RegisterPage = () => {
	const { signup, setupOTP, checkOTP } = useAuth();
	const { isOpen: isOTPOpen, onOpen: onOTPOpen, onClose: onOTPClose } = useDisclosure(true);
	const {
		isOpen: isOpenModalAccountType,
		onOpen: onOpenModalAccountType,
		onClose: onCloseModalAccountType,
	} = useDisclosure({
		defaultIsOpen: true,
	});
	const [registrationLoading, setregistrationLoding] = useState(false);
	const [OTPSending, setOTPSending] = useState(false);
	// const [checkingUsernameAvaliablity, setcheckingUsernameAvaliablity] = useState(false);

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	});
	let [plan, setPlan] = useState("");

	const [stepValues, setStepValues] = useState({});

	const initialValues = [
		{
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
		},
		{
			username: "",
			password: "",
			confirmPassword: "",
		},
		{
			preferedLanguage: "English",
			region: "",
			city: "",
		},
	];
	const handleSubmit = async (values) => {
		if (activeStep < 2) {
			if (activeStep === 1) {
				setOTPSending(true);
				setStepValues((stepValues) => ({ ...stepValues, ...values }));
				await setupOTP({ email: values.email, phoneNumber: values.phoneNumber, username: values.username })
					.then((res) => {
						console.log("setupOTP success");
						onOTPOpen();
					})
					.catch((err) => {
						console.log("setupOTP failed");
					})
					.finally(() => {
						setOTPSending(false);
					});
			} else {
				setStepValues((stepValues) => ({ ...stepValues, ...values }));
				setActiveStep(activeStep + 1);
			}
		} else {
			setregistrationLoding(true);

			await signup({ ...values, accountType: plan })
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setregistrationLoding(false);
				});
		}
	};

	return (
		<main className="bg-gradient-to-r from-[#870bad] to-[#d60c60] min-h-screen  flex flex-col">
			<AccountTypeModal plan={plan} setPlan={setPlan} isOpenModalAccountType={isOpenModalAccountType} onCloseModalAccountType={onCloseModalAccountType} />

			<OTPModal emeail={stepValues.email} setActiveStep={setActiveStep} activeStep={activeStep} onClose={onOTPClose} isOpen={isOTPOpen} />
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
					<RegistrationStepper
						validateOnChange={false} // Disable validation on change
						validateOnBlur={false}
						setActiveStep={setActiveStep}
						activeStep={activeStep}
						steps={steps}
					/>
					<div className="bg-[#EDF2FA] overflow-hidden lg:rounded-lg w-full lg:w-1/2 pt-5 px-4 flex ">
						<div className=" flex  flex-col justify-center items-center space-y-6 flex-1">
							<Header title={"Create an Account"} stepTitle={steps[activeStep].title} />
							<div className="w-full flex-1 ">
								<Formik initialValues={initialValues[activeStep]} validationSchema={validationSchema[activeStep]} onSubmit={handleSubmit}>
									{
										(
											{ isValidating, ...formik }, // formik is the formik object
										) => {
											return (
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
																		<InputField
																			liveValidate={true}
																			// isValidating={
																			// 	//check if username is being validated so i can show  loading icon
																			// 	checkingUsernameAvaliablity && formik.values.username !== "" && formik.errors.username === undefined
																			// }
																			name="username"
																			label="Username"
																			leftIcon={<User size={22} strokeWidth={1.5} color={"#2b6cb0"} />}
																			type="text"
																			placeholder="Enter your username"
																		/>
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
																				// formik.setFieldValue("city", "");
																				// formik.setFieldValue("region", e.target.value);
																				formik.setFieldValue("region", e.target.value);
																				formik.setFieldValue("city", e.target.value == "" ? "" : cities[e.target.value][0].value);
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
																	<Button className="flex-1" type="submit" disabled={!formik.isValid && isValidating} _loading={{ color: "white" }} isLoading={registrationLoading || formik.isSubmitting} loadingText="Registering" _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
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

																		<Button type="submit" _loading={{ color: "white" }} disabled={!formik.isValid && isValidating || formik.isSubmitting} loadingText="Please wait" isLoading={OTPSending} justifySelf={"end"} alignSelf={"end"} _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
																			<span className="text-white">Next</span>
																		</Button>
																	</>
																)}
															</div>
														</div>
													</div>
												</Form>
											);
										} // formik is the formik object
									}
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
