// import { HamburgerIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerCloseButton, DrawerContent, Flex, useDisclosure } from "@chakra-ui/react"

import { NavBar } from "./NavBar";

export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Button aria-label="menu" variant={'outline'}  onClick={onOpen}>
        <HamburgerIcon />
        </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <NavBar />
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}