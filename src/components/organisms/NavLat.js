import { Box } from "@chakra-ui/react";
import React from "react";
import InfoButton from "../atoms/InfoButton";
import Logo from "../atoms/Logo";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const NavLat = () => {
    return (
        <>
            <Box
                pos="absolute"
                top="0"
                h="100%"
                w={{ sm: "8rem", md: "9rem", lg: "10rem" }}
                boxShadow="dark-lg"
                backgroundColor="gray.900"
            >
                <Box pos="sticky" top="10" left="0">
                    <Box mb="13rem">
                    <Logo />
                    </Box>
                    <VoteButton />
                    <ProposButton />
                    <InfoButton />
                </Box>
            </Box>
        </>
    );
};

export default NavLat;
