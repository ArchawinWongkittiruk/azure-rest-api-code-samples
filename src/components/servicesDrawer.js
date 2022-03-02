import React, { useRef } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const ServicesDrawer = ({ children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef();

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={onOpen}
        leftIcon={<HamburgerIcon />}
        size='sm'
        variant='outline'
        {...props}
      >
        Services
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Services</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ServicesDrawer;
