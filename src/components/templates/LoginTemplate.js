import { Heading, Center } from "@chakra-ui/react";
import LoginBody from "../organisms/LoginBody";


const LoginTemplate = () => {

  return (
    <>
      <Center>
      <Heading  textAlign="center" mt={{ base: "2rem", sm: "1rem", lg: "2rem" }} m={{base:"4rem", sm:"5rem"}} fontSize="4xl" fontFamily="mono">Rejoignez votre communauté</Heading>
      </Center>
      <LoginBody />
    </>
  );
};
export default LoginTemplate;
