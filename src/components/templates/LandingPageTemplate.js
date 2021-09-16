import { Link } from "react-router-dom";
import { Heading, Circle, Center, Tooltip } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import FooterLandingPage from "../organisms/FooterLandingPage";

const LandingPageTemplate = () => {
  const [web3State, login] = useContext(Web3Context);
  console.log("me",web3State.account);


  const handleOnClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };
  return (
    <>
      <Center>
        <Heading>
          <Text
            textShadow="3px 3px #43A2F7"
            mt={{sm:"11rem", lg:"10rem"}}
            fontSize={{base:"73px",sm:"100px",lg:"100px"}}
            color="blue.700"
            margin={{base:"7rem",sm:"4rem"}}
          >
            ComEth
          </Text>
        </Heading>
      </Center>
      <Center marginBottom="3rem">
        <Text
          color={"gray.600"}
          maxW={"4xl"}
          ml={{sm:"0.5rem"}}
          mr={{sm:"0.5rem"}}
          mt={{lg:"2rem"}}
          mb={{lg:"1rem"}}
          textAlign="center"
          fontStyle="italic"
          fontWeight="bold"
          fontSize={{base:"22px",sm:"24px",lg:"25px"}}
        >
          Une nouvelle possibilité de création de communautés et de gestion de fonds partagés
        </Text>
      </Center>
      <Center>
      <Tooltip rounded="md" label="Si vous n'avez pas de communauté, créez en une !" fontSize="md">
        <Link to={web3State.isLogged ? "/create" : "/"}>
          <Circle
          as="button"
          backgroundColor="blue.500"
          fontWeight="bold"
          p="0.8rem"
          m={{base:"0.8rem",sm:"1rem"}}
            marginRight={{base:"0.5rem", md:"2rem"}}
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
            _hover= {{bg:"#42daf5"}}
              _selected={{bg:"#055c6b"}}
          >
            Créez votre ComEth
          </Circle>
        </Link>
      </Tooltip>
      <Tooltip rounded="md" label="Rejoignez votre communauté grace à son addresse" fontSize="md">
        <Link to={web3State.isLogged ? "/login" : "/"}>
          <Circle
          as="button"
          fontWeight="bold"
          p="1rem"
          m={{base:"0.8rem",sm:"1rem"}}
          backgroundColor="blue.500"
            marginLeft="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
              _hover= {{bg:"#42daf5"}}
              _selected={{bg:"#055c6b"}}
          >
            Rejoignez votre ComEth
          </Circle>
        </Link>
       </Tooltip>
      </Center>
      <FooterLandingPage />
    </>
  );
};
export default LandingPageTemplate;