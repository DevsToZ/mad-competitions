import { Flex, Highlight, Text } from "@chakra-ui/react";
import { formatDate } from "../utils/consts";

interface RulesProps {
  maxTickets: number;
  endDate: string;
}

export const Rules = ({ maxTickets, endDate }: RulesProps) => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontWeight={"bold"} fontSize={20}>
        General Rules
      </Text>
      <Text>
        <Highlight
          query={"18"}
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            color: "white",
            bg: "green.400",
          }}
        >
          {`This contest is available to individuals residing in the UK who are 18
      years old or older.`}
        </Highlight>
      </Text>
      <Text>
        <Highlight
          query={`${maxTickets}`}
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            color: "white",
            bg: "green.400",
          }}
        >
          {`You have the opportunity to submit entries for this
      contest up to ${maxTickets} times.`}
        </Highlight>
        <Highlight
          query={`${formatDate(endDate)}`}
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            color: "white",
            bg: "green.400",
          }}
        >
          {`The deadline for this contest is ${formatDate(endDate)}. `}
        </Highlight>
        {`The drawing will be broadcasted live on our Facebook page. All contests are assured, 
      meaning no extensions will be granted.`}
      </Text>
      <Text>
        {`The winner will receive the prize regardless 
      of whether the contest sells out. A cashalternative will only be provided if the winner 
      opts for this choice.`}
      </Text>
    </Flex>
  );
};
