import { Flex, Heading, Text,   
  useBreakpointValue,} from "@chakra-ui/react"
import { contactTagline } from "../../constants/content"

export const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex 
      flexDirection="column"
      alignItems={isMobile ? "flex-start" : "center"}
      gap="10"
      w={isMobile ? "75%" : "100%"}
      mt={isMobile ? "10vh" : "0"}
      >
        <Flex 
          flexDirection="column"
          alignItems="center"
          gap="10"
          w={isMobile ? "100%" : "60%"}
        >
            <Heading as="h2" color="tones.darkBlack">Ready to Take Control of Your Space?</Heading>
            <Text textAlign="center">{contactTagline}</Text>
        </Flex>
        <Flex>

        </Flex>

      </Flex>
  )
} 