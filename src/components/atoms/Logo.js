import { Circle, Center } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Center>
        <Circle
          fontWeight="bold"
          backgroundColor="blackAlpha.500"
          m={{ base: "0.8rem", lg: "1rem" }}
          w={{ base: "4rem", lg: "5rem" }}
          h={{ base: "4rem", lg: "5rem" }}
          textColor="whiteAlpha.900"
          _active={{ bg: "#8deaf2" }}
          aria-label="Menu principal"
        >
          <Link to="/home">Home</Link>
        </Circle>
      </Center>
    </>
  );
};

export default Logo;
