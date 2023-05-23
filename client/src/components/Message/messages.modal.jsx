import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea } from "@chakra-ui/react";
import React from "react";
import { ChevronRight, Send } from "tabler-icons-react";

const MessagesModal = ({ isOpen, onClose }) => {
	const firstField = React.useRef();

	return (
		<Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
			{/* <DrawerOverlay /> */}
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader
          padding={".5rem"}
					className="
        bg-gradient-to-tr from-[#870bad] to-[#d60c60]
        "
					borderBottomWidth="1px"
				>
					<div className="flex items-center space-x-2">
						{/* icon button to return back */}
						{/* <IconButton aria-label="Back" icon={ */}
						<ChevronLeftIcon color={"white"} />
						{/* } mr="12px" /> */}
						<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
						<div className="flex flex-col text-white">
							<h1 className="text-base">Dilamo Wondimu</h1>
							<p className="text-sm">08:00:32</p>
						</div>
					</div>
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing="24px" bg={"blue"}>
						<Box bg={"red"} maxW={"80%"}>
							<p>sdsdfsd</p>
							
						</Box>
						<Box placeSelf={"end"} bg={"red"} MaxW={"80%"} >
							<p>
              sdsdfsd
              sdsdfsd
              </p>

						</Box>

					</Stack>
				</DrawerBody>

				<DrawerFooter  borderTopWidth="1px">
					<FormControl>
						<InputGroup>
							<Input ref={firstField} type="text" id="message" placeholder="Write a message" />
              <InputRightAddon
                bg={"#870bad"}
              >
                <ChevronRight color="white" />
              </InputRightAddon>
						</InputGroup>
					</FormControl>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default MessagesModal;