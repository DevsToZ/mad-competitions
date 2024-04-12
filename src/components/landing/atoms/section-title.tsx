import { Divider, Flex, Text } from "@chakra-ui/react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Flex flexDir={"column"} gap={4} w={"100%"}>
      <Text
        w={"100%"}
        color={"white"}
        fontSize={"xl"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
      >
        {title}
      </Text>
      <Divider borderColor={"green.700"} />
    </Flex>
  );
};
