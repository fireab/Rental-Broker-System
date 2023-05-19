import { Heading } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Header = ({ title, stepTitle }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<div className="block p-4 ">
				<span className="bg-red-500 ">Logo</span>
			</div>

			<Heading size={"md"}>{title}</Heading>
			{/* <AnimatePresence mode="wait"> */}
				<motion.div key={stepTitle} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
					{stepTitle && <span className="font-bold text-xl text-[#2b6cb0] tracking-wider">{stepTitle}</span>}
				</motion.div>
			{/* </AnimatePresence> */}
		</div>
	);
};

export default Header;
