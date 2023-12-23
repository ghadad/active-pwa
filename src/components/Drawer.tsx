import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  useEffect(() => {
    onClose(); // Close the navigation panel
  }, [pathname]);

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">PWA capabilities</DrawerHeader>
          <DrawerBody>
            <List>
              <ListItem>
                <NavLink to={"home"}>Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"file"}>File</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"camera"}>Camera</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"qr-code"}>QR scan</NavLink>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
