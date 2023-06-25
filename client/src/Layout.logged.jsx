import React from "react";
import { Button, Container } from "react-floating-action-button";
import { BiPlus } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import Footer from "./components/common/Footer";
import NavbarLogged from "./components/common/Navbar.logged";

function LayoutLogged({ children }) {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<div className="bg-[#EDF2F4]">
			{location.pathname === "/rentals/CreateAd" ? null : (
				<Container className="md:hidden !bottom-5 z-30">
					<Button
						className="!bg-[#1E3A8A] text-white "
						tooltip="Create your rental post"
						onClick={() => {
							navigate("/rentals/CreateAd");
						}}
					>
						<BiPlus size={30} />
					</Button>
				</Container>
			)}
			<NavbarLogged />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
export default LayoutLogged;
