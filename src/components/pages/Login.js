import { Box } from "@chakra-ui/layout";
import LoginTemplate from "../templates/LoginTemplate";
const Login = () => {
  return (
    <>
    <Box w="100%" minH="100vh" bgGradient="linear(to-t,teal.600, teal.400);">
      <LoginTemplate />
      </Box>
    </>
  );
};
export default Login;
