import {
  Divider,
  Flex,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import useAxios from "../../lib/axios/useAxios";
import { GetCompetitions } from "../competitions/core/competitions.service";
import { SmallCompetitionsCard } from "../competitions/molecules/smallCompetitionsCard";
import { useEffect } from "react";
import { displayToast } from "./toast";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { useRecoilState } from "recoil";
import { shouldRefetchAtom } from "../navigation/utils/navigation.recoil";

interface FeaturedCompetitionsProps {
  tag?: string;
}

export const FeaturedCompetitions = ({ tag }: FeaturedCompetitionsProps) => {
  const toast = useToast();
  const [shouldRefetch, setShouldRefetch] = useRecoilState(shouldRefetchAtom);
  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: GetCompetitions,
    paramsOfFetch: {
      page: 0,
      size: 5,
      tag: tag,
    },
    loadOnMount: true,
  });
  const [isMobile] = useMediaQuery("(min-width: 0px)", { ssr: false });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isBigTableOrSmallDesktop] = useMediaQuery("(min-width: 1200px)", {
    ssr: false,
  });
  const [isDesktop] = useMediaQuery("(min-width: 1500px)", { ssr: false });

  useEffect(() => {
    if (error) {
      displayToast({
        id: "competitionsError",
        type: "error",
        text: "There was a problem retrieving the competitions. Please try again later.",
        toast,
      });
    }
  }, [error]);

  useEffect(() => {
    if (shouldRefetch) {
      loadData();
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);

  const thumbsOptions: Options = {
    type: "loop",
    perPage: isDesktop ? 4 : isBigTableOrSmallDesktop ? 3 : isTablet ? 2 : 1,
    perMove: 1,
    width: "100%",
    arrows: true,
    rewind: true,
    rewindByDrag: true,
    gap: "2rem",
  };

  return (
    <Flex
      maxWidth={
        isDesktop ? "1500px" : isTablet ? "100%" : isMobile ? "100%" : "100%"
      }
      // maxW={"100%"}
      margin={"0 auto"}
      bg={"black"}
      mb={8}
      gap={4}
      flexDir={"column"}
      minH={"400px"}
      justifyContent={"center"}
      px={4}
    >
      {isLoading ? (
        <Spinner color="white" />
      ) : (
        <>
          <Text fontSize={"2xl"} color={"white"}>
            Featured Competitions
          </Text>
          <Divider mb={4} />
          <Flex
            margin={"0 auto"}
            bg={"black"}
            w={"100%"}
            minH={"400px"}
            gap={4}
          >
            <Splide options={thumbsOptions} aria-label="Featured Competitions">
              {data?.map((card: any, index: number) => (
                <SplideSlide
                  key={`${card.id}-${index}`}
                  style={{ marginRight: "8px" }}
                >
                  <SmallCompetitionsCard
                    hideFooter={true}
                    key={card.id}
                    {...card}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Flex>
        </>
      )}
    </Flex>
  );
};
