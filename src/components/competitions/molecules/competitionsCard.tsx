import {
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Timer from "../atoms/timer";
import Banner from "../atoms/banner";
import ProgressBar from "../atoms/progress";
import Price from "../atoms/price";
import Alternative from "../atoms/alternative";
import TagDisplay from "../atoms/tag";
import Card from "../../ui/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";
import { BasicModal } from "../../ui/modal";
import useAxios from "../../../lib/axios/useAxios";
import { DeleteCompetition } from "../core/competitions.service";
import { useEffect } from "react";
import { displayToast } from "../../ui/toast";
import { DeleteBtn } from "../../ui/card/deleteBtn";
import { useRecoilState } from "recoil";
import {
  isAdminAtom,
  shouldRefetchAtom,
  tokenAtom,
} from "../../navigation/utils/navigation.recoil";

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

const CompetitionsCard = ({
  id,
  onClick,
  alternativePrize,
  endTime,
  images,
  maxNumberOfTickets,
  pricePerTicket,
  tag,
  title,
  currentTicketNumber,
}: CompetitionsCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setShouldRefetch] = useRecoilState(shouldRefetchAtom);
  const [isAdmin] = useRecoilState(isAdminAtom);
  const toast = useToast();
  const [token] = useRecoilState(tokenAtom);
  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: DeleteCompetition,
    paramsOfFetch: { id: id, token: token.token },
  });

  const handleDelete = async () => {
    await loadData();
  };

  useEffect(() => {
    if (error) {
      displayToast({
        id: "competitionsError",
        type: "error",
        text: "There was a problem deleting the competition. Please try again later or contact the administrator.",
        toast,
      });
    }
    if (data) {
      displayToast({
        id: "competitionsDeletedSuccess",
        type: "success",
        text: "Competition deleted successfully.",
        toast,
      });
      setShouldRefetch(true);
    }
  }, [error, data]);

  return (
    <Card bg={"white"} id={id} onClick={onClick}>
      <BasicModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDelete}
        isLoading={isLoading}
        title="Delete Competition"
        body="Are you sure you want to delete this competition? You will not be able to recover it after it's gone."
      />
      {isAdmin && <DeleteBtn onClick={onOpen} />}
      <Flex
        w={"100%"}
        h={"35%"}
        justifyContent={"center"}
        alignItems={"center"}
        p={3}
        pb={0}
      >
        <Image
          borderRadius={"md"}
          src={images[0]}
          alt="giveaway-picture"
          w={"100%"}
          h={"100%"}
        />
      </Flex>
      <Banner endTime={endTime} />
      <Timer endTime={endTime} />
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
      <Text fontSize={"lg"} px={4} py={4} fontWeight={"semibold"} h={"100px"}>
        {title}
      </Text>
      <Alternative alternative={alternativePrize} />
      <Button
        variant={"solid"}
        background={"green.400"}
        size={"lg"}
        color={"white"}
        textAlign={"left"}
        borderRadius={"none"}
        borderBottomRadius={"md"}
        textTransform={"uppercase"}
        border={"2px solid white"}
        _hover={{
          background: "green.400",
          outline: "0px",
          border: "2px solid white",
        }}
      >
        <Text fontSize={"lg"}>
          Enter Now{" "}
          <FontAwesomeIcon fontSize={ICONS_SIZE_SMALL} icon={faChevronRight} />
        </Text>
      </Button>
    </Card>
  );
};

export default CompetitionsCard;
