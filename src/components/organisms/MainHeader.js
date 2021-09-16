import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import MobilNav from "../atoms/MobilNav";

const MainHeader = () => {

    return (
        <>
           
                <Box pos="sticky" w="100%" backgroundColor="teal.400">
                    <Stack direction="row">
                        <Box mr={{base:"50%", sm:"69%"}}>
                        <Logo />
                        </Box>
                        <Box display={{ base: "flex", sm: "flex", md: "none" }}>
                            <MobilNav />
                        </Box>
                    </Stack>
                </Box>
        </>
    );
};

export default MainHeader;
