import { Divider, Flex, Heading, Text } from "@chakra-ui/react"

import { detailOne, detailThree, detailTwo, headingOne, headingThree, headingTwo } from "../../constants/content"

export const Details = () => {
  return (
    <Flex gap="10" flexDirection="column">
      <Flex gap="10" flexDirection="column">
        <Heading as="h2">{headingOne}</Heading>
        <Text color="tones.darkBlack">{detailOne}</Text>
        <Divider mt="7" mb="5" border="1px solid tones.darkGrey"/>
      </Flex>
      <Flex gap="10" flexDirection="column">
        <Heading as="h2">{headingTwo}</Heading>
        <Text color="tones.darkBlack">{detailTwo}</Text>
        <Divider mt="7" mb="5" border="1px solid tones.darkGrey"/>
      </Flex>
      <Flex gap="10" flexDirection="column">
        <Heading as="h2">{headingThree}</Heading>
        <Text color="tones.darkBlack">{detailThree}</Text>
        <Divider mt="7" mb="5" border="1px solid tones.darkGrey"/>
      </Flex>
    </Flex>
  )
}