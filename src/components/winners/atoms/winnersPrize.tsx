import { Text } from "@chakra-ui/react";

interface WinnersPrizeProps {
  prize: string;
}

const WinnersPrize = ({ prize }: WinnersPrizeProps) => {
  return (
    <Text fontSize={"md"} fontWeight={"semibold"} color={"green.400"} px={4}>
      {prize}
    </Text>
  );
};

export default WinnersPrize;
