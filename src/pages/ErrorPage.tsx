import NavBar from "@/components/NavBar";
import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Heading>Oops...</Heading>
      <Box padding={5}>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist"
            : "An Unexpected Error Occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
