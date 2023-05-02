import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ChevronRight, Menu2, Search } from "tabler-icons-react";

const LoginButton = styled(NavLink)`
	border: none;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.06);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	position: relative;
	display: inline-block;

	&:hover {
		cursor: pointer;

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: #2b6cb0;
			animation: slide-in 0.3s ease-in-out forwards;
		}
	}

	@keyframes slide-in {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}
`;
const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${(props) => (props.isScrolled ? "60px" : "70px")};
	transition: all 0.3s ease-in-out;
	background-color: ${(props) => (props.isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent")};
	z-index: 1;
	backdrop-filter: ${(props) => (props.isScrolled ? "blur(3px) saturate(160%) contrast(45%) brightness(140%)" : "none")};
	box-shadow: ${(props) => (props.isScrolled ? "0 1px 1px rgba(0, 0, 0, 0.04),0 2px 2px rgba(0, 0, 0, 0.04),0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),0 16px 16px rgba(0, 0, 0, 0.04);" : "none")};
`;
const NavbarLinks = styled.ul`
	color: ${({ isScrolled }) => (isScrolled ? "#1e3982" : "white")};
	transition: color 0.5s ease-in-out;
`;

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 60) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Nav isScrolled={isScrolled} className="p-4 shadow-md lg:shadow-xl bottom-shadow">
			<div className="w-full h-full">
				<div className="h-full flex items-center justify-between">
					<div className="flex justify-between items-center md:w-2/5 w-1/2">
						<div>
							<a href="" className="font-bold p-3">
								<span>LOGO</span>
							</a>
						</div>
						<div className="hidden md:block">
							<form action="/search">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<Search size={18} strokeWidth={2} color={"black"} />
									</div>
									<input type="text" placeholder="Search" className="w-52 pl-10 pr-16 py-2 bg-gray-100/80 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/80 focus:border-transparent" />

									<button type="submit" className="absolute right-2.5 top-[0.5rem] text-sm tracking-wider font-bold text-[#2b6cb0]">
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="flex justify-center space-x-3">
						<div className="px-5 hidden md:block">
							<NavbarLinks className="flex h-full justify-center items-center space-x-4" isScrolled={isScrolled}>
								<li className="font-bold text-[13px] ">
									<StyledNavLink className="outline-none tracking-wide  px-2 py-1" to="/about">
										ABOUT
									</StyledNavLink>
								</li>
								<li className="font-bold text-[13px] ">
									<StyledNavLink className="outline-none tracking-wide px-2 py-1" to="/contact">
										CONTACT
									</StyledNavLink>
								</li>
							</NavbarLinks>
						</div>
						<div className="self-center">
							<LoginButton to="/login" className="text-xs tracking-wider whitespace-nowrap self-center font-extrabold inline-block bg-[#2b6cb0] shadow-lg px-5 py-2 outline-none text-white rounded-3xl">
								SING IN / SIGN UP
							</LoginButton>
						</div>
						<div className="md:hidden">
							<IconButton ref={btnRef} onClick={onOpen} className="" aria-label="Search database" borderColor={"#2b6cb0"} variant="outline" fontSize={25} icon={<HamburgerIcon />} />
							<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
								<DrawerOverlay />
								<DrawerContent>
									<DrawerCloseButton />
									<DrawerHeader>Menu</DrawerHeader>

									<DrawerBody>
										<form action="/search">
											<div className="flex space-x-1 ">
												<div className="relative  ">
													<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
														<Search size={18} strokeWidth={2} color={"black"} />
													</div>
													<input type="text" placeholder="Search" className="w-full pl-10 p-2 py-2 bg-gray-100/80 border border-gray-300 rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/80 focus:border-transparent" />
												</div>
												<button type="submit" className=" border p-2 border-[#2b6cb0] text-sm tracking-wider rounded-r font-bold text-[#2b6cb0]">
													Search
												</button>
											</div>
										</form>
										<div className="mt-4">
											<ul className="flex flex-col space-y-2">
												<li>
													<RouterLink to="profile">
														<div className="flex text-[#2b6cb0] text-sm items-center justify-between border p-2 rounded">
															<span>ABOUT</span>
															<ChevronRight />
														</div>
													</RouterLink>
												</li>
												<li>
													<RouterLink to="profile">
														<div className="flex text-[#2b6cb0] text-sm items-center justify-between border p-2 rounded">
															<span>CONTACT</span>
															<ChevronRight />
														</div>
													</RouterLink>
												</li>
											
											</ul>
										</div>
									</DrawerBody>

									<DrawerFooter>
									<RouterLink to="profile">
														<div className="flex text-[#2b6cb0] text-sm items-center justify-between  p-2 rounded">
															<span>HELP AND SUPPORT</span>
														</div>
													</RouterLink>
									</DrawerFooter>
								</DrawerContent>
							</Drawer>
						</div>
					</div>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
