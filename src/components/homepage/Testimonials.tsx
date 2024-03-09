import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import quote from '../../assets/quote.png'
import { testimonials } from "../../constants/content"
export const Testimonals = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex flexDirection="column" alignItems="center" w="75%" gap="10">
        <Image src={quote} w={isMobile ? "10vw" : "3vw"}/>
      <Flex gap={isMobile ? "10" : "14"} flexDirection={isMobile ? "column" : "row"}>
          {testimonials.map((quote, index) => {
            return (
              <Card key={index}>
                <CardBody>
                  <Text>{quote.testimonial}</Text>
                </CardBody>
                <CardFooter fontWeight="bold">{quote.company}</CardFooter>
              </Card>
            )
          })}
        </Flex>
    </Flex>
  )
}