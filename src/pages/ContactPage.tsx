import {  Flex, useBreakpointValue } from "@chakra-ui/react"
import {  NavBar } from "../components/common/NavBar"
import { Footer } from "../components/common/Footer"
import { Hero } from "../components/contact/Hero";
import { ContactForm } from "../components/contact/ContactForm";

export const ContactPage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex 
      flexDirection="column" 
      alignItems="center"  
      minH="100vh"
    >
      <NavBar />
      <Flex 
        flexDirection="column" 
        gap={isMobile ? "5" : "14" }
        alignItems="center"
        justifyContent="center"
        flex={1}
        mb={isMobile ? "10vh" : "0"}
      >
        <Hero />
        <ContactForm />
      </Flex>
      <Footer />
    </Flex>
  )
}