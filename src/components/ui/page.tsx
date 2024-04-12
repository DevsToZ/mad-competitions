import { Button, Flex, Text } from "@chakra-ui/react";
import Navigation from "../navigation/navigation.organism";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../navigation/utils/navigation.recoil";
import { AdminGuard } from "../../guards/admin-guard";
import { CookieBanner } from "./cookie-banner";

const Page = ({ children }: any) => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  window.scrollTo(0, 0);
  return (
    <>
      <AdminGuard>
        {isAdmin && (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bg={"green.500"}
            color={"white"}
            h={"50px"}
            w={"100%"}
            gap={4}
          >
            <Text>You are logged in as an Administrator!</Text>
            <Button
              variant={"outline"}
              colorScheme={"white"}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
              onClick={() => {
                localStorage.removeItem("idToken");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </Flex>
        )}

        <Navigation />
        <Flex width={"100%"} minH={"90vh"} flexDir={"column"} bg={"black"}>
          {children}
        </Flex>
        <CookieBanner />
      </AdminGuard>
    </>
  );
};

export default Page;
