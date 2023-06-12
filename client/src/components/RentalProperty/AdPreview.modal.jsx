import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import PropertyCard from "./PropertyCard";

const AdPreviewModal = ({ isOpen, onClose, previewAdValues }) => {
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
					<PropertyCard preview ={true} />
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AdPreviewModal;
