import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
		red:{
			dark: "#9B2C2C",
      light: "#F56565"

		},
		tones:{
			white:"#ffffff",
			darkGrey:"#718096",
			lightGrey:"#F5F5F5",
			black:"#2D3748"
		}
  },
  fonts: {
    heading: "'Work Sans', sans-serif",
    body: "'Inter', sans-serif",
  },
})