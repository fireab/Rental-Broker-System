// import React from 'react';

import { useState } from "react";
import styled from "styled-components";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import NavbarLogged from "./components/common/Navbar.logged";

// const  Main = styled.main`
// 	margin-top: ${(props)=>(!props.isLogged? "0px":"0px" )};
// `
function LayoutLogged({ children }) {
	return (
		<div className="bg-[#EDF2F4]">
			<NavbarLogged />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default LayoutLogged;