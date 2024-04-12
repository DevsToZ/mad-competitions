import {
  Box,
  Button,
  Flex,
  Image,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  data: any;
  isLoading: boolean;
}

export const Hero = ({ data, isLoading }: HeroProps) => {
  const navigate = useNavigate();
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });

  return (
    <>
      {isLoading && <Spinner color="white" />}
      {data && !isLoading && (
        <>
          <Image
            src={data?.images[0]}
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
          />
          <Box
            position={"absolute"}
            w={"100%"}
            h={"66%"}
            bg={
              "linear-gradient(360deg, rgba(0,0,0,1) 33%, rgba(255,255,255,0) 100%);"
            }
            opacity={0.95}
            bottom={0}
          />
          <Flex
            position={"absolute"}
            color={"white"}
            bottom={isTablet ? "5vh" : "2vh"}
            left={isTablet ? "7%" : "3%"}
            w={"85%"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexDir={"column"}
            gap={isTablet ? 4 : 2}
          >
            <Text
              textTransform={"uppercase"}
              fontSize={isTablet ? "4xl" : "md"}
              fontWeight={"bold"}
            >
              {data?.title}
            </Text>
            <Button
              variant={"solid"}
              background={"green.400"}
              size={isTablet ? "lg" : "xs"}
              color={"white"}
              textAlign={"left"}
              borderRadius={"md"}
              textTransform={"uppercase"}
              border={"2px solid white"}
              _hover={{
                background: "green.400",
                outline: "0px",
                border: "2px solid white",
              }}
              onClick={() => navigate(`/competitions/${data?.id}`)}
            >
              <Text fontSize={isTablet ? "lg" : "xs"}>
                Enter Now{" "}
                <FontAwesomeIcon
                  fontSize={
                    isTablet ? ICONS_SIZE_SMALL : ICONS_SIZE_SMALL / 1.5
                  }
                  icon={faChevronRight}
                />
              </Text>
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};
