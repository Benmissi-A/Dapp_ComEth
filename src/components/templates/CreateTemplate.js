import { Heading, Container, Center } from "@chakra-ui/react";
import CreateComethForm from "../organisms/CreateComethForm";


const CreateTemplate = () => {
 
  return (
    <> 
    <Center>
    <Heading  textAlign="center" mt={{ base: "2rem", sm: "3rem", lg: "6rem" }} mb={{base:"0.5rem", sm:"0"}} m={{base:"4rem", sm:"5rem"}}fontSize="4xl" fontFamily="mono">Créez votre communauté</Heading>
      </Center>
      <Container>
        <CreateComethForm />
        
      </Container>
    </>
  );
};
export default CreateTemplate;
