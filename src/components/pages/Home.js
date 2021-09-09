import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";


import Vote from "../../components/pages/Vote";
import Proposition from "../../components/pages/Proposition";
import Info from "../../components/pages/Info";
import Stats from "../../components/pages/Stats";
import Budget from "../../components/pages/Budget";
import People from "../../components/pages/People";


import { useContract } from "web3-hooks";
import { ComEthAbi } from "../../contracts/comEth";
export const ComEthContext = React.createContext(null);

const Home = ({ comEthAdr }) => {
  const comEth = useContract(comEthAdr, ComEthAbi);
  useEffect(() => {
    console.log("ComEth", comEth);
  }, [comEth]);
  return (
    <>
      <ComEthContext.Provider value={comEth}>
        <Switch>
          <Route exact path="/Home" component={Home}>
            <Box
              h={{ sm: "100%", md: "91.7vh", lg: "91.7vh" }}
              w="100%"
              bgGradient="linear(to-t,teal.600, teal.400);"
            >
              <HomeTemplate />
              <NavLat />
            </Box>
          </Route>
          {/* <Route exact path="/Vote" component={Vote}>
            <Vote />
          </Route>
          <Route exact path="/Proposition" component={Proposition}>
            <Proposition />
          </Route>
          <Route exact path="/Info" component={Info}>
            <Info />
          </Route>
          <Route exact path="/Stats" component={Stats}>
            <Stats />
          </Route>
          <Route exact path="/Budget" component={Budget}>
            <Budget />
          </Route>
          <Route exact path="/People" component={People}>
            <People />
          </Route> */}
        </Switch>
      </ComEthContext.Provider>
    </>
  );
};
export default Home;
