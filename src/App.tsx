import { Box, Text } from "@chakra-ui/react";
import router from "./routes/";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
