import React from "react";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import VoteTemplate from "../templates/VoteTemplate";
import UseEffect from "../atoms/UseEffect";

const Vote = () => {

  return (
    <>
      <Box minH="100vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <NavLat />
        <VoteTemplate />
        <UseEffect />
      </Box>
    </>)
}
export default Vote