import React, { useEffect , useContext} from "react";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";
import { ComEthContext } from "../../context/ComEthContext";
import UseEffect from "../atoms/UseEffect";


const Home = () => {
  const comEth = useContext(ComEthContext);
  
  useEffect(() => {
    if(comEth){
      console.log("ComEth home", comEth);
      console.log("ComEth home address", comEth.address)
    }else{
      console.log('ComEth home no address')
    }
  }, [comEth]);

  return (
    <>
      <Box w="100%" minH="100vh"  bgGradient="linear(to-t,teal.600, teal.400);">
        <NavLat />
        <HomeTemplate />
        <UseEffect />
      </Box>
    </>
  );
};
export default Home;
