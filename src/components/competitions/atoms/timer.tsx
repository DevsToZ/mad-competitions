import { Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import { differenceInMilliseconds } from "date-fns";
import { useEffect, useState } from "react";

interface TimerProps {
  background?: string;
  color?: string;
  endTime: string;
}

const Timer = ({
  background = "white",
  color = "gray.900",
  endTime,
}: TimerProps) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const calculateTimeLeft = () => {
    const end = new Date(endTime);
    const difference = differenceInMilliseconds(end, Date.now());

    if (difference > 0) {
      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setIsExpired(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Flex
      bg={background}
      h={"100px"}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"2xl"}
      fontWeight={"bold"}
    >
      {isLoading && <Spinner size={"md"} color={"green.400"} />}
      {isExpired && "Expired"}
      {!isLoading && !isExpired && (
        <Flex
          w={"100%"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          color={color}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{time.days.toString().padStart(2, "0")}</Text>
            <Text
              opacity={0.675}
              fontSize={"xs"}
              textTransform={"uppercase"}
              mx={4}
            >
              Days
            </Text>
          </Flex>
          <Divider orientation={"vertical"} mx={4} h={"50%"} />
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{time.hours.toString().padStart(2, "0")}</Text>
            <Text
              opacity={0.675}
              fontSize={"xs"}
              textTransform={"uppercase"}
              mx={4}
            >
              Hrs
            </Text>
          </Flex>
          <Divider orientation={"vertical"} mx={4} h={"50%"} />

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{time.minutes.toString().padStart(2, "0")}</Text>
            <Text
              opacity={0.675}
              fontSize={"xs"}
              textTransform={"uppercase"}
              mx={4}
            >
              Mins
            </Text>
          </Flex>
          <Divider orientation={"vertical"} mx={4} h={"50%"} />
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>{time.seconds.toString().padStart(2, "0")}</Text>
            <Text
              opacity={0.675}
              fontSize={"xs"}
              textTransform={"uppercase"}
              mx={4}
            >
              Secs
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default Timer;
