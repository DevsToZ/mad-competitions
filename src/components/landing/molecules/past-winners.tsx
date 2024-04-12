import { Flex, Spinner, useMediaQuery, useToast } from "@chakra-ui/react";
import useAxios from "../../../lib/axios/useAxios";
import { GetWinners } from "../../winners/core/winners.service";
import WinnersCard from "../../winners/molecules/winnersCard";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import { SectionTitle } from "../atoms/section-title";
import { useEffect } from "react";
import { displayToast } from "../../ui/toast";

export const PastWinners = () => {
  const toast = useToast();
  const [isMobile] = useMediaQuery("(min-width: 0px)", { ssr: false });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1200px)", { ssr: false });

  const { data, isLoading, error } = useAxios({
    fetchFn: GetWinners,
    paramsOfFetch: { page: 0, size: 9 },
    loadOnMount: true,
  });

  const thumbsOptions: Options = {
    type: "slide",
    perPage: isDesktop ? 3 : isTablet ? 2 : 1,
    perMove: 1,
    width: isDesktop
      ? "1500px"
      : isTablet
      ? "768px"
      : isMobile
      ? "400px"
      : "100%",
    arrows: true,
    rewind: true,
    rewindByDrag: true,
    gap: "2rem",
  };

  useEffect(() => {
    if (error) {
      displayToast({
        id: "winnersError",
        type: "error",
        text: "There was a problem retrieving the winners. Please try again later.",
        toast,
      });
    }
  }, [error]);

  return (
    <Flex
      width={"100%"}
      maxWidth={
        isDesktop ? "1500px" : isTablet ? "768px" : isMobile ? "400px" : "100%"
      }
      margin={"0 auto"}
      h={"100%"}
      minH={"53.65vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      my={8}
      flexWrap={"wrap"}
      px={isMobile ? 4 : 0}
    >
      <SectionTitle title="Past Winners" />
      {isLoading && (
        <Flex
          h={"100%"}
          w={"100%"}
          minH={"53.65vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner color="white" />
        </Flex>
      )}
      {!isLoading && data && (
        <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Splide options={thumbsOptions} aria-label="Past Winners">
            {data?.winners?.map((card: any, index: number) => (
              <SplideSlide
                key={`${card.id}-${index}`}
                style={{ marginRight: "8px" }}
              >
                <WinnersCard
                  key={`${card.id}-${index}`}
                  id={card.id}
                  competitionName={card.competitionName}
                  image={card.image}
                  name={card.name}
                  ticketNumber={card.ticketNumber}
                  width={"100%"}
                />
              </SplideSlide>
            ))}
          </Splide>
        </Flex>
      )}
      {!isLoading && data && data.winners.length === 0 && (
        <Flex
          w={"100%"}
          h={"100%"}
          minH={"53.65vh"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          opacity={0.25}
          textAlign={"center"}
        >
          No winners yet. Can you be the first?
        </Flex>
      )}
      {error && (
        <Flex
          w={"100%"}
          h={"100%"}
          minH={"53.65vh"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          opacity={0.25}
          textAlign={"center"}
        >
          There was an error retrieving the winners. Please try again later.
        </Flex>
      )}
    </Flex>
  );
};
