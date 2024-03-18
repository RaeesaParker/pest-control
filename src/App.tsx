import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";

import { webRoutes } from "./routes";

function App() {

  const router = useMemo(() => {
		return createHashRouter([...webRoutes],);
  }, []);
  
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
