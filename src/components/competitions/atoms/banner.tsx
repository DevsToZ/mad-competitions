import { Flex, Text } from "@chakra-ui/react";
import { BannerColors } from "../utils/consts";
import { BannerProps } from "../utils/types";
import { differenceInDays } from "date-fns";

const remainingDaysToBannerText = (end: Date) => {
  switch (differenceInDays(end, Date.now())) {
    case 0:
      return "Today";
    case 1:
      return "Tomorrow";
    default:
      return `in ${differenceInDays(end, Date.now())} days`;
  }
};

const remainingDaysToBannerColor = (end: Date) => {
  switch (differenceInDays(end, Date.now())) {
    case 0:
      return BannerColors.TODAY;
    case 1:
      return BannerColors.TOMORROW;
    default:
      return BannerColors.DEFAULT;
  }
};

const Banner = ({ endTime }: BannerProps) => {
  const end = new Date(endTime);
  return (
    <Flex
      w={"100%"}
      h={"5%"}
      bg={remainingDaysToBannerColor(end)}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"md"} fontWeight={"semibold"} color={"white"}>
        {`Draw ${remainingDaysToBannerText(end)}`}
      </Text>
    </Flex>
  );
};

export default Banner;
