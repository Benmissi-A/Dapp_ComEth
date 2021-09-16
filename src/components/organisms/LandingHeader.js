import React from "react";
import { Box } from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";

const LandingHeader = () => {
    return (
        <>
        <Box right="0" left="0" w="100%" backgroundColor="blue.400"  boxShadow="dark-lg">
            <Box  pos="absolute" left="1rem" top="2">
            </Box>
            <ToggleModeDark/>
            </Box>
        </>
    );
};

export default LandingHeader;
