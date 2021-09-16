import React from "react";
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import BudgetTemplate from "../templates/BudgetTemplate";
import UseEffect from "../atoms/UseEffect";


const Budget = () => {
  
  return (
    <>
      <Box minH="100vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <NavInfoOnly />
        <BudgetTemplate />
        <UseEffect />
      </Box>
    </>
  );
};
export default Budget;
