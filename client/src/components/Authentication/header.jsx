import { Heading } from "@chakra-ui/react";
import React from "react";

const Header = ({ title, stepTitle }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<div className="block p-4 ">
				<span className="bg-red-500 ">Logo</span>
			</div>

			<Heading size={"md"}>{title}</Heading>
			{stepTitle && <span className="font-bold text-xl text-[#2b6cb0] tracking-wider">{stepTitle}</span>}
		</div>
	);
};

export default Header;
