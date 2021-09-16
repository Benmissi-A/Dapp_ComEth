import { Center, Heading } from "@chakra-ui/react";
import React  from "react";
import ComEthAddressPopover from "../atoms/ComEthAddressPopover";
import HomeBody from "../organisms/HomeBody";


const HomeTemplate = () => {
 return (
    <>
      
      <Center>
      <Heading  textAlign="center" mt={{ base: "2rem", sm: "3rem", lg: "6rem" }} fontSize={{base:"52px", md:"4xl"}} fontFamily="mono">Home ComEth</Heading>
      </Center>
      <ComEthAddressPopover />
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
