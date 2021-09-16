import React from "react"
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import InfoTemplate from "../templates/InfoTemplate";
import UseEffect from "../atoms/UseEffect";


const Info = () => {

  
  return (
    <>
      <Box minH="100vh" maxH="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <NavInfoOnly />
        <InfoTemplate />
        <UseEffect />
      </Box>
    </>
  );
};
export default Info;
