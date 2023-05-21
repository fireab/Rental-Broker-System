import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';

const NotificationsModal = ({isOpen,onClose}) => {
    const firstField = React.useRef();
    return (
        <Drawer isOpen={isOpen} placement="right"  initialFocusRef={firstField} onClose={onClose} >
            {/* <DrawerOverlay /> */}
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody ref={firstField}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
}

export default NotificationsModal;
