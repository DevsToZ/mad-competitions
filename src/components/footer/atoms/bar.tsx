import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faLock,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { ICONS_SIZE } from "../../../lib/consts";

const Bar = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: false });
  return (
    <Flex
      w={"100%"}
      bg={"gray.900"}
      color={"white"}
      justifyContent={"space-evenly"}
      p={4}
      alignItems={"center"}
      boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.5)"}
      fontSize={isTablet ? "md" : "lg"}
      fontWeight={"semibold"}
    >
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxW={"1500px"}
        flexDir={isTablet ? "column" : "row"}
        gap={4}
      >
        <Flex alignItems={"center"}>
          <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faLock} />
          <Text ml={2}>Secure Payments</Text>
        </Flex>
        <Flex alignItems={"center"}>
          <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCrown} />
          <Text ml={2}>Guaranteed Winners</Text>
        </Flex>
        <Flex alignItems={"center"}>
          <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCirclePlay} />
          <Text ml={2}>Live Draws on Facebook</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bar;
