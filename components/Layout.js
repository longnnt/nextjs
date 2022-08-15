import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box p={"10px 80px"}>
      <Header />
      {children}
    </Box>
  );
}
