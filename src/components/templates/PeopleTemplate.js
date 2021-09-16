import {
  Center,
  Heading,
} from "@chakra-ui/react";
import PoepleBudget from "../organisms/PoepleBudget";

const PeopleTemplate = () => {


  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "3rem", lg: "6rem" }}
          ml={{md:"5rem"}}
          textAlign="center"
          fontSize={{base:"40px", md:"4xl"}}
          fontFamily="mono"
        >
          Membres de ma communauté
        </Heading>
      </Center>
      <PoepleBudget />
    </>
  );
};
export default PeopleTemplate;
