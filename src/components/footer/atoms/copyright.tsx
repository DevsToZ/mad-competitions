import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Links, LinkIDS } from "../../navigation/utils/consts";

interface CopyrightProps {
  isTablet: boolean;
}

const Copyright = ({ isTablet }: CopyrightProps) => {
  return (
    <Flex
      py={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={isTablet ? "column" : "row"}
      px={4}
      gap={0}
    >
      <Text
        fontSize={"xs"}
        wordBreak={"break-all"}
        px={isTablet ? 6 : 0}
        textAlign={"center"}
      >
        Copyright © 2024{" "}
        <Link to={Links[LinkIDS.HOME].to}>MAD Competitions</Link> by Mad Media
        Productions LTD | Companies House Number: 15349657
      </Text>
      <Text fontSize={"xs"}>
        Competition Platform by{" "}
        <a href="https://www.devstoz.com/" target="_blank">
          DevsToZ
        </a>
      </Text>
    </Flex>
  );
};

export default Copyright;
