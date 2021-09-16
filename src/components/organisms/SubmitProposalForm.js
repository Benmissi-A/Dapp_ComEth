import {
  Box,
  Circle,
  Center,
  FormLabel,
  Input,
  Select,
  Tooltip
} from "@chakra-ui/react";
import React from "react";
import { ComEthContext } from "../../context/ComEthContext";
import { useContext, useEffect, useState } from "react";

//import { Web3Context } from "web3-hooks";
const ethers = require("ethers");
const SubmitProposalForm = () => {
  //   const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);

  // const [optionVote, setOptionVote] = useState([""]);;

  const [proposition, setProposition] = useState({
    // voteOption: optionVote,
    title: "",
    timeLimit: 0,
    target: "",
    sum: 0,
  });
  
  useEffect(() => {
    console.log(proposition);
  }, [proposition]);

  const handleChangeProposition = (e) => {
    try {
      // setOptionVote(optionVote)
      setProposition({ ...proposition, title: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeTimeLimit = (e) => {
    try {
      setProposition({ ...proposition, timeLimit: Number(e.target.value) });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAddressReceive = (e) => {
    try {
      setProposition({ ...proposition, target: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAmount = (e) => {
    try {
      setProposition({
        ...proposition,
        sum: ethers.utils.parseEther(e.target.value),
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmitAll = async () => {
    try {
      //fonction ComEth submitProposal a remplir grace au form voteOption,
      const {  title, timeLimit, target, sum } = proposition;
       await comEth.submitProposal(
        // voteOption,
        title,
        timeLimit,
        target,
        sum
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Center>
        <Box
          position="static"
          boxShadow="lg"
          backgroundColor="blackAlpha.200"
          padding="2rem"
          w={{ sm: "86%", md: "43rem", lg: "40rem" }}
          ml={{ sm: "0.5rem", md: "9rem" }}
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        >
          <FormLabel fontWeight="bold">
          <Box
              fontWeight="bold"
              w={{base:"90%", sm: "65%", md: "43%", lg: "44%" }}
              backgroundColor="teal.400"
              pl="2%"
              rounded="md"
              mb="2%"
            >
            Intitulé de la proposition : 
            </Box>
          </FormLabel>
          <Tooltip rounded="md" label="Saisissez clairement votre idée pour qu'elle soit correctement jugée" fontSize="md">
          <Input
            onChange={handleChangeProposition}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="Une salle de sport ?"
            margin="1rem"
            position="static"
          />
          </Tooltip>
          <FormLabel p="-0" fontWeight="bold">
          <Box
              fontWeight="bold"
              w={{base:"80%", sm: "73%", md: "46%", lg: "45%" }}
              backgroundColor="teal.400"
              pl="2%"
              rounded="md"
              mb="2%"
            >
            Choisir votre limite de temps :
            </Box>
          </FormLabel>
          <Select
            onChange={handleChangeTimeLimit}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            margin="1rem"
          >
            <option value="604800">1 semaine</option>
            <option value="1209600">2 semaines</option>
            <option value="1814400">3 semaines</option>
            <option value="2419200">4 semaines</option>
          </Select>

          <FormLabel fontWeight="bold">
          <Box
              fontWeight="bold"
              w={{base:"80%", sm: "24%", md: "17%", lg: "16%" }}
              backgroundColor="teal.400"
              pl="2%"
              rounded="md"
              mb="2%"
            >
            Montant :
            </Box>
            </FormLabel>
            <Tooltip rounded="md" label="Faites attention de bien mettre un point et non une virgule" fontSize="md">
          <Input
            onChange={handleChangeAmount}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="0.75"
            margin="1rem"
          />
          </Tooltip>
          <FormLabel fontWeight="bold">
          <Box
              fontWeight="bold"
              w={{base:"95%", sm: "79%", md: "50%", lg: "48%" }}
              backgroundColor="teal.400"
              pl="2%"
              rounded="md"
              mb="2%"
            >Destinataire du montant accordé :
            </Box>
            </FormLabel>
            <Tooltip rounded="md" label="Adresse Ethereum du destinataire du montant saisi" fontSize="md">
          <Input
            onChange={handleChangeAddressReceive}
            backgroundColor="teal.600"
            size="sm"
            boxShadow="lg"
            w={{ sm: "99%", md: "32rem" }}
            placeholder="0x00...."
            margin="1rem"
          />
          </Tooltip>
          <Center>
            <Circle
              as="button"
              backgroundColor="whiteAlpha.400"
              p="1rem"
              m="0.5rem"
              fontWeight="bold"
              onClick={handleSubmitAll}
              _hover={{ bg: "#21bdbf" }}
              aria-label="Valider la proposition"
            >
              Valider
            </Circle>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default SubmitProposalForm;
