import { Circle, Input, Container, Center, Box, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ComEthAddressContext } from "../../App";
import { useState, useContext } from "react";

const LoginBody = () => {
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("AddressComEth"))
  );
  const { setComEthAddress } = useContext(ComEthAddressContext);

  const handleClickLinkToHome = () => {
    setComEthAddress(address);
    localStorage.setItem("AddressComEth", JSON.stringify(address))
  };

  return (
    <>
      <Container>
        <Box
          boxShadow="lg"
          backgroundColor="blackAlpha.200"
          w={{ base: "99%", md: "35rem" }}
          mt={{ base: "2rem", md: "4rem" }}
          rounded="lg"
          pb="0.3rem"
        >
          <Tooltip rounded="md" label="Adresse Ethereum de votre communauté" fontSize="md">
          <Input
            boxShadow="lg"
            w={{ base: "90%", md: "32rem" }}
            placeholder="Addresse de votre ComEth"
            margin="1rem"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          </Tooltip>
          <Link to="/home">
            <Center>
              <Circle
                as="button"
                fontWeight="bold"
                w={{ base: "80%", lg: "24rem" }}
                backgroundColor="whiteAlpha.400"
                p="0.5em"
                margin="2rem"
                boxShadow="lg"
                onClick={handleClickLinkToHome}
                _hover={{ bg: "#0db5aa" }}
                _active={{ bg:"#8deaf2"}}
              >
                Rejoindre
              </Circle>
            </Center>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default LoginBody;
