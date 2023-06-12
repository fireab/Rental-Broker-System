import { Card, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text } from "@chakra-ui/react";
import React from "react";
import NotificationNav from "./notification.nav";

const NotificationsModal = ({ isOpen, onClose}) => {
	const firstField = React.useRef();
	return (
		<Drawer clas size={"sm"} isOpen={isOpen} placement="left" initialFocusRef={firstField} onClose={onClose}>
			{/* <DrawerOverlay /> */}
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth="1px">Notifications</DrawerHeader>
				<DrawerBody className="!bg-[#EDF2F4]" ref={firstField}>
					<div className="flex flex-col space-y-2 my-2 ">
						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>

						<Card p={1} className="cursor-pointer">
							<span className="font-bold text-sm text-[#2b6cb0]">Lorem ipsum, dolor sinam.</span>
							<Text className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti repudiandae beatae consequuntur facilis, voluptatum corporis praesentium doloremque nulla asperiores!</Text>
						</Card>
					</div>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default NotificationsModal;
