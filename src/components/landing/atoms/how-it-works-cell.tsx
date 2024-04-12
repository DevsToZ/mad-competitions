import { Flex, Divider, Text, useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../../lib/consts";

interface HowItWorksCellProps {
  title: string;
  description: string;
  icon: any;
}

export const HowItWorksCell = ({
  title,
  description,
  icon,
}: HowItWorksCellProps) => {
  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: false });
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      w={"100%"}
      color={"white"}
    >
      <Flex
        p={4}
        pl={0}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex p={4} bg={"green.500"} borderRadius={"50%"}>
          <FontAwesomeIcon
            fontSize={!isTablet ? ICONS_SIZE * 1.5 : ICONS_SIZE}
            width={!isTablet ? "36px" : "24px"}
            height={!isTablet ? "24px" : "12px"}
            icon={icon}
          />
        </Flex>
        <Flex px={4} flexDir={"column"}>
          <Text fontSize={!isTablet ? "xl" : "md"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text fontSize={!isTablet ? "md" : "xs"} fontWeight={"semibold"}>
            {description}
          </Text>
        </Flex>
      </Flex>
      <Divider borderColor={"green.600"} />
    </Flex>
  );
};
