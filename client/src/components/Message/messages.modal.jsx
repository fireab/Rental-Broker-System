import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, IconButton, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea } from "@chakra-ui/react";
import React from "react";
import { ChevronRight, Send } from "tabler-icons-react";

const MessagesModal = ({ isOpen, onClose, chatWindow, setChatWindow }) => {
	const firstField = React.useRef();
	const [view, setView] = React.useState(chatWindow !== true);
	
	return (
		<Drawer size={"sm"} isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
			{/* <DrawerOverlay /> */}
			{!view ? (
				<DrawerContent>
					<DrawerHeader padding={".5rem"} className="bg-gradient-to-tr from-[#870bad] to-[#d60c60]" borderBottomWidth="1px">
						<div className="flex items-center space-x-2 p-2">
							<h1 className="text-base text-white">Messages</h1>
						</div>
					</DrawerHeader>
					<DrawerBody className="!bg-[#EDF2F4] !p-2">
						<div className="flex flex-col space-y-2">
							<Card p={2}>
								<div
									onClick={() => {
										
										setView(true);
									}}
									className="flex cursor-pointer items-center space-x-2"
								>
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
							<Card p={2}>
								<div onClick={() => setView(true)} className="flex cursor-pointer items-center space-x-2">
									<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
									<div className="flex flex-col">
										<h1 className="text-base font-medium">Dilamo Wondimu</h1>
										<p className="text-xs">Hi there</p>
									</div>
								</div>
							</Card>
						</div>
					</DrawerBody>
				</DrawerContent>
			) : (
				<DrawerContent>
					<DrawerCloseButton color={"white"} />
					<DrawerHeader padding={".5rem"} className="bg-gradient-to-tr from-[#870bad] to-[#d60c60]" borderBottomWidth="1px">
						<div className="flex items-center space-x-2">
							<div
								onClick={() => {
									setView(false);
								}}
								className="p-2 cursor-pointer rounded-full"
							>
								<ChevronLeftIcon color={"white"} />
							</div>
							<Image boxSize="3.5rem" border={"1px"} borderColor={"white"} borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
							<div className="flex flex-col text-white">
								<h1 className="text-base">Dilamo Wondimu</h1>
								<p className="text-sm">08:00:32</p>
							</div>
						</div>
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing="24px">
							<div className="flex flex-col w-1/2  space-x-1">
								<div className="bg-blue-600 inline-block w-full p-2 rounded-lg rounded-tl-none">
									<p className="text-sm text-white">Hello, This is Dilamo</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2 space-y-1 items-end place-self-end">
								<div className="bg-blue-600 w-full  flex justify-end p-2 rounded-tr-none rounded-lg">
									<p className="text-sm text-white text-end">Hello Dilamo, This is Alaa. how are you doing?</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2  space-x-1">
								<div className="bg-blue-600 inline-block w-full p-2 rounded-lg rounded-tl-none">
									<p className="text-sm text-white">Hello, This is Dilamo</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2 space-y-1 items-end place-self-end">
								<div className="bg-blue-600 w-full  flex justify-end p-2 rounded-tr-none rounded-lg">
									<p className="text-sm text-white text-end">Hello Dilamo, This is Alaa. how are you doing?</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2  space-x-1">
								<div className="bg-blue-600 inline-block w-full p-2 rounded-lg rounded-tl-none">
									<p className="text-sm text-white">Hello, This is Dilamo</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2 space-y-1 items-end place-self-end">
								<div className="bg-blue-600 w-full  flex justify-end p-2 rounded-tr-none rounded-lg">
									<p className="text-sm text-white text-end">Hello Dilamo, This is Alaa. how are you doing?</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2  space-x-1">
								<div className="bg-blue-600 inline-block w-full p-2 rounded-lg rounded-tl-none">
									<p className="text-sm text-white">Hello, This is Dilamo</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2 space-y-1 items-end place-self-end">
								<div className="bg-blue-600 w-full  flex justify-end p-2 rounded-tr-none rounded-lg">
									<p className="text-sm text-white text-end">Hello Dilamo, This is Alaa. how are you doing?</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2  space-x-1">
								<div className="bg-blue-600 inline-block w-full p-2 rounded-lg rounded-tl-none">
									<p className="text-sm text-white">Hello, This is Dilamo</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
							<div className="flex flex-col w-1/2 space-y-1 items-end place-self-end">
								<div className="bg-blue-600 w-full  flex justify-end p-2 rounded-tr-none rounded-lg">
									<p className="text-sm text-white text-end">Hello Dilamo, This is Alaa. how are you doing?</p>
								</div>
								<span className="text-xs">02:12:20 June 24 2023</span>
							</div>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth="1px">
						<FormControl>
							<InputGroup>
								<Input ref={firstField} type="text" id="message" placeholder="Write a message" />
								<InputRightAddon className="!bg-blue-600 cursor-pointer  ">
									<ChevronRight color="white" />
								</InputRightAddon>
							</InputGroup>
						</FormControl>
					</DrawerFooter>
				</DrawerContent>
			)}
		</Drawer>
	);
};

export default MessagesModal;
