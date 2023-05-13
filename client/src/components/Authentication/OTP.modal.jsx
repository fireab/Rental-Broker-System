import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const OTPModal = (props) => {
	const inputRef = useRef(null);

	const [OTPLoading, setOTPLoding] = useState(false);

	return (
		<>
			<Modal  onClose={props.onClose} isOpen={props.isOpen} motionPreset="slideInBottom">
				<ModalOverlay />
				<ModalContent>
					
					<ModalHeader>
						<span className="font-bold text-sm tracking-wider text-[#2b6cb0]">Enter the 4 digit sent to your mobile number</span>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className="flex justify-center items-center">
							<HStack>
								<PinInput otp manageFocus autoFocus size={"lg"}>
									<PinInputField />
									<PinInputField />
									<PinInputField />
									<PinInputField
										onChange={(e) => {
											e.target.blur();
										}}
									/>
								</PinInput>
							</HStack>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button
							// onClick={onClose}
							isLoading={OTPLoading}
							loadingText="Please Wait"
							_loading={{ color: "white", fontSize: "sm" }}
							onClick={() => {
								setOTPLoding(true);
								setTimeout(() => {
									props.onClose();
									props.setActiveStep(props.activeStep + 1);
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
	);
};

export default OTPModal;
