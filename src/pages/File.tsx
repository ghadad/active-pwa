import { Box, Text } from "@chakra-ui/react";
import FileService from "../services/FileService";
import { useEffect } from "react";
export default function File() {
  useEffect(() => {
    FileService.checkFileExists("E:\\", "settings.txt").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Box>
      <Text>Hello File</Text>
    </Box>
  );
}
