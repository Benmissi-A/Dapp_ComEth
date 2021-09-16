import {
  Center,
  Heading,
} from "@chakra-ui/react";
import VoteBody from "../organisms/VoteBody";

const VoteTemplate = () => {

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "3rem", lg: "6rem" }}
          ml={{ sm: "1rem" }}
          fontSize={{base:"40px", md:"4xl"}}
          fontFamily="mono"
        >
          Votez
        </Heading>
      </Center>
     <VoteBody />
    </>
  );
};
export default VoteTemplate;
