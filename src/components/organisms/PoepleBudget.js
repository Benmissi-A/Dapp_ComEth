import {
  Box,
  Center,
  Circle,
  Input,
  Button,
  Stack,
  Tooltip,
  useToast
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const PoepleBody = () => {
  const [getUsersAct, setGetUserAct] = useState([]);
  const [addresse, setAddresse] = useState("");
  const comEth = useContext(ComEthContext);
  const toast = useToast();

  const handleChangeAddress = (e) => {
    try {
      setAddresse(e.target.value);
    } catch (e) {
      console.log(e.error);
    }
  };

  const handlClickGetUser = async () => {
    try {
      const get = await comEth.getUser(addresse);
      setGetUserAct(get);
    } catch (e) {
      console.log(e.error);
    }
  };
  const handleClickDesac = async () => {
    try {
      const tx = await comEth.toggleIsActive();
          tx.wait()
          toast({
            title: "Vous venez de vous désactiver",
            description: "Veuillez attendre quelques minutes que la blockchain prenne en compte votre demande",
            status: "warning",
            fontWeight: "bold",
            duration: 5000,
            isClosable: true,
          })
    } catch (e) {
      console.log(e.error);
    }
  };
  
  const handleClickQuit = async () => {
    try {
      const tx =await comEth.quitComEth();
      tx.wait()
      toast({
        title: "Vous venez de quitter votre communauté",
        description: "Si vous n'êtes pas banni, vous recevrez un pop-up validant de la blockchain",
        status: "warning",
        fontWeight: "bold",
        duration: 5000,
        isClosable: true,
      })
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Box
        rounded="md"
        boxShadow="lg"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        ml={{ sm: "3rem", md: "11rem", lg: "19rem" }}
        w={{ sm: "80%", md: "75%", lg: "40%" }}
        backgroundColor="blackAlpha.200"
        p="1rem"
      >
        <Center>
          <Box
            backgroundColor="#2ac9c7"
            rounded="md"
            p="1rem"
            fontWeight="bold"
            m="1rem"
          >
            Activités au sein de la ComEth
          </Box>
        </Center>
        <Box>
          <Box ml={{ md: "1rem" }}>
            <Box padding="1rem" fontWeight="black">
              Voir qui est Actif :
            </Box>
            <Stack direction="row">
            <Tooltip rounded="md" label="Addresse Ethereum" fontSize="md">
              <Input
                onChange={handleChangeAddress}
                backgroundColor="teal.600"
                placeholder="0x00000..."
              />
              </Tooltip>
              <Button
                onClick={handlClickGetUser}
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
                aria-label="Chercher les informations d'une addresse"
              >
                Chercher
              </Button>
            </Stack>
              <Box rounded="md" backgroundColor="teal.400" mt="1rem" mr="3rem" ml="3rem">
            <Stack direction="row">
              <Box ml="9%">
                {getUsersAct.isActive === true ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="green"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    Est actif
                  </Circle>
                ) : getUsersAct.isActive === false ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="red.600"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    N'est pas actif
                  </Circle>
                ) : (
                  ""
                )}
                {getUsersAct.hasPaid === true ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="green"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    Est régularisé
                  </Circle>
                ) : getUsersAct.hasPaid === false ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="red.600"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    N'est pas régularisé
                  </Circle>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {getUsersAct.exists === true ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="green"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    Est un utilisateur de cette ComEth
                  </Circle>
                ) : getUsersAct.exists === false ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="red.600"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    N'est pas un utilisateur de cette ComEth
                  </Circle>
                ) : (
                  ""
                )}
                {getUsersAct.isBanned === true ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="red.600"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    Est banni
                  </Circle>
                ) : getUsersAct.isBanned === false ? (
                  <Circle
                    m="0.5rem"
                    backgroundColor="green"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAlign="center"
                    p="1%"
                  >
                    N'est pas pas banni
                  </Circle>
                ) : (
                  ""
                )}
              </Box>
            </Stack>
              </Box>
            <Stack direction="row" mt="2rem" spacing="20%">
              <Tooltip
                rounded="md"
                label="Ceci entraine l'inactivité du compte, aucuns frais ne seront cumulés pour l'adhésion mensuelle"
                fontSize="md"
              >
                <Button onClick={handleClickDesac} w={{base:"25rem",md:"10rem"}} aria-label="Se désactiver de votre communauté">Se désactiver</Button>
              </Tooltip>
              <Tooltip
                rounded="md"
                label="Ceci entraine la suppression de votre addresse au sein de votre communauté. Dans le cas ou vous seriez banni, aucun remboursement ne vous sera accordé. Regularisez votre situation puis quittez la ComEth pour récuperer votre dû"
                fontSize="md"
              >
                <Button onClick={handleClickQuit} w={{base:"36rem", md:"12rem" }}aria-label="Quitter votre communauté">Quitter la ComEth</Button>
              </Tooltip>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PoepleBody;
