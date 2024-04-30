import {
  useToast,
  useMediaQuery,
  Flex,
  Button,
  Tabs,
  TabList,
  Tab,
  Divider,
  TabPanels,
  TabPanel,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useAxios from "../../lib/axios/useAxios";
import { ICONS_SIZE_SMALL, MAX_TICKET_NUMBER } from "../../lib/consts";
import { CartContext } from "../cart/core/cart.context";
import Footer from "../footer/footer.organism";
import { LinkIDS } from "../navigation/utils/consts";
import {
  currentActivePageAtom,
  isAdminAtom,
} from "../navigation/utils/navigation.recoil";
import ProductCarousel from "../ui/carousel";
import { FeaturedCompetitions } from "../ui/features-competitions";
import Header from "../ui/header";
import QuestionRadio from "../ui/radioCard";
import TicketsSlider from "../ui/slider";
import { displayToast } from "../ui/toast";
import { FAQs } from "./atoms/faqs";
import Price from "./atoms/price";
import ProgressBar from "./atoms/progress";
import { Rules } from "./atoms/rules";
import Timer from "./atoms/timer";
import { GetCompetitionById } from "./core/competitions.service";
import { MetaTags } from "../ui/meta-tags";
import { PagesURL } from "../../routes/consts";
import ReactGA from "react-ga4";

const CompetitionDetails = () => {
  const cart = useContext(CartContext);
  const [, setIsActive] = useRecoilState(currentActivePageAtom);
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();

  const [questionAnswer, setQuestionAnswer] = useState("");

  const [isMobile] = useMediaQuery("(min-width: 0px)", { ssr: false });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });
  const [isDesktop] = useMediaQuery("(min-width: 1200px)", { ssr: false });

  const [isAdmin] = useRecoilState(isAdminAtom);

  const { data, isLoading, error } = useAxios({
    fetchFn: GetCompetitionById,
    paramsOfFetch: { id: id },
    loadOnMount: true,
  });

  const [sliderValue, setSliderValue] = useState(1);

  const showParticipants = () => {
    navigate(`/competitions/${id}/participants`);
  };

  useEffect(() => {
    setIsActive(LinkIDS.COMPETITIONS);
  }, []);

  const handleAddToCart = () => {
    if (!questionAnswer) {
      displayToast({
        id: "competitionsQuestion",
        type: "info",
        text: "You must answer the question before adding to cart.",
        toast,
      });
      return;
    }
    if (data.currentTicketNumber + sliderValue > data.maxNumberOfTickets) {
      displayToast({
        id: "tooManyTickets",
        type: "warning",
        text: "You can't add that many tickets to cart. Check your cart and change the amount.",
        toast,
      });
      return;
    }
    if (cart.getProductQuantity(data.id) >= data.maxNumberOfTickets) {
      displayToast({
        id: "tooManyTickets",
        type: "warning",
        text: "You added the maximum amount of tickets permitted.",
        toast,
      });
      return;
    }
    cart.addAmountToCart(
      data.id,
      data.title,
      sliderValue,
      data.pricePerTicket,
      data.images[0],
      questionAnswer
    );
    displayToast({
      id: "competitionsSuccess",
      type: "success",
      text: `Added tickets to cart.`,
      toast,
    });
    ReactGA.event({
      category: "User",
      action: "Added to cart",
    });
  };

  return (
    <>
      <MetaTags
        title={data?.title}
        primary_description="Check out our competition and join for a chance to win this big prize!"
        secondary_description={data?.description}
        image={data?.image}
        url={`${PagesURL.COMPETITIONS}/${id}`}
      />
      {error && <div>Error: {`${error}`}</div>}
      <Header title={data?.title} />
      {data ? (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={
            isDesktop
              ? "1500px"
              : isTablet
              ? "1200px"
              : isMobile
              ? "768px"
              : "100%"
          }
          margin={"0 auto"}
          h={"100%"}
          minHeight={"54vh"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Flex gap={8} w={"100%"} flexDir={isDesktop ? "row" : "column"}>
            <ProductCarousel images={data?.images} />
            <Flex flexDir={"column"} w={isDesktop ? "50%" : "100%"}>
              <Flex flexDir={"column"} color={"white"}>
                <Text fontSize={"3xl"} fontWeight={"bold"}>
                  {data.title}
                </Text>
                <Price color={"white"} price={data.pricePerTicket} />
                {data.maxNumberOfTickets >= data.currentTicketNumber && (
                  <Flex flexDir={"column"} my={2} gap={4}>
                    <Text fontSize={"xl"}>{data.question.question}</Text>
                    <QuestionRadio
                      options={[
                        data.question.answer1,
                        data.question.answer2,
                        data.question.answer3,
                      ]}
                      name={"question"}
                      onChange={(e) => e && setQuestionAnswer(e)}
                    />
                  </Flex>
                )}
              </Flex>
              <Flex
                flexDir={"column"}
                gap={4}
                justifyContent={"center"}
                alignItems={"space-between"}
                mt={8}
              >
                {data.maxNumberOfTickets < data.currentTicketNumber && (
                  <Text color={"white"} fontSize={"xl"}>
                    This competition is filled. If you bought a ticket, check
                    our facebook page to see if you won the big prize.
                  </Text>
                )}
                {data.maxNumberOfTickets >= data.currentTicketNumber && (
                  <TicketsSlider
                    maxNumberOfTickets={data.maxNumberOfTickets}
                    currentTicketNumber={data.currentTicketNumber}
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}
                  />
                )}
                {data.maxNumberOfTickets >= data.currentTicketNumber && (
                  <Button
                    variant={"solid"}
                    background={"green.400"}
                    size={"lg"}
                    color={"white"}
                    textAlign={"left"}
                    textTransform={"uppercase"}
                    border={"2px solid white"}
                    h={"50px"}
                    _hover={{
                      background: "green.400",
                      outline: "0px",
                      border: "2px solid white",
                    }}
                    onClick={() => handleAddToCart()}
                  >
                    <Text fontSize={"lg"}>
                      Buy Tickets{" "}
                      <FontAwesomeIcon
                        fontSize={ICONS_SIZE_SMALL}
                        icon={faChevronRight}
                      />
                    </Text>
                  </Button>
                )}
                <Flex flexDir={"column"} fontWeight={"bold"} color={"white"}>
                  <Text fontSize={"lg"} opacity={0.5}>
                    Time until live draw
                  </Text>
                  <Timer
                    endTime={data.endTime}
                    background="gray.900"
                    color="white"
                  />
                </Flex>

                <Flex flexDir={"column"} fontWeight={"bold"} color={"white"}>
                  <Text fontSize={"lg"} opacity={0.5}>
                    {data.maxNumberOfTickets >= data.currentTicketNumber
                      ? "Remaining tickets"
                      : "Total entries"}
                  </Text>
                  <ProgressBar
                    ticketsBought={data.currentTicketNumber}
                    totalTickets={data.maxNumberOfTickets}
                    height="40px"
                    px={0}
                  />
                </Flex>
                {isAdmin && (
                  <Flex>
                    <Button
                      variant={"solid"}
                      background={"green.400"}
                      size={"lg"}
                      color={"white"}
                      textAlign={"left"}
                      textTransform={"uppercase"}
                      border={"2px solid white"}
                      h={"50px"}
                      _hover={{
                        background: "green.400",
                        outline: "0px",
                        border: "2px solid white",
                      }}
                      onClick={showParticipants}
                    >
                      <Text fontSize={"lg"}>Show Participants</Text>
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"100%"} color={"white"}>
            <Tabs w={"100%"} variant={"solid-rounded"} colorScheme="green">
              <TabList gap={4}>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  Description
                </Tab>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  Rules
                </Tab>
                <Tab color={"white"} _hover={{ borderColor: "green.600" }}>
                  FAQs
                </Tab>
              </TabList>

              <Divider mt={4} />

              <TabPanels>
                <TabPanel px={0}>
                  <Text>{data.description}</Text>
                </TabPanel>
                <TabPanel px={0}>
                  <Rules
                    maxTickets={MAX_TICKET_NUMBER}
                    endDate={data.endTime}
                  />
                </TabPanel>
                <TabPanel px={0}>
                  <FAQs endDate={data.endTime} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      ) : isLoading ? (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={"1500px"}
          minHeight={"54vh"}
          margin={"0 auto"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Spinner color="white" />
        </Flex>
      ) : (
        <Flex
          flexDir={"column"}
          width={"100%"}
          maxWidth={"1500px"}
          minHeight={"54vh"}
          margin={"0 auto"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          my={8}
          px={4}
        >
          <Text>{error}</Text>
        </Flex>
      )}
      <FeaturedCompetitions />
      <Footer />
    </>
  );
};

export default CompetitionDetails;
