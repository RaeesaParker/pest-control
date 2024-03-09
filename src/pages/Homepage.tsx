import { Box, useBreakpointValue } from "@chakra-ui/react"

import { MobileNavbar } from "../components/common/MobileNavbar";
import { NavBar } from "../components/common/NavBar"

export const Homepage = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box>
      <NavBar />
    </Box>
  )
}