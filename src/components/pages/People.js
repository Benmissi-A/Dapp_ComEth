import React from "react";
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import PeopleTemplate from "../templates/PeopleTemplate";
import UseEffect from "../atoms/UseEffect";

const People = () => {

  return (
    <>
      <Box minH="100vh" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <NavInfoOnly />
        <PeopleTemplate />
        <UseEffect />
      </Box>
    </>
  );
};
export default People;
