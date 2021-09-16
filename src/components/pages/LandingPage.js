import { Box } from "@chakra-ui/react";
import LandingPageTemplate from "../templates/LandingPageTemplate";

const LandingPage = () => {
  return (
    <>
    {/* TODO : faire la page front joulie  */}
      <Box w="100%" minH="100vh" bgGradient="linear(to-t,blue.100, blue.400);">
        <LandingPageTemplate />
      </Box>
    </>
  );
};
export default LandingPage;
