import { Flex, Text } from "@chakra-ui/react";

interface AlternativeProps {
  alternative: number;
}

const Alternative = ({ alternative }: AlternativeProps) => {
  let GBPDollar = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
  });
  return (
    <Flex
      bg={"green.100"}
      justifyContent={"center"}
      alignItems={"center"}
      p={1}
      mb={3}
      mx={4}
      textTransform={"uppercase"}
      fontSize={"xs"}
      borderRadius={"md"}
    >
      <Text>{`Cash Alternative: ${GBPDollar.format(alternative)}`}</Text>
    </Flex>
  );
};

export default Alternative;
