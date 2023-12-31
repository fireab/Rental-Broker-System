import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ChevronRight, ClipboardList, Heart, Help, HomeQuestion, Logout, Plus, Report, Search, User, UserCheck, UserPlus } from "tabler-icons-react";

import { useUser } from "../../hooks/user";
import { useLogoutUserMutation } from "../../redux/api/authApi";
import capitalize from "../../utils/Capitalize";
import MessagesModal from "../Message/messages.modal";
import NotificationsModal from "../notification/notifications.modal";
import logo from "./../../assets/Awashlogo.svg";
import MessageNav from "./../Message/message.nav";
import NotificationNav from "./../notification/notification.nav";

const NavbarLogged = () => {
	const { getUserProfile, refetchUserProfile, isGetUserProfileLoading, isGetUserProfileFetching } = useUser("userprofile");
	useEffect(() => {
		refetchUserProfile();
	}, [refetchUserProfile]);
	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isMobile = useBreakpointValue({ base: true, md: false });
	const [logoutUser, { isLoading: LogoutLoading, isError: LogoutError, error: LogoutErrorData, isSuccess: LogoutSuccess }] = useLogoutUserMutation();
	const { isOpen: isMessageMenuOpen, onOpen: onMessageMenuOpen, onClose: onMessageMenuClose } = useDisclosure(false);
	const { isOpen: isNotificationMenuOpen, onOpen: onNotificationMenuOpen, onClose: onNotificationMenuClose } = useDisclosure(false);
	const [chatWindow, setChatWindow] = useState(false);
	const {
		isOpen: isMesssageModalOpen,
		onOpen: onMessageModalOpen,
		onClose: onMessageModalClose,
	} = useDisclosure({
		defaultIsOpen: false,
		onClose: () => {
			setChatWindow(false);
			onMessageMenuClose();
		},
		onOpen: (value) => {
			onMessageMenuClose();
			onMessageMenuOpen();
		},
	});
	const { isOpen: isNotificationModalOpen, onOpen: onNotificationModalOpen, onClose: onNotificationModalClose } = useDisclosure();
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
	const location = useLocation();
	useEffect(() => {
		if (LogoutSuccess) {
			window.location.href = "/login";
			navigate("/login");
		}
		if (LogoutError) {
			if (Array.isArray(LogoutErrorData.data.error)) {
				LogoutErrorData.data.error.forEach((el) =>
					toast.error(el.message, {
						position: "top-right",
					}),
				);
			} else {
				toast.error(LogoutErrorData.data.message, {
					position: "top-right",
				});
			}
		}
	}, [LogoutLoading]);
	const onLogoutHandler = async () => {
		await logoutUser()
			.unwrap()
			.then((res) => {
				navigate("/login");
				window.location.href = "/login";
			});
	};
	return (
		<>
			<MessagesModal chatWindow={chatWindow} isOpen={isMesssageModalOpen} onClose={onMessageModalClose} />
			<NotificationsModal isOpen={isNotificationModalOpen} onClose={onNotificationModalClose} />
			<nav className="p-2 sticky top-0 shadow-md lg:shadow-xl bottom-shadow border-b bg-[#EDF2F4] z-20">
				<div className="w-full h-full">
					<div className="h-full flex items-center justify-between px-2">
						<div className="flex justify-between items-center md:w-2/5 w-1/2">
							<RouterLink to="/rentals">
								<div className=" px-2 m-0">
									<div className="font-bold inline-block">
										<Image className="w-10 md:w-14" src={logo} />
									</div>
								</div>
							</RouterLink>
							{}
							<div className="">
								<Formik
									initialValues={{
										search: "",
									}}
									onSubmit={(values) => {
										if (values.search !== "") {
											navigate("/rentals/search", { state: { search: values.search } });
										}
									}}
								>
									{(formik) => (
										<Form>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<Search size={18} strokeWidth={3} color={"#2b6cb0"} />
												</div>
												<input type="text" onChange={formik.handleChange} value={formik.values.search} name="search" placeholder="Search" className="lg:w-54 w-56 pl-10 pr-16 py-2 bg-gray-100/80 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/80 focus:border-transparent" />
												<button type="submit" className="absolute right-2.5 top-[0.5rem] tracking-wider font-bold text-[#2b6cb0] text-sm">
													Search
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</div>
							{}
						</div>
						<div className="flex justify-center space-x-1">
							<div className="flex items-center justify-evenly space-x-2 z-20">
								<div className="px-2 hidden md:block">
									<ul className="flex h-full justify-center items-center space-x-4 list-none">
										<li className="font-bold text-[13px] ">
											<a href="#" className="outline-none p-2">
												HELP
											</a>
										</li>
										<li className="font-bold">
											<RouterLink to="/rentals/createad">
												<Button fontSize={12} variant={"outline"} fontWeight={"extrabold"} leftIcon={<Plus size={16} />}>
													<span className="text-xs font-bold">CREATE A LISTING</span>
												</Button>
											</RouterLink>
										</li>
									</ul>
								</div>
								<div className="h-full flex justify-center items-center  ">
									{!isMobile && (
										<Menu onOpen={onNotificationMenuOpen} isOpen={isNotificationMenuOpen} onClose={onNotificationMenuClose}>
											<MenuButton as={IconButton} aria-label="Options" icon={<BellIcon fontSize={20} />} variant="ghost" colorScheme="blue" rounded={"full"} />
											<MenuList width={"sm"}>
												<NotificationNav head="New Rental Application Received" body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni, repellendus excepturi asperiores autem quidem fuga iste quas blanditiis minima exercitationem dignissimos fugit. Eius et consequatur voluptas expedita praesentium numquam?" />
												<NotificationNav head="New Rental Application Received" body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni, repellendus excepturi asperiores autem quidem fuga iste quas blanditiis minima exercitationem dignissimos fugit. Eius et consequatur voluptas expedita praesentium numquam?" />
												<NotificationNav head="New Rental Application Received" body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni, repellendus excepturi asperiores autem quidem fuga iste quas blanditiis minima exercitationem dignissimos fugit. Eius et consequatur voluptas expedita praesentium numquam?" />
												<Link
													to="/"
													onClick={() => {
														onNotificationMenuClose();
														onNotificationModalOpen();
													}}
												>
													<div className="flex justify-center">
														<span className="text-sm font-semibold">See more</span>
													</div>
												</Link>
											</MenuList>
										</Menu>
									)}
								</div>
								<div className="h-full flex justify-center items-center ">
									{!isMobile && (
										<Menu onOpen={onMessageMenuOpen} isOpen={isMessageMenuOpen} onClose={onMessageMenuClose}>
											<MenuButton as={IconButton} aria-label="Options" icon={<ChatIcon fontSize={20} />} variant="ghost" colorScheme="blue" rounded={"full"} />
											<MenuList width={"sm"}>
												<MessageNav user="Dilamo Wondimu" message="This is the message" onMessageModalOpen={onMessageModalOpen} />
												<Link to="/" onClick={onMessageModalOpen}>
													<div className="flex justify-center">
														<span className="text-sm font-semibold">See more</span>
													</div>
												</Link>
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
														<h1 className="text-sm font-bold">{!isGetUserProfileFetching && !isGetUserProfileLoading && getUserProfile && getUserProfile.username.toUpperCase()}</h1>
														<Avatar name="Dan Abrahmov" aria-label="User menu" src="/api/user/profileimage" onClick={() => setIsDrawerOpen(true)} />
													</div>
												</MenuButton>
											</div>
											<MenuList>
												<Center>
													<Avatar name="Dan Abrahmov" size={"2xl"} src="/api/user/profileimage" />
												</Center>
												<Center>
													<span className="font-bold text-sm">{!isGetUserProfileFetching && !isGetUserProfileLoading && getUserProfile && capitalize(getUserProfile.username)}</span>
												</Center>
												<MenuDivider />
												<MenuItem as={RouterLink} to={"/user"}>
													<div className="flex items-center">
														<User color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Profile</span>
													</div>
												</MenuItem>
												<MenuItem as={RouterLink} to={"/rentals/saved"}>
													<div className="flex items-center">
														<ClipboardList color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Saved Listings</span>
													</div>
												</MenuItem>
												<MenuItem as={RouterLink} to={"/rentals/my"}>
													<div className="flex items-center">
														<Heart color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">My Listings</span>
													</div>
												</MenuItem>
												<MenuItem as={RouterLink} to={"/requests"}>
													<div className="flex items-center">
														<HomeQuestion color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Rental Request</span>
													</div>
												</MenuItem>
												<MenuDivider />
												<MenuItem as={RouterLink} to={"/following"}>
													<div className="flex items-center">
														<UserCheck color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Following</span>
													</div>
												</MenuItem>
												<MenuItem as={RouterLink} to={"/followers"}>
													<div className="flex items-center">
														<UserPlus color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Followers</span>
													</div>
												</MenuItem>
												<MenuDivider />
												<MenuItem as={RouterLink} to={"/report"}>
													<div className="flex items-center">
														<Report color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Report</span>
													</div>
												</MenuItem>
												<MenuItem as={RouterLink} to={"/help"}>
													<div className="flex items-center">
														<Help color="#2b6cb0" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-[#2b6cb0]">Help and Support</span>
													</div>
												</MenuItem>
												<MenuItem onClick={onLogoutHandler}>
													<div className="flex items-center">
														<Logout className="text-red-600" size={25} />
														<span className="text-sm pl-2 text-center w-full font-semibold text-red-600">Logout</span>
													</div>
												</MenuItem>
											</MenuList>
										</Menu>
									)}
								</div>
							</div>
							<div className="">
								{isMobile && (
									<Box>
										{}
										<div className="flex cursor-pointer justify-center items-center space-x-2" onClick={() => setIsDrawerOpen(true)}>
											<h1 className="text-sm hidden md:block font-bold">{!isGetUserProfileFetching && !isGetUserProfileLoading && getUserProfile && capitalize(getUserProfile.username)}</h1>
											<Avatar name="Dan Abrahmov" aria-label="User menu" src="/api/user/profileimage" />
										</div>
										<Box>
											<Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} size="sm">
												<DrawerOverlay />
												<DrawerContent>
													<DrawerCloseButton />
													<RouterLink to="/user/profile">
														<DrawerHeader onClick={handleCloseDrawer} className="flex items-center">
															<div className="flex space-x-4 items-center">
																<Avatar name="Dan Abrahmov" size={"2xl"} src="/api/user/profileimage" />
																<div>
																	<span className="font-extrabold text-xl">{!isGetUserProfileFetching && !isGetUserProfileLoading && getUserProfile && `${capitalize(getUserProfile.firstName)} ${capitalize(getUserProfile.lastName)}`}</span>
																</div>
															</div>
														</DrawerHeader>
													</RouterLink>
													<DrawerBody className=" flex flex-col justify-between mb-2">
														<div>
															<ul className="space-y-2" onClick={handleCloseDrawer}>
																<li>
																	<RouterLink to="/user">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Profile</span>
																			<div className="flex items-center col-span-4">
																				<User color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/messages">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Messages</span>
																			<div className="flex items-center col-span-4">
																				<ClipboardList color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/notifications">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Notifications</span>
																			<div className="flex items-center col-span-4">
																				<Heart color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/rentals/saved">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Saved Listings</span>
																			<div className="flex items-center col-span-4">
																				<HomeQuestion color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/rentals/my">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">My Listings</span>
																			<div className="flex items-center col-span-4">
																				<UserCheck color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/requests">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Rental Request</span>
																			<div className="flex items-center col-span-4">
																				<UserPlus color="#2b6cb0" size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/following">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Following</span>
																			<div className="flex items-center col-span-4">
																				<UserCheck size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/followers">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Followers</span>
																			<div className="flex items-center col-span-4">
																				<UserPlus size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
																<li>
																	<RouterLink to="/report">
																		<div className="flex text-[#2b6cb0] items-center justify-between border p-2 rounded">
																			<span className="text-sm">Report</span>
																			<div className="flex items-center col-span-4">
																				<Report size={20} />
																				<ChevronRight size={20} />
																			</div>
																		</div>
																	</RouterLink>
																</li>
															</ul>
														</div>
														<div className="flex justify-between items-center m-2">
															<RouterLink to="/help">
																<span className="text-[#2b6cb0]">Help and Support</span>
															</RouterLink>
															<RouterLink to="">
																<Button onClick={onLogoutHandler} leftIcon={<Logout />} color={"orange.600"} variant="outline">
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
		</>
	);
};
export default NavbarLogged;
