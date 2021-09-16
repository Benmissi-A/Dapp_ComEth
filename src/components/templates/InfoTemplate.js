import { Center, Heading } from "@chakra-ui/react";
import InformationBody from "../organisms/InformationBody";

const InfoTemplate = () => {
  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "3rem", lg: "6rem" }}
          textAlign="center"
          fontSize={{base:"40px", md:"4xl"}}
          fontFamily="mono"
        >
          Vos Informations
        </Heading>
      </Center>
      <InformationBody />
    </>
  );
};
export default InfoTemplate;
