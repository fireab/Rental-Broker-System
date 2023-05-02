import { MenuItem, Text } from "@chakra-ui/react";
import React from "react";

const NotificationNav = (props) => {
	return (
		<MenuItem className="">
			<div>
				<span className="font-bold text-sm text-[#2b6cb0]">{props.head}</span>
				<Text noOfLines={2} className="text-sm">
					{props.body}
				</Text>
			</div>
		</MenuItem>
	);
};

export default NotificationNav;
