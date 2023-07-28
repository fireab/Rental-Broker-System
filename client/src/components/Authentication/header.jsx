import { Heading, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import logo from "./../../assets/Awashlogo.svg";

const Header = ({ title, stepTitle }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<div className=" px-2 m-0">
				<div className="font-bold inline-block">
					<Image className="w-10 md:w-14" src={logo} />
				</div>
			</div>
			<Heading size={"md"}>{title}</Heading>
			{}
			<motion.div key={stepTitle} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
				{stepTitle && <span className="font-bold text-xl text-[#2b6cb0] tracking-wider">{stepTitle}</span>}
			</motion.div>
			{}
		</div>
	);
};
export default Header;
