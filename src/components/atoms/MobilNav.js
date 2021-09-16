import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import InfoButton from './InfoButton';
import ProposButton from './ProposButton';
import VoteButton from './VoteButton';
import StatsButton from './StatsButton';
import BudgetButton from './BudgetButton';
import PeopleButton from './PeopleButton';

const MobilNav = () => {
    return (
        <>
            <Menu pos="absolute">
                <MenuButton
                    as={IconButton}
                    aria-label="Menu déroulant mobile"
                    icon={<HamburgerIcon />}
                    size="lg"
                    backgroundColor="teal.600"
                    _hover={{ bg: "#0db5aa" }}
                    _active={{ bg:"#8deaf2"}}
                    mr="1rem"
                    mt="2rem"
                />
                <MenuList>
                    <Box
                        pos="absolute"
                        top="0"
                        h="19.4rem"
                        w="100%"
                        rounded="lg"
                        boxShadow="dark-lg"
                        backgroundColor="teal.600"
                    >
                        <VoteButton />
                        <ProposButton />
                        <InfoButton />
                        <StatsButton />
                        <BudgetButton />
                        <PeopleButton />
                    </Box>
                </MenuList>
            </Menu>
        </>
    );
};

export default MobilNav;