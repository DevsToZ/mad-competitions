import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import {
  faCirclePlay,
  faCircleQuestion,
  faGifts,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { HowItWorksCell } from "../atoms/how-it-works-cell";

export const HowItWorks = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)", { ssr: false });
  return (
    <Flex w={"100%"} bg={"green.400"} py={8}>
      <Flex
        justifyContent={"center"}
        alignItems={!isTablet ? "flex-start" : "center"}
        flexDir={"column"}
        maxW={"1500px"}
        margin={"0 auto"}
        w={"100%"}
        gap={4}
        p={isTablet ? 8 : 16}
      >
        <Text
          color={"white"}
          fontSize={isTablet ? "lg" : "2xl"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          How it works?
        </Text>
        <Flex gap={8} w={"100%"} flexDir={"column"}>
          <Flex gap={8} flexDir={isTablet ? "column" : "row"}>
            <HowItWorksCell
              title={"Select your prize"}
              description={
                "Pick a prize from our list of competitions and enter now!"
              }
              icon={faGifts}
            />
            <HowItWorksCell
              title={"Answer a question"}
              description={
                "Answer a simple question to enter the draw and stand a chance to win!"
              }
              icon={faCircleQuestion}
            />
          </Flex>
          <Flex gap={8} flexDir={isTablet ? "column" : "row"}>
            <HowItWorksCell
              title={"Add tickets to cart"}
              description={
                "Choose the number of tickets you'd like. More tickets mean a better chance to win!"
              }
              icon={faTicket}
            />
            <HowItWorksCell
              title={"Watch the live draw"}
              description={
                "Don't forget to follow our Facebook page for updates on the draw's schedule!"
              }
              icon={faCirclePlay}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
