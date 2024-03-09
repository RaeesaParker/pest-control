import { Flex, useBreakpointValue, Link, Image } from "@chakra-ui/react"
import logo from '../../assets/logo.png'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link as ReactRouterLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

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

      <Link  as={ReactRouterLink} to="/" >
        <Image src={logo} w={isMobile ? "30vw" : "7vw"}/>
      </Link>

      <Flex gap="14" alignItems="center">
        <Link>        
          <FontAwesomeIcon 
            icon={faFacebook} 
            fontSize="32px"
            color={isHovered ? "#F56565" : "#F5F5F5"}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          />   
        </Link>

        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          bg="red.light"
          borderRadius="25"
          pt="3" pb="3" pr="5" pl="5"
          _hover={{ fontWeight: "bold" }}
          to="/contact"
        >
          Get in touch
        </Link>   
      </Flex>
    </Flex>
  )
}