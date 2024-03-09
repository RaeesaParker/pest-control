import { Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

import logo from '../../assets/logo.png'

export const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });


  return (
    <Flex 
      w="100%"
      bg="red.dark" 
      justifyContent="space-around" 
      alignItems="center" 
      pt="3" pb="3"
      gap="7"
      flexDirection = {isMobile ? "column" : "row"}
      >
      <Flex   >
        <Link  as={ReactRouterLink} to="/" >
          <Image src={logo} w={isMobile ? "30vw" : "10vw"}/>
        </Link>
      </Flex>

      <Flex gap="10">
        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          p="3"
          _hover={{ fontWeight: "bold" }}
          to="/"
          >Home
        </Link>
        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          p="3"
          _hover={{ fontWeight: "bold" }}
          to="/about"
          >About
        </Link>
        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          bg="red.light"
          borderRadius="25"
          pt="3" pb="3" pr="5" pl="5"
          _hover={{ fontWeight: "bold" }}
          to="/contact"
        >Get in touch</Link>
      </Flex>
    </Flex>
  )
}