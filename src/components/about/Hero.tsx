import { Box, Button, Flex, Heading, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

import HeroImage from '../../assets/about-image.png'
import {  heroStrapLineAbout } from "../../constants/content";

export const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex 
      gap={isMobile ? "24" : "10"}
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isMobile ? "column" : "row"}
      mt={isMobile ? "10vh" : "0"}
      w={isMobile ? "75%" : "100%"}

    >
      <Flex 
        flexDirection="column" 
        justifyContent="center"
        gap="10"
        ml={isMobile ? "0" : "24"}
      >
        <Heading as="h1">About</Heading>
        <Text color="tones.darkGrey">{heroStrapLineAbout} </Text>

        <Link 
          as={ReactRouterLink} 
          color="tones.white" 
          to="/contact"
        >
          <Button
            bg="red.dark"
            borderRadius="25"
            pt="3" pb="3" pr="5" pl="5"
            w={isMobile ? "50%" : "40%"}
            color="tones.lightGrey"
            _hover={{ backgroundColor: "red.light" }}
          >
            Give John a call
          </Button>
        </Link>
      </Flex>

      <Flex   >
        <Image src={HeroImage} />
      </Flex>
    </Flex>
  )
}