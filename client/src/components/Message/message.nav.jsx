import { Image, MenuItem } from "@chakra-ui/react";
import React from "react";

const MessageNav = (props) => {
	return (
		<MenuItem minH="48px" className="flex items-center space-x-3">
			<Image boxSize="3rem" borderRadius="full" src="https://placekitten.com/100/100" alt="Fluffybuns the destroyer" mr="12px" />
			<div className="flex flex-col">
				<span className="font-bold text-[#2b6cb0] text-sm">{props.user}</span>
				<span className="font-normal text-sm">{props.message}</span>
			</div>
		</MenuItem>
	);
};

export default MessageNav;
