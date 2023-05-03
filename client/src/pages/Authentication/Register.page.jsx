import { BellIcon, EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Select, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, Switch, useDisclosure, useSteps } from "@chakra-ui/react";
import { Field, useFormik } from "formik";
import React, { useState } from "react";
import { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeft, Password, Plus, User } from "tabler-icons-react";

const steps = [
	{ title: "Personal Information", description: ["Enter your personal information ", "to create an account"] },
	{ title: "Account Information", description: ["Choose a username and password", "to secure your account."] },
	{ title: "Personal Preferences", description: ["your rental preferences or personal preferences", "to personalize your experience. "] },
];

const LoginPage = () => {
	const inputRef = useRef(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [registrationLoading, setregistrationLoding] = useState(false);
	const [OTPLoading, setOTPLoding] = useState(false);
	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			phonenumber: "",
			username: "",
			password: "",
			confirmpassword: "",
			notificationpreferance: false,
			communicationpreferance: false,
			preferedlanguage: "",
		},
		onSubmit: (values) => {
			setregistrationLoding(true);
			setTimeout(() => {
				setregistrationLoding(false);
				alert(JSON.stringify(values, null, 2));
			}, 2000);
		},
	});

	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	});

	return (
		<main className="bg-[#EDF2F4]">
			<>
				<Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Modal Title</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<div className="flex justify-center items-center">
								<HStack>
									<PinInput otp size={"lg"}>
										<PinInputField ref={inputRef} />
										<PinInputField />
										<PinInputField />
										<PinInputField />
									</PinInput>
								</HStack>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								// onClick={onClose}
								isLoading={OTPLoading}
								loadingText="Verifying OTP"
								_loading={{ color: "white", fontSize: "sm" }}
								onClick={() => {
									setOTPLoding(true);
									setTimeout(() => {
										onClose();
										setActiveStep(activeStep + 1);
										setOTPLoding(false);
									}, 1000);
								}}
								className="w-1/3"
								_hover={{ bgColor: "#2b6aa0" }}
								bgColor="#2b6cb0"
								size="lg"
								fontSize="md"
							>
								<span className="text-white">Continue</span>
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
			<div className="fixed w-full">
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
			<div className="h-full w-full py-20  flex flex-col justify-evenly items-center ">
				<div className="w-2/3">
					<Stepper index={activeStep}>
						{steps.map((step, index) => (
							<Step
								key={index}
								onClick={() => {
									if (index < activeStep) {
										setActiveStep(index);
									}
								}}
							>
								<StepIndicator>
									<StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
								</StepIndicator>

								<Box flexShrink="0" className="">
									<StepTitle>{step.title}</StepTitle>
									<StepDescription fontSize={11}>{step.description[0]}</StepDescription>
									<StepDescription fontSize={11}>{step.description[1]}</StepDescription>
								</Box>

								<StepSeparator />
							</Step>
						))}
					</Stepper>
				</div>
				<div className=" w-1/2 pt-5">
					<div className="h-full flex flex-col justify-center items-center space-y-6">
						<div className=" text-center">
							<div className="md:hidden block p-4 ">
								<span className="bg-red-500 ">Logo</span>
							</div>
							<span className="font-bold text-2xl tracking-wider">Create an account</span>
						</div>
						<div className="w-full px-8 md:px-24">
							<form onSubmit={formik.handleSubmit}>
								<Stack spacing="6">
									{activeStep === 0 && (
										<>
											<FormControl id="firstname">
												<FormLabel>
													<span className="text-sm">First Name</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<User color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="First Name" type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>
											<FormControl id="email">
												<FormLabel>
													<span className="text-sm">Last Name</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<User color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Last Name" type="text" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>
											<FormControl id="email">
												<FormLabel>
													<span className="text-sm">Email address</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<EmailIcon color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>
											<FormControl id="phonenumber">
												<FormLabel>
													<span className="text-sm">PhoneNumber</span>
												</FormLabel>
												<InputGroup>
													<InputLeftAddon bgColor={"#2b6aa0"}>
														<span className="text-white font-bold">+251</span>
													</InputLeftAddon>
													<Input placeholder="Phone Number" type="tel" name="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
												{/* <InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<PhoneIcon color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Phone Number" type="text" name="phonenumber" value={formik.values.phonenumber} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup> */}
											</FormControl>
										</>
									)}
									{activeStep === 1 && (
										<>
											<FormControl id="username">
												<FormLabel>
													<span className="text-sm">Username</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<User color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Username" type="text" name="username" value={formik.values.username} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>
											<FormControl id="password">
												<FormLabel>
													<span className="text-sm">Password</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<Password color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>

											<FormControl id="confirmpassword">
												<FormLabel>
													<span className="text-sm">Confirm Password</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<Password color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Confirm Password" type="password" name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl>
										</>
									)}
									{activeStep === 2 && (
										<>
											<FormControl id="preferedlanguage">
												<FormLabel>
													<span className="text-sm">Prefered Language</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													{/* <Input placeholder="Prefered Language" type="text" name="preferedlanguage" value={formik.values.preferedlanguage} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} /> */}
													<Select placeholder="Select option">
														<option value="option1">Amheric</option>
														<option value="option2">English</option>
														<option value="option3">Afan Oromo</option>
													</Select>
												</InputGroup>
											</FormControl>
											<FormControl id="communicationpreferance">
												<FormLabel>
													<span className="text-sm">Prefered Communication</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													{/* <Input placeholder="Communication Preferance" type="text" name="communicationpreferance" value={formik.values.communicationpreferance} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} /> */}
													<Stack spacing={5} direction="col" justifyContent={"space-around"} className="w-full p-2 flex flex-col">
														<div className="flex space-x-2 items-center">
															<Switch id="email-alerts" />
															<div className="flex flex-col">
																<span>Email:</span>
																<span className="text-sm font-bold">{formik.values.email}</span>
															</div>
														</div>
														<div className="flex space-x-2 items-center">
															<Switch id="email-alerts" />
															<div className="flex flex-col">
																<span>Phone Number:</span>
																<span className="text-sm font-bold">{formik.values.phonenumber}</span>
															</div>
														</div>
													</Stack>
												</InputGroup>
											</FormControl>
											<FormControl id="currentcity">
												<FormLabel>
													<span className="text-sm">City</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													{/* <Input placeholder="Prefered Language" type="text" name="preferedlanguage" value={formik.values.preferedlanguage} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} /> */}
													<Select placeholder="Select option">
														<option value="option1">Hossana</option>
														<option value="option2">Addis Ababa</option>
														<option value="option3">Dukerm</option>
													</Select>
												</InputGroup>
											</FormControl>
											{/* <FormControl id="notificationpreferance">
												<FormLabel>
													<span className="text-sm">Notification Preferance</span>
												</FormLabel>
												<InputGroup className="bg-white/40">
													<InputLeftElement pointerEvents="none">
														<User color={"#2b6cb0"} />
													</InputLeftElement>
													<Input placeholder="Notification Preferance" type="text" name="notificationpreferance" value={formik.values.notificationpreferance} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
												</InputGroup>
											</FormControl> */}
										</>
									)}

									{activeStep === 2 ? (
										<Button onClick={() => {}} isLoading={registrationLoading} loadingText="Registering" type="submit" _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
											<span className="text-white">Register</span>
										</Button>
									) : (
										<div className="flex justify-between items-center">
											<div className="w-1/3">
												{activeStep > 0 && activeStep < 3 && (
													<Button variant={"outline"} onClick={() => setActiveStep(activeStep - 1)} className="w-full" borderColor={"#2b6aa0"} size="lg" fontSize="md">
														<span className="text-[#2b6aa0]">Back</span>
													</Button>
												)}
											</div>

											{activeStep === 1 ? (
												<Button
													isLoading={registrationLoading}
													loadingText="Sending Code"
													_loading={{ color: "white", fontSize: "sm" }}
													onClick={() => {
														setregistrationLoding(true);
														setTimeout(() => {
															onOpen();
															setregistrationLoding(false);
														}, 1000);
														setTimeout(() => {
															inputRef.current.focus();
														}, 100);
													}}
													className="w-1/3"
													_hover={{ bgColor: "#2b6aa0" }}
													bgColor="#2b6cb0"
													size="lg"
													fontSize="md"
												>
													<span className="text-white">Next</span>
												</Button>
											) : (
												<Button onClick={() => setActiveStep(activeStep + 1)} className="w-1/3" _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
													<span className="text-white">Next</span>
												</Button>
											)}
										</div>
									)}
								</Stack>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
