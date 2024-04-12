import { Button, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Page from "../components/ui/page";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "./consts";
import Logo from "../components/ui/logo";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={4}
        h={"67vh"}
        color={"white"}
      >
        {/* @ts-ignore */}
        <Logo width={96} height={36} />{" "}
        <Text fontSize={"3xl"}>Page not found!</Text>
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{ color: "black", bg: "white", borderColor: "white" }}
          onClick={() => {
            navigate(PagesURL.LANDING);
          }}
        >
          Home
        </Button>
      </Flex>
      <Footer />
    </Page>
  );
};

export default ErrorPage;
