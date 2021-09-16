import React from "react";
import { Circle } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VoteButton = () => {
    return (
        <>
            <Link to="/vote">
                <Circle
                    as="button"
                    fontWeight="bold"
                    backgroundColor="whiteAlpha.700"
                    w="85%"
                    m="7%"
                    padding="3%"
                    _hover={{ bg: "#21bdbf" }}
                    _active={{ bg: "#8deaf2" }}
                    aria-label="Page vote"
                >
                    Vote
                </Circle>
            </Link>
        </>
    );
};

export default VoteButton;
