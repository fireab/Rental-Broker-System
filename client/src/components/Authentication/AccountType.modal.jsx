import { CheckIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { RadioGroup } from "@headlessui/react";
import React from "react";

const AccountTypeModal = ({ plan, setPlan, isOpenModalAccountType, onCloseModalAccountType }) => {
	return (
		<Modal closeOnOverlayClick={false} closeOnEsc={false} isCentered size={"5xl"} isOpen={isOpenModalAccountType} onClose={onCloseModalAccountType}>
			<ModalOverlay backdropFilter="auto" backdropBlur="2px" />
			<ModalContent>
				<ModalHeader>
					<span>Choose an Account Type</span>
				</ModalHeader>
				<ModalBody>
					<RadioGroup value={plan} className="flex flex-col md:flex-row md:space-x-6 " onChange={setPlan}>
						{/* <RadioGroup.Label>Plan</RadioGroup.Label> */}

						<RadioGroup.Option  className="mb-2 md:mt-0 outline-none" value="Personal Account">
							{({ checked }) => (
								<div className={checked ? "shadow-2xl cursor-pointer bg-[#d60c60] to-black/90 rounded-lg p-6 scale-1 transition-all duration-150 " : "cursor-pointer bg-black/20 rounded-lg p-6 text-black  "}>
									<div className="flex justify-between items-center space-x-4 text-white ">
										<div className="">
											<RadioGroup.Label as="p"  className={`font-medium   ${checked ? "text-white" : "text-gray-900"}`}>
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
						<RadioGroup.Option className="mt-2 md:mt-0 outline-none" value="Enterprise Account">
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
						className={` w-96 text-white font-bold p-3  
							${plan == "" ? "!bg-gray-300 cursor-not-allowed text-black/60" : "!bg-[#d60c60] hover:bg-[#d60c60]"}
							`}
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
	);
};

export default AccountTypeModal;
