import {
  Text,
  Box,
  Popover,
  PopoverTrigger,
  Circle,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LinkIcon } from "@chakra-ui/icons";
const ComEthAddressPopover = () => {
  const [localAddress, setLocalAddress] = useState(
    JSON.parse(localStorage.getItem("AddressComEth")) || null
  );

  const handleChangeAddress = () => {
    setLocalAddress(JSON.parse(localStorage.getItem("AddressComEth")));
  };

  return (
    <>
      <Box ml={{ base: "3rem", md: "10rem", lg: "11rem" }} mt="1%">
        <Popover>
          <PopoverTrigger>
            <Circle
              backgroundColor="whiteAlpha.800"
              w={{ base: "8%", sm: "5%", lg: "2%" }}
              p={{ base: "1%", sm: "1%", lg: "0.5%" }}
              boxShadow="inner"
              aria-label="Copier adresse"
            >
              <Tooltip
                rounded="md"
                label="Retrouvez ici l'addresse de votre communauté"
              >
                <LinkIcon />
              </Tooltip>
            </Circle>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                <Text fontWeight="bold">
                  L'addresse Ethereum de votre Communauté
                </Text>
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Text
                  onChange={handleChangeAddress}
                >
                  {localAddress}
                </Text>
              </PopoverBody>
              <PopoverFooter>
                <Text fontWeight="bold">
                  À partager pour agrandir votre ComEth !
                </Text>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </>
  );
};

export default ComEthAddressPopover;
