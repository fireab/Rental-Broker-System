import { BellIcon, ChatIcon, ChevronDownIcon, EditIcon, EmailIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text, useBoolean, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRight, Logout, Plus, Search } from "tabler-icons-react";
import MessageNav from "./../Message/message.nav";
import NotificationNav from "./../notification/notification.nav";

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isMobile = useBreakpointValue({ base: true, md: false });

	const handleAvatarClick = () => {
		if (isMobile) {
			setIsDrawerOpen(true);
		}
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
	};
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [viewportWidth]);
	return (
		<nav className="p-2 shadow-md lg:shadow-xl bottom-shadow">
			<div className="w-full h-full">
				<div className="h-full flex items-center justify-between">
					<div className="flex justify-between items-center md:w-2/5 w-1/2">
						<div>
							<a href="" className="font-bold p-3">
								<span>LOGO</span>
							</a>
						</div>
						<div className="hidden lg:block">
							<form action="/search">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<Search size={18} strokeWidth={3} color={"#2b6cb0"} />
									</div>
									<input type="text" placeholder="Search" className="w-54 pl-10 pr-16 py-2 bg-gray-100/80 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/80 focus:border-transparent" />

									<button type="submit" className="absolute right-2.5 top-[0.5rem] tracking-wider font-bold text-[#2b6cb0] text-sm">
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="flex justify-center space-x-3">
						<div className="flex px-2 items-center justify-center space-x-4">
							<div className="px-2 hidden md:block">
								<ul className="flex h-full justify-center items-center space-x-4 list-none">
									<li className="font-bold text-[13px] ">
										<a href="#" className="outline-none p-2">
											HELP
										</a>
									</li>
									<li className="font-bold ">
										<RouterLink to="/">
											<Button colorScheme="blue" variant={"outline"} fontWeight={"extrabold"} leftIcon={<Plus />}>
												<span className="text-sm">CREATE A LISTING</span>
											</Button>
										</RouterLink>
									</li>
								</ul>
							</div>
							<div className="h-full flex justify-center items-center ">
								{isMobile ? (
									<Link as={RouterLink} to="/user/messages">
										<IconButton colorScheme="blue" aria-label="Chat" variant="ghost" fontSize={25} rounded={"full"} icon={<BellIcon />} />
									</Link>
								) : (
									<Menu>
										<MenuButton as={IconButton} aria-label="Options" icon={<BellIcon fontSize={25} />} variant="ghost" colorScheme="blue" rounded={"full"} />
										<MenuList width={"sm"}>
											<NotificationNav
												head="New Rental Application Received"
												body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni, repellendus excepturi asperiores autem quidem fuga iste quas blanditiis minima exercitationem dignissimos fugit. Eius et consequatur voluptas expedita praesentium numquam?
"
											/>
										</MenuList>
									</Menu>
								)}
							</div>
							<div className="h-full flex justify-center items-center ">
								{isMobile ? (
									<Link as={RouterLink} to="/user/notifications">
										<IconButton
											colorScheme="blue"
											aria-label="Chat"
											//   size='lg'
											variant="ghost"
											fontSize={25}
											rounded={"full"}
											icon={<ChatIcon />}
										/>
									</Link>
								) : (
									<Menu>
										<MenuButton as={IconButton} aria-label="Options" icon={<ChatIcon fontSize={25} />} variant="ghost" colorScheme="blue" rounded={"full"} />
										<MenuList width={"sm"}>
											<MessageNav user="Dilamo Wondimu" message="This is the message" />
										</MenuList>
									</Menu>
								)}
							</div>
							<div>
								{!isMobile && (
									<Menu>
										<div className="flex justify-center items-center space-x-2">
											<MenuButton aria-label="User menu">
												<div className="flex justify-center items-center space-x-3">
													<h1 className="text-sm font-bold">Dilamo</h1>
													<Avatar name="Dan Abrahmov" aria-label="User menu" src="https://bit.ly/dan-abramov" onClick={() => setIsDrawerOpen(true)} />
												</div>
											</MenuButton>
										</div>
										<MenuList>
											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm font-semibold text-[#2b6cb0]">Profile</span>
												</RouterLink>
											</MenuItem>
											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm font-semibold text-[#2b6cb0]">Property Listings</span>
												</RouterLink>
											</MenuItem>
											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm font-semibold text-[#2b6cb0]">Favorite Listings</span>
												</RouterLink>
											</MenuItem>
											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm 	font-semibold text-[#2b6cb0]">Account Settings</span>
												</RouterLink>
											</MenuItem>
											<MenuDivider />

											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm font-semibold text-[#2b6cb0]">Help and Support</span>
												</RouterLink>
											</MenuItem>
											<MenuItem>
												<RouterLink to="/">
													<span className="text-sm font-semibold text-[#2b6cb0]">Logout</span>
												</RouterLink>
											</MenuItem>
										</MenuList>
									</Menu>
								)}
							</div>
						</div>
						<div className="">
							{isMobile && (
								<Box>
									{/* <IconButton aria-label="User menu" icon={<HamburgerIcon />} onClick={() => setIsDrawerOpen(true)} /> */}
									<div className="flex cursor-pointer justify-center items-center space-x-2" onClick={() => setIsDrawerOpen(true)}>
										<h1 className="text-sm font-bold">Dilamo</h1>
										<Avatar name="Dan Abrahmov" aria-label="User menu" src="https://bit.ly/dan-abramov" onClick={() => setIsDrawerOpen(true)} />
									</div>

									{/* <MenuButton as={IconButton} aria-label="User menu" icon={<Avatar />} /> */}

									<Box>
										<Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} size="sm">
											<DrawerOverlay />
											<DrawerContent>
												<DrawerCloseButton />
												<RouterLink to="/profile">
													<DrawerHeader onClick={handleCloseDrawer} className="flex items-center">
														<Image boxSize="8rem" borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
														<div>
															<span className="font-extrabold text-xl">Dilamo Wondimu</span>
															<p className="text-sm">This is something about me</p>
														</div>
													</DrawerHeader>
												</RouterLink>
												<DrawerBody className=" flex flex-col justify-between mb-2">
													<div>
														<ul className="space-y-2">
															<li>
																<RouterLink to="profile">
																	<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																		<span>Profile</span>
																		<ChevronRight />
																	</div>
																</RouterLink>
															</li>
															<li>
																<RouterLink to="profile">
																	<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																		<span>Property Listings</span>
																		<ChevronRight />
																	</div>
																</RouterLink>
															</li>
															<li>
																<RouterLink to="profile">
																	<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																		<span>Favorite Listings</span>
																		<ChevronRight />
																	</div>
																</RouterLink>
															</li>
															<li>
																<RouterLink to="profile">
																	<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																		<span>Account Settings</span>
																		<ChevronRight />
																	</div>
																</RouterLink>
															</li>
														</ul>
													</div>
													<div className="flex justify-between items-center">
														<RouterLink to="profile">
															<span className="text-[#2b6cb0]">Help and Support</span>
														</RouterLink>
														<RouterLink to="">
															<Button onClick={handleCloseDrawer}  leftIcon={<Logout />}  color={'red'} variant="solid">
																Logout
															</Button>
														</RouterLink>
													</div>
												</DrawerBody>
											</DrawerContent>
										</Drawer>
									</Box>
								</Box>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;