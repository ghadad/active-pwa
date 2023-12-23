import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
// components

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(18, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 18, lg: 3, xl: 2 }}
        bg="gray.500"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Drawer />
      </GridItem>

      {/* main content & navbar */}
      <GridItem as="main" colSpan={{ base: 18, lg: 15, xl: 16 }} p="10px">
        <Outlet />
      </GridItem>
    </Grid>
  );
}
