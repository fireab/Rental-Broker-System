// import React from 'react';

import { useState } from "react";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import NavbarLogged from "./components/common/Navbar.logged";
import styled from "styled-components";

// const  Main = styled.main`
// 	margin-top: ${(props)=>(!props.isLogged? "0px":"0px" )};
// `
function Layout({ children }) {
	const [logged, setlogged] = useState(false);
	return (
		<div>
			{logged ? <NavbarLogged /> : <Navbar />}
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
