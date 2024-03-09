import { Box, Button, Flex, Heading, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

import HeroImage from '../../assets/homepage-image.png'
import { heroStrapLine } from "../../constants/content";

export const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex 
      gap="10"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isMobile ? "column-reverse" : "row"}

    >
      <Flex 
        flexDirection="column" 
        justifyContent="center"
        gap="10"
      >
        <Heading as="h1">JL Pest Control</Heading>
        <Text color="tones.darkGrey">{heroStrapLine} </Text>
        <Button
          bg="red.light"
          borderRadius="25"
          pt="3" pb="3" pr="5" pl="5"
          w="30%"
          _hover={{ backgroundColor: "red.dark" }}
        >
        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          _hover={{ fontWeight: "bold" }}
          to="/contact"
        >Get in touch</Link>
        </Button>
      </Flex>

      <Box>
        <Image src={HeroImage} w="75vw"/>
      </Box>
    </Flex>
  )
}