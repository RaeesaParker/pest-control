import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { theme } from "./constants/theme"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
)