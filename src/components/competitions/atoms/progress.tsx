import { Flex, Progress, Text } from "@chakra-ui/react";

interface ProgressBarProps {
  ticketsBought: number;
  totalTickets: number;
  height?: string;
  px?: number;
}

const ProgressBar = ({
  ticketsBought,
  totalTickets,
  height = "5%",
  px = 3,
}: ProgressBarProps) => {
  return (
    <Flex w={"100%"} h={height} px={px}>
      <Progress
        w={"100%"}
        h={"100%"}
        value={(ticketsBought / totalTickets) * 100}
        colorScheme={"green"}
        borderRadius={0}
        position={"relative"}
        background={"gray.900"}
        color={"white"}
        fontSize={"md"}
        fontWeight={"bold"}
      >
        <Text
          position={"absolute"}
          top={"50%"}
          right={"50%"}
          transform={"translate(50%, -50%)"}
        >{`${ticketsBought}/${totalTickets}`}</Text>
      </Progress>
    </Flex>
  );
};

export default ProgressBar;
