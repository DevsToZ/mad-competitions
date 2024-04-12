import { Flex, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE, ICONS_SIZE_SMALL } from "../../../lib/consts";
import { SocialLinks } from "../../../routes/consts";

export const LiveBanner = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: false });
  const navigateToLiveStream = () => {
    location.href = SocialLinks.FACEBOOK;
  };
  return (
    <Flex
      w={"100%"}
      h={isTablet ? "16" : "32"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"gray.800"}
      mb={8}
      px={4}
      gap={4}
    >
      <Text color={"white"} fontSize={isTablet ? "md" : "xl"}>
        Watch the Live Draws on our Facebook Page
      </Text>
      <Button
        variant={"outline"}
        color={"white"}
        _hover={{ color: "black", bg: "white", borderColor: "white" }}
        onClick={navigateToLiveStream}
        size={"lg"}
        fontSize={isTablet ? "md" : "xl"}
      >
        <FontAwesomeIcon
          fontSize={isTablet ? ICONS_SIZE_SMALL : ICONS_SIZE}
          icon={faCirclePlay}
        />
        <Text ml={2}>Watch Live</Text>
      </Button>
    </Flex>
  );
};
