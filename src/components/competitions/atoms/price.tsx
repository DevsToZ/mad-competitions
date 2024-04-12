import { Flex, Text } from "@chakra-ui/react";

interface PriceProps {
  price: number;
  color?: string;
}

const Price = ({ price, color }: PriceProps) => {
  return (
    <Flex
      w={"75%"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"inline"}
    >
      <Text
        color={"green.400"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        display={"inline"}
      >
        {`$${price}`}
      </Text>
      <Text color={color} fontSize={"xs"} display={"inline"} ml={1}>
        Per Entry
      </Text>
    </Flex>
  );
};

export default Price;
