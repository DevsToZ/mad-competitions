import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isCookiesAcceptedAtom } from "../navigation/utils/navigation.recoil";
import { PagesURL } from "../../routes/consts";

export const CookieBanner = () => {
  const navigate = useNavigate();
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isCookiesAccepted, setIsCookiesAccepted] = useRecoilState(
    isCookiesAcceptedAtom
  );

  useEffect(() => {
    const cookieBanner = localStorage.getItem("cookiesAccepted");
    if (!cookieBanner) {
      setIsCookiesAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsCookiesAccepted(true);
  };

  return (
    <>
      {!isCookiesAccepted && (
        <Flex
          w={"100%"}
          bg={"gray.800"}
          position={"fixed"}
          bottom={0}
          boxShadow={"0px -5px 15px 0px rgba(0,0,0,0.35)"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={4}
          py={4}
          gap={4}
          flexDir={isTablet ? "row" : "column"}
        >
          <Text color={"white"} fontSize={"md"}>
            We use cookies to ensure you get the best experience on our website.
            By clicking{" "}
            <span>
              <i>"I Understand"</i>
            </span>
            , you agree to the use of cookies according to our Cookie Policy.{" "}
          </Text>
          <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
            <Button
              variant={"outline"}
              size={"md"}
              color={"white"}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
              onClick={() => navigate(PagesURL.COOKIES)}
            >
              Cookie Policy
            </Button>
            <Button
              variant={"outline"}
              size={"md"}
              color={"white"}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
              onClick={handleAccept}
            >
              I Understand
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};
