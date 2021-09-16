import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import { useContext, useEffect } from "react";
import { ComEthContext } from "../../context/ComEthContext";
import React from 'react';

const UseEffect = () => {
    const comEth = useContext(ComEthContext);
    const toast = useToast();
    useEffect(() => {
        if (comEth) {
            const cb = (paymentReceiver, amount, proposalId) => {
                toast({
                    title: "La proposition a été validée, félicitations !",
                    description: `Destinataire : ${paymentReceiver}, du montant : ${amount / 10 ** 18} ETH, de la proposition ID :${proposalId}.`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Spent", cb)
            return () => {
                comEth.off("Spent", cb)
            }
        };
    }, [comEth, toast]);

    useEffect(() => {
        if (comEth) {
            const cb = (newUser) => {
                toast({
                    title: "",
                    description: `Vous avez été rajouté en tant que nouvel utilisateur de ComEth sous l'addresse : ${newUser}. Veuillez régulariser votre situation avec le bouton "Se mettre à jour".`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("UserAdded", cb)
            return () => {
                comEth.off("UserAdded", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (sender, amount) => {
                toast({
                    title: "Vous avez bien régularisé votre situation",
                    description: `Avec votre addresse : ${sender}, vous avez déposé dans le pot commun de votre communauté un montant de : ${amount / 10 ** 18} ETH`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Deposited", cb)
            return () => {
                comEth.off("Deposited", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (voter, proposalId, proposalDescription) => {
                toast({
                    title: "À voté !",
                    description: `Le compte : ${voter}, a voté la proposition: ${proposalDescription}, ID : ${proposalId}`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Voted", cb)
            return () => {
                comEth.off("Voted", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
    if (comEth) {
        const cb = (proposalId) => {
            toast({
                title: "Proposition rejetée par la majorité !",
                description: `La proposition à l'ID : ${proposalId} vient d'être rejetée, les fonds proposés ne seront pas redistribués`,
                status: "warning",
                position: "top-right",
                padding: "1rem",
                fontWeight: "bold",
                duration: 8000,
                isClosable: true,
            });
        };
        comEth.on("Rejected", cb)
        return () => {
            comEth.off("Rejected", cb)
        }
    };
}, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (id, descriptions) => {
                toast({
                    title: "Proposition créée",
                    description: `Id de la proposition: ${id} . Description : ${descriptions}`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 4000,
                    isClosable: true,
                });
            };
            comEth.on("ProposalCreated", cb)
            return () => {
                comEth.off("ProposalCreated", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
    if (comEth) {
        const cb = (recipient,amount) => {
            toast({
                title: "Vous venez de quitter votre communauté",
                description: `Votre addresse : ${recipient} a été remboursée d'un montant de ${amount / 10**18} ETH (calcul fait sur la quantité d'ETH restante dans le contrat)`,
                status: "warning",
                position: "top-right",
                padding: "1rem",
                fontWeight: "bold",
                duration: 8000,
                isClosable: true,
            });
        };
        comEth.on("Withdrawn", cb)
        return () => {
            comEth.off("Withdrawn", cb)
        }
    };
}, [comEth, toast]);
    return (
        <>
            <Box></Box>
        </>
    );
};
// useEffect(() => {
//     if (comEth) {
//         const cb = (,) => {
//             toast({
//                 title: "",
//                 description: ``,
//                 status: "info",
//                 position: "top-right",
//                 padding: "1rem",
//                 fontWeight: "bold",
//                 duration: 8000,
//                 isClosable: true,
//             });
//         };
//         comEth.on("", cb)
//         return () => {
//             comEth.off("", cb)
//         }
//     };
// }, [comEth, toast]);

export default UseEffect;