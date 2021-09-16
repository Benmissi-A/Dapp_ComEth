import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";
import AddUserAndPay from "../atoms/AddUserAndPay";

const HomeBody = () => {
  return (
    <>
      <AddUserAndPay />
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing="40px"
        mr={{ base: "1rem", sm: "3rem" }}
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "6rem" }}
        ml={{ base: "1rem", sm: "3rem", md: "10rem", lg: "12rem" }}
      >
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height="90%"
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ base: "25%", sm: "25%" }}
          >
            Venez voter les propositions déjà suggérées par votre groupe ComEth
          </Box>
          <VoteButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height="90%"
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ base: "25%", sm: "37%", lg: "25%" }}
          >
            Soumettez vos propositions à faire voter à votre groupe
          </Box>{" "}
          <ProposButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height={{ base: "95%", lg: "90%" }}
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ base: "25%", sm: "23%", lg: "17%" }}
          >
            Retrouvez ici vos informations, statistiques et propositions déjà votées
          </Box>
          <InfoButton />
        </Box>
      </SimpleGrid>
    </>
  );
};
export default HomeBody;
