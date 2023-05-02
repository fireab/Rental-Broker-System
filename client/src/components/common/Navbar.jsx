import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Search } from "tabler-icons-react";

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${(props) => (props.isScrolled ? "60px" : "70px")};
	transition: all 0.6s ease-in-out;
	background-color: ${(props) => (props.isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent")};
	z-index: 1;
	backdrop-filter: ${(props) => (props.isScrolled ? "blur(3px) saturate(160%) contrast(45%) brightness(140%)" : "none")};
	box-shadow: ${(props) => (props.isScrolled ? "0 1px 1px rgba(0, 0, 0, 0.04),0 2px 2px rgba(0, 0, 0, 0.04),0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),0 16px 16px rgba(0, 0, 0, 0.04);" : "none")};
`;
const ScrollingUl = styled.ul`
	color: ${({ isScrolled }) => (isScrolled ? "#1e3982" : "white")};
	transition: color 0.5s ease-in-out;
`;

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
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
				<div className="h-full flex items-center justify-between pl-64">
					<div>
						<form action="#">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Search size={18} strokeWidth={2} color={"black"} />
								</div>
								<input type="text" placeholder="Search" className="px-4 pl-10 py-2 bg-gray-100/80 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/80 focus:border-transparent" />

								<button type="submit" className="absolute right-2.5 top-[0.5rem] text-sm">
									Search
								</button>
							</div>
						</form>
					</div>
					<div className="flex">
						<div className="px-5">
							<ScrollingUl className="flex h-full justify-center items-center space-x-4" isScrolled={isScrolled}>
								<li className="font-bold text-[13px] ">
									<a href="#" className="outline-none">
										ABOUT
									</a>
								</li>
								<li className="font-bold text-[13px]">
									<a href="#" className="outline-none">
										CONTACT
									</a>
								</li>
							</ScrollingUl>
						</div>
						<div>
							<div>
								<a href="#" className="text-xs font-extrabold inline-block bg-blue-600 shadow-lg px-5 py-2 outline-none text-white rounded-3xl">
									LOGIN / SIGNUP
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
