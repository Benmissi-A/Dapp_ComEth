import { Box, Center, Circle, Input, HStack, Stack, Tooltip } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const StatsBody = () => {
    const [id, setId] = useState(0);

    const [proposal, setProposal] = useState({
      nbYes: 0,
      nbNo: 0,
      statuVote: null,
      createdAt: "",
      autor: "",
      title: "",
      receiver: "",
      amount: 0,
    });
    const comEth = useContext(ComEthContext);
  
    const handleOnChangeId = (e) => {
      try {
        setId(e.target.value);
      } catch (e) {
        console.log(e.error);
      }
    };
  
    const handleOnClickProposal = async () => {
      setProposal(proposal);
      try {
        let ide = await comEth.proposalById(id);
        const pr = ide.toString().split(",");
        console.log("ESSAIE ESSAIE ", proposal.statuVote);
        setProposal({
          ...proposal,
          nbYes: pr[0],
          nbNo: pr[1],
          statuVote: Number(pr[2]),
          createdAt: pr[3],
          autor: pr[4],
          title: pr[5],
          receiver: pr[6],
          amount: pr[7],
        });
        return pr;
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
        <>
        <Center>
            <Box
        backgroundColor="blackAlpha.200"
        ml={{ base: "1rem", sm: "2rem" }}
        mr={{ base: "1rem", sm: "2rem" }}
        rounded="md"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        p="2rem"
        width={{ sm: "90%", md: "75%", lg: "90%" }}
        maxW={{md:"35rem", lg:"40rem"}}
        
      >
        <Center>
          <Box
            p="7%"
            rounded="md"
            backgroundColor="#2ac9c7"
            fontWeight="bold"
            textAlign="center"
          >
            Dernière proposition votée / ou à voter
          </Box>
        </Center>
        <Box boxShadow="sm" m="4%" p="0.5%" pb="2%" rounded="md" backgroundColor="teal.500">
        <Box fontWeight="bold" textAlign="center" m="3%">
          Rechercher avec l'id de la proposition
        </Box>
        <Center>
          <Box mr="1rem" ml="1.5rem">
            ID
          </Box>
          <Tooltip rounded="md" label="L'id est donné après l'enregistrement d'une proposition, un pop-up apparaît lorsque la proposition a été enregistré dans la blockchain" fontSize="md">
          <Input
            w="40%"
            onChange={handleOnChangeId}
            mr="1rem"
            placeholder="0"
            position="static"
          />
          </Tooltip>
          <Circle
            backgroundColor="whiteAlpha.200"
            fontWeight="bold"
            p="0.5rem"
            w="40%"
            onClick={handleOnClickProposal}
            _hover={{ bg: "#21bdbf" }}
            _active={{ bg: "#8deaf2"}}
            aria-label="Chercher les informations d une proposition"
          >
            Rechercher
          </Circle>
        </Center>
        </Box>
        {proposal.statuVote === 0 ? (
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
            ) : proposal.statuVote === 1 ? (
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
            ) : proposal.statuVote === 2 ? (
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
            ) : ""}
        <Box
          ml={{ md: "2rem" }}
          fontSize={{base:"lg",md:"xl"}}
          backgroundColor="teal.300"
          textAlign="center"
          rounded="lg"
          fontWeight="bold"
          mb="2%"
        >
          {proposal.title}
        </Box>
        <Box
          p="1%"
          mt="1%"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="2%"
        >
          Auteur de la proposition : {proposal.autor}
        </Box>
        <Box
          p="1%"
          mt="1%"
          mb="4%"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
        >
          Destinataire : {proposal.receiver}
        </Box>
        <Stack direction="row" spacing="2rem">
        <Box
          p="1%"
          h="2rem"
          ml="20%"
          w="10rem"
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="2%"
        >
          Montant : {proposal.amount / 10 ** 18} ETH
        </Box>
        <Box
          p="1%"
          mt="1%"
          h="2rem"
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
        >
          ✔️ : {proposal.nbYes}
        </Box>
        <Box
          p="1%"
          mt="1%"
          h="2rem"
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
        >
          ❌ : {proposal.nbNo}
        </Box>
        </Stack>
      </Box>
      </Center>
        </>
    );
};

export default StatsBody;