import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Input,
  HStack,
  Circle,
  Stack,
  Tooltip
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";
const VoteBody = () => {
  const comEth = useContext(ComEthContext);
  const [id, setId] = useState("");
  const [proposal, setProposal] = useState({
    nbYes: 0,
    NbNo: 0,
    statuVote: null,
    createdAt: "",
    autor: "",
    title: "",
    receiver: "",
    amount: 0,
  });
  const [choice, setChoice] = useState("");

  const handleChangeId = (e) => {
    try {
      setId(e.target.value);
    } catch (e) {
      console.log(e.error);
    }
  };
  
  const handleChangeChoice = (e) => {
    try {
      setChoice(Number(e.target.value));
    } catch (e) {
      console.log(e.error);
    }
  };
  useEffect(()=>{
    if(handleChangeChoice){
      setChoice(choice)
      console.log( "choice", choice);
    }
  },[setChoice,choice])

  const handleClickSearchId = async () => {
    setProposal(proposal);
    try {
      let ide = await comEth.proposalById(id);
      const pr = ide.toString().split(",");
      setProposal({
        ...proposal,
        nbYes: pr[0],
        NbNo: pr[1],
        statuVote: pr[2],
        createdAt: pr[3],
        autor: pr[4],
        title: pr[5],
        receiver: pr[6],
        amount: pr[7],
      });
    } catch (e) {
      console.log(e.error);
    }
  };

  const handleClickVote = async () => {
    try {
      await comEth.vote(id, choice);
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Box
          ml={{ base: "5rem", lg: "12rem" }}
          fontWeight="bold"
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        >
          ID de la proposition
          <Tooltip rounded="md" label="L'id est donné après l'enregistrement d'une proposition, un pop-up apparaît lorsque la proposition a été enregistré dans la blockchain" fontSize="md">
          <Input
            w="15%"
            onChange={handleChangeId}
            placeholder="1"
            ml="3rem"
            mr="1rem"
            position="static"
          /></Tooltip>
          <Button
            onClick={handleClickSearchId}
            position="static"
            m={{ base: "1rem", sm: "2rem", md: "0" }}
          >
            Cherchez
          </Button>
        </Box>
      </Center>
      <Center>
        <Box
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
          ml={{ sm: "0rem", md: "4rem" }}
          boxShadow="lg"
          w={{ base: "20rem", sm: "32.5rem", md: "35rem", lg: "34rem" }}
          backgroundColor="blackAlpha.200"
          rounded="md"
        >
          <Stack direction="row" spacing="-7rem">
            <Box>
              <FormControl w={{ base: "17rem", sm: "32rem" }} margin="2rem">
                <FormLabel fontWeight="bold" fontSize="lg" margin="1rem">
                  <Box
                    fontSize={{ base: "lg", md: "xl" }}
                    backgroundColor="teal.300"
                    textAlign="center"
                    w={{ sm: "80%", md: "79%", lg: "80%" }}
                    rounded="lg"
                    fontWeight="bold"
                    mb="2%"
                    position="static"
                  >
                    {proposal.title}
                  </Box>
                </FormLabel>
                {proposal.statuVote === "0" ? (
                  <>
                    <HStack column="row" position="static">
                      <Circle
                        p="2%"
                        mt="2%"
                        mb="4%"
                        w="2%"
                        backgroundColor="orange"
                      ></Circle>{" "}
                      <Box mt="2%">Proposition toujours en cours de vote</Box>
                    </HStack>
                  </>
                ) : proposal.statuVote === "1" ? (
                  <>
                    <HStack column="row" position="static">
                      <Circle
                        p="2%"
                        mt="2%"
                        mb="4%"
                        w="2%"
                        backgroundColor="green"
                      ></Circle>{" "}
                      <Box mt="2%">Proposition votée et validée</Box>
                    </HStack>
                  </>
                ) : proposal.statuVote === "2" ? (
                  <>
                    <HStack column="row" position="static">
                      <Circle
                        p="2%"
                        mt="2%"
                        mb="4%"
                        w="2%"
                        backgroundColor="red"
                      ></Circle>{" "}
                      <Box mt="2%">Proposition votée et refusée</Box>
                    </HStack>
                  </>
                ) : (
                  ""
                )}
                <Box
                  fontWeight="bold"
                  w={{ sm: "80%", md: "79%", lg: "80%" }}
                  backgroundColor="teal.400"
                  rounded="md"
                  mb="2%"
                >
                  Auteur de la proposition : {proposal.autor}
                </Box>
                <Box
                  fontWeight="bold"
                  w={{ sm: "80%", md: "79%", lg: "80%" }}
                  backgroundColor="teal.400"
                  rounded="md"
                  mb="2%"
                >
                  Montant de la proposition : {proposal.amount / 10 ** 18} ETH
                </Box>
                {proposal.statuVote === "0" ? (
                  <Select
                    boxShadow="lg"
                    margin="1rem"
                    fontSize={{ base: "15px" }}
                    w={{ sm: "60%", md: "59%", lg: "80%" }}
                    placeholder="Selectionnez votre réponse"
                    onChange={handleChangeChoice}
                  >
                    <option value={"1"}>Oui</option>
                    <option value={"0"}>Non</option>
                  </Select>
                ) : (
                  ""
                )}
                <Box
                  fontWeight="bold"
                  w={{ sm: "80%", md: "79%", lg: "80%" }}
                  backgroundColor="teal.400"
                  rounded="md"
                  mb="2%"
                >
                  Destinataire des fonds de la proposition :
                </Box>
                <Box>{proposal.receiver}</Box>
                {proposal.statuVote === "0" ? (
                  <Center>
                    <Button
                      onClick={handleClickVote}
                      boxShadow="lg"
                      margin="2re"
                      _hover={{ bg: "#21bdbf" }}
                      aria-label="Voter"
                    >
                      Votez
                    </Button>
                  </Center>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            <Stack direction="column">
              {proposal.nbYes === 0 ? (
                ""
              ) : (
                <Box mt="2rem">✔️ : {proposal.nbYes}</Box>
              )}
              {proposal.NbNo === 0 ? (
                ""
              ) : (
                <Box mt="2rem">❌ : {proposal.NbNo}</Box>
              )}
            </Stack>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default VoteBody;
