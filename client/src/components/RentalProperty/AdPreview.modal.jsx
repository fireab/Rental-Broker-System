import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

import ImageSlider from "./ImageSlider";

const AdPreviewModal = ({ isOpen, onClose,previewAdValues }) => {
	console.log("modal ",previewAdValues);
	return (
		<Modal
			onClose={onClose}
			// finalFocusRef={btnRef}
			isOpen={isOpen}
			// scrollBehavior={scrollBehavior}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<ImageSlider  />
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
					
					
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AdPreviewModal;
