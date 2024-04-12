import { Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { ICONS_SIZE } from "../../../lib/consts";
import { SocialLinks } from "../../../routes/consts";

const Social = () => {
  const SOCIAL_ICONS_SIZE = ICONS_SIZE / 1.25;
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
      <Text fontSize={"lg"}>Follow Us</Text>
      <a href={SocialLinks.FACEBOOK} target={"_blank"}>
        <FontAwesomeIcon
          fontSize={SOCIAL_ICONS_SIZE}
          icon={faFacebook}
          cursor={"pointer"}
        />
      </a>
      <a href={SocialLinks.TIKTOK} target={"_blank"}>
        <FontAwesomeIcon
          fontSize={SOCIAL_ICONS_SIZE}
          icon={faTiktok}
          cursor={"pointer"}
        />
      </a>
    </Flex>
  );
};

export default Social;
