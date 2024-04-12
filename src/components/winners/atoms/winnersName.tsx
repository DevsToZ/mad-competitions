import { Text } from "@chakra-ui/react";

interface WinnersNameProps {
  name: string;
}

const WinnersName = ({ name }: WinnersNameProps) => {
  return (
    <Text fontSize={"xl"} px={4} py={2} color={"white"}>
      {name}
    </Text>
  );
};

export default WinnersName;
