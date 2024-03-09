import { Box, useBreakpointValue } from "@chakra-ui/react"

import { NavBar } from "../components/common/NavBar"
import { Hero } from "../components/homepage/Hero";

export const Homepage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box>
      <NavBar />
      <Box p="20">
        <Hero />
      </Box>
    </Box>
  )
}