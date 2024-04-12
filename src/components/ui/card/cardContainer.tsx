import { Flex, useMediaQuery } from "@chakra-ui/react";

const CardContainer = ({ children }: any) => {
  const [isMobile] = useMediaQuery("(min-width: 0px)", { ssr: false });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1500px)", { ssr: false });

  return (
    <Flex
      width={"100%"}
      maxWidth={isDesktop ? "1500px" : isTablet ? "1200px" : "100%"}
      margin={"0 auto"}
      h={"100%"}
      minH={"46.6vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      my={8}
      flexWrap={"wrap"}
      px={isMobile ? 4 : 0}
    >
      {children}
    </Flex>
  );
};

export default CardContainer;
