import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
		red:{
			dark: "#9B2C2C",
      light: "#F56565",
			extraLight: "#f5baba",

		},
		tones:{
			white:"#ffffff",
			lightGrey:"#F5F5F5",
			darkGrey:"#718096",
			black:"#2D3748",
			darkBlack:"#181818"
		}
  },
  fonts: {
    heading: "'Work Sans', sans-serif",
    body: "'Inter', sans-serif",
  },
})