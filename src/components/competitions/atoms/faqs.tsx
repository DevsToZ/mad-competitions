import { Flex, Text } from "@chakra-ui/react";
import { formatDate } from "../utils/consts";

interface FAQsProps {
  endDate: string;
}

export const FAQs = ({ endDate }: FAQsProps) => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize={20}>
          {"How can I obtain my number?"}
        </Text>
        <Text>
          {
            "Once your payment is processed, your number(s) will be emailed to you alongside a receipt."
          }
        </Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize={20}>
          {"How are winners selected?"}
        </Text>
        <Text>
          {
            "The winners are chosen through a live draw on Facebook, utilizing a random number generator to ensure fairness."
          }
        </Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Text fontWeight={"bold"} fontSize={20}>
          {"When is the draw scheduled?"}
        </Text>
        <Text>{`The live draw is scheduled for ${formatDate(
          endDate
        )}. If all entries are sold before that date, the draw will be moved up accordingly. Stay informed about the confirmed draw date by checking our Facebook page and website.`}</Text>
      </Flex>
    </Flex>
  );
};
