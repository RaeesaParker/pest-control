import { Box, Flex, useBreakpointValue } from "@chakra-ui/react"
import {  NavBar } from "../components/common/NavBar"
import { Hero } from "../components/about/Hero"
import { Footer } from "../components/common/Footer"

export const ContactPage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex 
      flexDirection="column" 
      alignItems="center"  
      gap= {isMobile ? "10vh" : "15vh"}
    >
      <NavBar />
      
      <Flex 
        w="75%" 
        flexDirection="column" 
        gap= {isMobile ? "10vh" : "20vh"}
        alignItems="center"
      >
        <Hero />
      </Flex>
      <Footer />
    </Flex>
  )
}