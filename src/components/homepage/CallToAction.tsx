import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

import { callToActionHeading, callToActionText } from "../../constants/content"

export const CallToAction = () => {

  return ( 
    <Flex 
      w="100%" 
      gap="10"
      bg="red.dark"
      flexDirection="column"
      alignItems="center"
      pt="10" pb="10"

    >
      <Heading 
        color="tones.lightGrey" 
        as="h3"
      >
        {callToActionHeading}
      </Heading>
      <Text 
        color="tones.lightGrey" 
        w="60%" 
        textAlign="center"      
      >
        {callToActionText}
      </Text>
      <Button
          bg="tones.lightGrey"
          borderRadius="25"
          pt="3" pb="3" pr="5" pl="5"
          // w={isMobile ? "50%" : "20%"}
          _hover={{ backgroundColor: "red.extraLight"}}
        >
        <Link 
          as={ReactRouterLink} 
          color="red.dark" 
          to="/contact"
          _hover={{ backgroundColor: "red.extraLight"}}
        >Contact us for a consultation and let's make your space pest-free!</Link>
        </Button>
    </Flex>
  )
}