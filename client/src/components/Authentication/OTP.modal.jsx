import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Icon, IconButton, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from "@chakra-ui/react";
import { Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import capitalize from "../../utils/Capitalize";
import { Refresh, RefreshDot } from "tabler-icons-react";

const OTPModal = (props) => {
	const [OTPLoading, setOTPLoding] = useState(false);

	const formik = useFormik({
		initialValues: {
			otp: "",
		},

		onSubmit: (values) => {
			if (values.otp.length !== 4) {
				formik.setErrors({ otp: "Invalid OTP" });
				return;
			}
			setOTPLoding(true);
			setTimeout(() => {
				console.log(values);
				if (values.otp !== "1234") {
					formik.setErrors({ otp: "Invalid OTP" });
					setOTPLoding(false);
					return;
				}
				setOTPLoding(false);
				props.onClose();
				props.setActiveStep(props.activeStep + 1);
			}, 2000);
		},
	});

	return (
		<>
			<Modal
				onClose={() => {
					formik.resetForm();
					props.onClose();
				}}
				isOpen={props.isOpen}
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent>
					<form onSubmit={formik.handleSubmit}>
						<ModalHeader>
							<span className="font-bold text-sm tracking-wider text-[#2b6cb0]">Enter the 4 digit sent to your mobile number</span>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl isInvalid={formik.errors.otp && formik.touched.otp} className="flex flex-col justify-center items-center">
								<FormLabel fontSize={"sm"}>
									<span className="text-sm whitespace-nowrap self-center">{capitalize("Enter the code sent to your phone")}</span>
								</FormLabel>
								<InputGroup className="flex justify-center items-center">
									<HStack >
										{formik.values.otp.length > 0 && <div></div>}
										<PinInput
											placeholder="😐"
											cursor="none"
											otp
											isInvalid={formik.errors.otp}
											size="lg"
											name="otp"
											type="alphanumeric"
											onChange={(e) => {
												formik.setFieldValue("otp", e);
											}}
											onComplete={(e) => {
												formik.setFieldValue("otp", e);
												formik.handleSubmit();
											}}
											manageFocus={true}
											value={formik.values.otp}
										>
											<PinInputField autoFocus />
											<PinInputField />
											<PinInputField />
											<PinInputField />
										</PinInput>
										
										{formik.values.otp.length > 0 && (
											<IconButton
												aria-label="Clear OTP"
												variant={"link"}
												onClick={() => {
													formik.resetForm();
													formik.setErrors({ otp: null });
												}}
											>
												<Refresh color="#2b6cb0" size={20} />
											</IconButton>
										)}
									</HStack>
								</InputGroup>
								<FormErrorMessage>
									<span className="text-sm whitespace-nowrap self-center">{formik.errors.otp}</span>
								</FormErrorMessage>
							</FormControl>
						</ModalBody>
						<ModalFooter>
							<Button
								// onClick={onClose}
								isLoading={OTPLoading}
								loadingText="Please Wait"
								_loading={{ color: "white", fontSize: "sm" }}
								type="submit"
								className="w-1/3"
								_hover={{ bgColor: "#2b6aa0" }}
								bgColor="#2b6cb0"
								size="lg"
								fontSize="md"
							>
								<span className="text-white">Continue</span>
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
};

export default OTPModal;
