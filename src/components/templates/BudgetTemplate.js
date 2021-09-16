import { Center, Heading } from "@chakra-ui/react";
import BudgetBody from "../organisms/BudgetBody";

const BudgetTemplate = () => {

  return (
    <>
      <Center>
        <Heading
          ml={{ md: "6rem" }}
          mt={{ base: "2rem", sm: "3rem", lg: "6rem" }}
          textAlign="center"
          fontSize={{base:"40px", md:"4xl"}}
          w={{ sm: "70%" }}
          fontFamily="mono"
        >
          Les budgets de votre ComEth
        </Heading>
      </Center>
      <BudgetBody />
    </>
  );
};
export default BudgetTemplate;
