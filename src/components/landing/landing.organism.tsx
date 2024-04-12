import {
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import useAxios from "../../lib/axios/useAxios";
import { GetCompetitions } from "../competitions/core/competitions.service";
import { Hero } from "./molecules/hero";
import { useEffect, useState } from "react";
import { displayToast } from "../ui/toast";
import { LiveBanner } from "./atoms/live-banner";
import CardContainer from "../ui/card/cardContainer";
import CompetitionsCard from "../competitions/molecules/competitionsCard";
import { useNavigate } from "react-router-dom";
import { PagesURL } from "../../routes/consts";
import { HowItWorks } from "./molecules/how-it-works";
import { PastWinners } from "./molecules/past-winners";
import { Filters } from "../ui/filters";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE } from "../../lib/consts";
import { SectionTitle } from "./atoms/section-title";
import { MetaTags } from "../ui/meta-tags";

export const Landing = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1500px)", { ssr: false });
  const [filterBy, setFilterBy] = useState(null);

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: GetCompetitions,
    paramsOfFetch: { page: 0, size: 9, tag: filterBy },
    loadOnMount: true,
  });

  const navigateToCompetitions = () => {
    navigate(PagesURL.COMPETITIONS);
  };

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
    if (filterBy !== null) {
      loadData({ page: 0, size: 9, tag: filterBy });
    }
  }, [filterBy]);

  return (
    <>
      <MetaTags
        title="Home"
        primary_description="Home of the best competitions!"
        secondary_description="Win amazing prizes. Enter now to win big!"
        url={PagesURL.LANDING}
      />
      <Flex flexDir={"column"}>
        <Flex
          h={isTablet ? "92vh" : "auto"}
          maxH={"92vh"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          position={"relative"}
        >
          <Hero data={data && data[0]} isLoading={isLoading} />
        </Flex>
        <LiveBanner />
        <Flex
          width={"100%"}
          maxWidth={isDesktop ? "1500px" : isTablet ? "1200px" : "100%"}
          margin={"0 auto"}
          h={"100%"}
          px={isTablet ? 12 : 4}
          fontSize={"2xl"}
          color={"white"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          gap={8}
        >
          <SectionTitle title={"Featured Competitions"} />
          <Filters setFilterBy={setFilterBy} />
        </Flex>

        <Flex flexDir={"column"} alignItems={"center"}>
          <CardContainer>
            {isLoading && <Spinner color="white" />}
            {!isLoading &&
              data?.length > 0 &&
              data?.map((card: any) => (
                <CompetitionsCard
                  key={card.id}
                  id={card.id}
                  alternativePrize={card.alternativePrize}
                  endTime={card.endTime}
                  images={card.images}
                  maxNumberOfTickets={card.maxNumberOfTickets}
                  pricePerTicket={card.pricePerTicket}
                  tag={card.tag}
                  title={card.title}
                  currentTicketNumber={card.currentTicketNumber}
                  onClick={() =>
                    navigate(`${PagesURL.COMPETITIONS}/${card.id}`)
                  }
                />
              ))}
            {!isLoading && data?.length === 0 && (
              <Text color={"white"} opacity={0.25} textAlign={"center"}>
                No competitions found!
              </Text>
            )}
            {error && (
              <Text color={"white"} opacity={0.25} textAlign={"center"}>
                There was a problem retrieving the competitions. Please try
                again later.
              </Text>
            )}
          </CardContainer>
          <Button
            variant={"outline"}
            color={"white"}
            _hover={{ color: "black", bg: "white", borderColor: "white" }}
            onClick={navigateToCompetitions}
            size={isTablet ? "lg" : "md"}
            mb={16}
            textTransform={"uppercase"}
          >
            <Text mr={2}>View All Competitions</Text>
            <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faChevronRight} />
          </Button>
        </Flex>
        <HowItWorks />

        <PastWinners />
      </Flex>
    </>
  );
};
