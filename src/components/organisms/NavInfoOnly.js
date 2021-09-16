import { Box } from "@chakra-ui/react";
import React from "react";
import StatsButton from "../atoms/StatsButton";
import BudgetButton from "../atoms/BudgetButton";
import PeopleButton from "../atoms/PeopleButton";
import VoteButton from "../atoms/VoteButton";
import ProposButton from "../atoms/ProposButton";
import InfoButton from "../atoms/InfoButton";
import Logo from "../atoms/Logo";

const NavInfoOnly = () => {
  return (
    <>
      <Box
        pos="absolute"
        display={{base:"none",sm:"none",md:" list-item"}}
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
          <StatsButton />
          <BudgetButton />
          <PeopleButton />
        </Box>
      </Box>
    </>
  );
};

export default NavInfoOnly;
