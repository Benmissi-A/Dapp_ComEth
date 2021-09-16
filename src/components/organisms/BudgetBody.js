import { Box, Stack, Button, Center } from "@chakra-ui/react";
import {  useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const BudgetBody = () => {
    const [balance, setGetBalance] = useState("0");
    const [invest, setInvest] = useState("0");
    const comEth = useContext(ComEthContext);
  
    const handleBalance = async () => {
      
      try {
        let balances = await comEth.getBalance();
        setGetBalance(balances.toString());
        console.log("ok", balances.toString())
      } catch (e) {
        console.log(e);
      }
    };
    const handleInvest = async () => {
      setInvest(invest);
      try {
        let invests = await comEth.getInvestmentBalance(comEth.address);
        setInvest(invests.toString());
        console.log("ok", invests.toString())
      } catch (e) {
        console.log(e);
      }
    };
    return (
        <>
        <Center>
            <Box
        boxShadow="lg"
        ml={{base:"1rem", sm: "2rem", lg:"7rem"}}
        mr={{base:"1rem", sm: "2rem", lg:"7rem"}}
        p="2rem"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        rounded="md"
        backgroundColor="blackAlpha.200"
        w={{ md: "55%", lg: "45%", xl:"30%" }}
      >
        <Box
          boxShadow="inner"
          textAlign="center"
          fontWeight="bold"
          backgroundColor="#2ac9c7"
          p="1rem"
          mb="2rem"
          rounded="lg"
        >
          Budgets de votre communauté
        </Box>
        <Stack direction="row">
        <Box
          boxShadow="inner"
          
          fontWeight="bold"
          fontSize={{base:"sm",sm:"md"}}
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          mb="2rem"
          rounded="lg"
        >
            Pot commun actuel : {balance / 10**18} ETH
        </Box>
        <Button
        onClick={handleBalance}
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
                _active={{ bg:"#8deaf2"}}
                fontSize={{base:"sm",sm:"md"}}
                m="10rem"
                position="static"
                aria-label="Chercher combien il reste dans le pot commun"
              >
                Chercher
              </Button>
        </Stack>
        <Stack direction="row">
        <Box
          boxShadow="inner"
          
          fontWeight="bold"
          fontSize={{base:"sm",sm:"md"}}
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          rounded="lg"
          s
        >
          Investissement total : {invest / 10**18} ETH
        </Box>
        <Button
        onClick={handleInvest}
                backgroundColor="whiteAlpha.300"
                fontSize={{base:"sm",sm:"md"}}
                _hover={{ bg: "#21bdbf" }}
                _active={{ bg:"#8deaf2"}}
                aria-label="Chercher combien d'ethers ont était investi dans votre communauté depuis sa création"
              >
                Chercher
              </Button>
      </Stack>
      </Box>
      </Center>
        </>
    );
};

export default BudgetBody;