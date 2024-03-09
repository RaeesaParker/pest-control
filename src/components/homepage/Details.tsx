import { Divider, Flex, Heading, Text } from "@chakra-ui/react"

import { detailsArray } from "../../constants/content"

export const Details = () => {
  return (
    <Flex gap="10" flexDirection="column">
      {detailsArray.map((detail, index) => {
        return (
          <Flex gap="10" flexDirection="column" key={index}>
          <Heading as="h2">{detail.title}</Heading>
          <Text color="tones.darkBlack">{detail.content}</Text>
          <Divider mt="7" mb="5" border="1px solid tones.darkGrey"/>
        </Flex>
        )
      })}
    </Flex>
  )
}