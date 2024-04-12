import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";
import { SocialLinks } from "../../../routes/consts";

interface ContactDetailsProps {
  order: number;
}
const ContactDetails = ({ order }: ContactDetailsProps) => {
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  return (
    <Flex
      flexDir={"column"}
      color={"white"}
      alignItems={"center"}
      justifyContent={!isTablet ? "center" : "flex-start"}
      order={order}
      p={4}
      gap={4}
      pt={!isTablet ? 4 : 12}
      w={!isTablet ? "100%" : "50%"}
      h={"100%"}
      minH={!isTablet ? "20vh" : "55vh"}
      bg={"gray.900"}
      borderTopRightRadius={"md"}
      borderBottomRightRadius={!isTablet ? "none" : "md"}
      borderTopLeftRadius={!isTablet ? "md" : "none"}
      borderBottom={!isTablet ? "1px solid white" : "none"}
      borderBottomColor={"gray.600"}
    >
      <a href={`mailto:${SocialLinks.GMAIL}`} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faEnvelope}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{SocialLinks.GMAIL}</Text>
        </Flex>
      </a>
      <a href={SocialLinks.TIKTOK} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faTiktok}
            cursor={"pointer"}
          />

          <Text fontSize={"xl"}>{"@madcompetitionsuk"}</Text>
        </Flex>
      </a>
      {/* <a href={SocialLinks.FACEBOOK} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faFacebook}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a> */}
      {/* <a href={SocialLinks.INSTAGRAM} target={"_blank"}>
        <Flex gap={2} alignItems={"center"}>
          <FontAwesomeIcon
            fontSize={ICONS_SIZE}
            icon={faInstagram}
            cursor={"pointer"}
          />
          <Text fontSize={"xl"}>{"/mad.competitions"}</Text>
        </Flex>
      </a> */}
    </Flex>
  );
};

export default ContactDetails;
