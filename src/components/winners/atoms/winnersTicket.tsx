import { Text } from "@chakra-ui/react";

interface WinnersTicketProps {
  ticket: string;
}

const WinnersTicket = ({ ticket }: WinnersTicketProps) => {
  return (
    <Text fontSize={"sm"} px={4} py={4} color={"white"}>
      Ticket Number{" "}
      <Text as={"span"} fontWeight={"semibold"} color={"green.400"}>
        #{ticket}
      </Text>
    </Text>
  );
};

export default WinnersTicket;
