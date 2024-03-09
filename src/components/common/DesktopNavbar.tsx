import { Box, Flex, Image, Link } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"
import logo from '../../assets/logo.png'

export const DesktopNavbar = () => {
  return (
    <Flex 
      bg="red.dark" 
      justifyContent="space-around" 
      alignItems="center" 
      pt="3" pb="3">

      <Box>
        <Link as={ReactRouterLink} to="/" >
          <Image src={logo} w="15%"/>
        </Link>
      </Box>

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
          to="./about"
          >About
        </Link>
        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          bg="red.light"
          borderRadius="25"
          pt="3" pb="3" pr="5" pl="5"
          _hover={{ fontWeight: "bold" }}
          to="./contact"
        >Get in touch</Link>
      </Flex>
    </Flex>
  )
}