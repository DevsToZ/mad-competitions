import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "./consts";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "../components/cart/utils/cart.recoil";
import ReactGA from "react-ga4";

export const PaymentSuccessPage = () => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1500px)", { ssr: false });
  const navigate = useNavigate();
  const [, setCartItems] = useRecoilState(cartItemsAtom);

  useEffect(() => {
    setCartItems([]);
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Page>
      <Header title="Payment Success" />
      <Flex
        color={"white"}
        flexDir={"column"}
        maxWidth={isDesktop ? "1500px" : isTablet ? "1200px" : "100%"}
        margin={"0 auto"}
        w={"100%"}
        px={4}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        py={8}
        h={"59vh"}
      >
        <FontAwesomeIcon icon={faCheckCircle} size={"4x"} color={"green"} />
        <Text fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"}>
          Thank you for your purchase!
        </Text>
        <Text fontSize={"md"} textAlign={"center"} fontWeight={"semibold"}>
          You will receive an email with details about your purchase.
        </Text>
        <ButtonGroup>
          <Button
            variant={"outline"}
            _hover={{ color: "black", bg: "white", borderColor: "white" }}
            color={"white"}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            variant={"solid"}
            _hover={{ borderColor: "white" }}
            onClick={() => navigate(PagesURL.COMPETITIONS)}
          >
            Continue Shopping
          </Button>
        </ButtonGroup>
      </Flex>
      <Footer />
    </Page>
  );
};
