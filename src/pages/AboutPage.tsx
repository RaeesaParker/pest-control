import { Box, Flex, useBreakpointValue } from "@chakra-ui/react"
import {  NavBar } from "../components/common/NavBar"
import { Hero } from "../components/about/Hero";
import { Footer } from "../components/common/Footer";

export const AboutPage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return(
    <Flex 
      flexDirection="column" 
      alignItems="center"  
      minH="100vh"
    >
      <NavBar />
      
      <Flex 
        flexDirection="column" 
        minH="100%"
        alignItems="center"
        alignContent="flex-end"
        justifyContent="flex-end"
        flex={1}
      >
        <Hero />
      </Flex>
      <Footer />
    </Flex>
  )
}