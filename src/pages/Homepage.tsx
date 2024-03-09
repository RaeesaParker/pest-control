import { Flex, useBreakpointValue } from "@chakra-ui/react"

import { NavBar } from "../components/common/NavBar"
import { CallToAction } from "../components/homepage/CallToAction";
import { Details } from "../components/homepage/Details";
import { Hero } from "../components/homepage/Hero";
import { Testimonals } from "../components/homepage/Testimonials";
import { Footer } from "../components/common/Footer";

export const Homepage = () => {
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
        <Details />
      </Flex>
      <CallToAction />
      <Testimonals />
      <Footer />
    </Flex>
  )
}