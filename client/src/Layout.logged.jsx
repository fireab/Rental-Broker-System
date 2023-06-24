// import React from 'react';

import { useState } from "react";
import React from "react";
import { Button, Container, Link } from "react-floating-action-button";
import { BiPlus, BiUserPlus } from "react-icons/bi";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import NavbarLogged from "./components/common/Navbar.logged";

// const  Main = styled.main`
// 	margin-top: ${(props)=>(!props.isLogged? "0px":"0px" )};
// `
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
