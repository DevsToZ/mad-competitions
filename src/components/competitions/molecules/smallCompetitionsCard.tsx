import { Flex, Image } from "@chakra-ui/react";
import Banner from "../atoms/banner";
import ProgressBar from "../atoms/progress";
import Price from "../atoms/price";
import TagDisplay from "../atoms/tag";

interface CompetitionsCardProps {
  id?: string;
  alternativePrize: number;
  endTime: string;
  images: string[];
  maxNumberOfTickets: number;
  pricePerTicket: number;
  tag: string;
  title: string;
  currentTicketNumber: number;
  onClick?: () => void;
  hideFooter?: boolean;
}

export const SmallCompetitionsCard = ({
  id,
  endTime,
  images,
  maxNumberOfTickets,
  pricePerTicket,
  tag,
  currentTicketNumber,
}: CompetitionsCardProps) => {
  const navigateToCompetition = () => {
    location.href = `/competitions/${id}`;
  };

  return (
    <Flex
      bg={"white"}
      h={"400px"}
      flexDir={"column"}
      borderRadius={"md"}
      boxShadow={"5px 5px 15px 0px rgba(0,0,0,0.5)"}
      transition={"all 0.2s ease-in-out"}
      w={"100%"}
      _hover={{
        cursor: "pointer",
      }}
      onClick={() => navigateToCompetition()}
      id={id}
      position={"relative"}
    >
      <Image
        borderTopRadius={"md"}
        src={images[0]}
        alt="giveaway-picture"
        w={"100%"}
        h={"50%"}
      />
      <Banner endTime={endTime} />
      <Flex h={"50px"} />
      <ProgressBar
        ticketsBought={currentTicketNumber}
        totalTickets={maxNumberOfTickets}
        px={3}
      />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={2}
        px={4}
      >
        <Price price={pricePerTicket} />
        <TagDisplay tags={[tag]} />
      </Flex>
    </Flex>
  );
};
