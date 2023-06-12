import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Card, FormControl, Image, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React from "react";
import { ChevronRight, Stack } from "tabler-icons-react";

const Messages = () => {
	const [view, setView] = React.useState(false);
	return (
		<div className="">
			{!view ? (
				<div className="flex flex-col  space-y-2 h-full p-2">
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
			) : (
				<div className="flex flex-col h-screen overflow-scroll scrollbar-hidden relative">
					<div className="flex items-center space-x-2 bg-fuchsia-600 mb-2 sticky top-0 shadow-lg">
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
					<div className="flex flex-col">
						<div className="flex flex-col p-2">
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
						</div>
						<div className="fixed bottom-0 bg-white p-2 shadow w-full">
							<FormControl>
								<InputGroup>
									<Input type="text" id="message" placeholder="Write a message" />
									<InputRightAddon className="!bg-blue-600 cursor-pointer  ">
										<ChevronRight color="white" />
									</InputRightAddon>
								</InputGroup>
							</FormControl>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Messages;
