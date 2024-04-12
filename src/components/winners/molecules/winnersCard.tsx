import { Image, useDisclosure, useToast } from "@chakra-ui/react";
import WinnersName from "../atoms/winnersName";
import WinnersPrize from "../atoms/winnersPrize";
import WinnersTicket from "../atoms/winnersTicket";
import Card from "../../ui/card/card";
import { DeleteBtn } from "../../ui/card/deleteBtn";
import { useRecoilState } from "recoil";
import {
  isAdminAtom,
  shouldRefetchWinnerAtom,
  tokenAtom,
} from "../../navigation/utils/navigation.recoil";
import { BasicModal } from "../../ui/modal";
import useAxios from "../../../lib/axios/useAxios";
import { DeleteWinner } from "../core/winners.service";
import { useEffect } from "react";
import { displayToast } from "../../ui/toast";

interface WinnersCardProps {
  competitionName: string;
  image: string;
  name: string;
  ticketNumber: string;
  width?: string;
  id: string;
}

const WinnersCard = ({
  competitionName,
  image,
  name,
  ticketNumber,
  width,
  id,
}: WinnersCardProps) => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [token] = useRecoilState(tokenAtom);
  const toast = useToast();
  const [shouldRefetchWinner, setShouldRefetchWinner] = useRecoilState(
    shouldRefetchWinnerAtom
  );
  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: DeleteWinner,
    paramsOfFetch: { id: id, token: token.token },
  });

  const handleDelete = async () => {
    await loadData();
  };

  useEffect(() => {
    if (data) {
      displayToast({
        id: "winnersDeletedSuccess",
        type: "success",
        text: "Winner deleted successfully.",
        toast,
      });
    }
    if (error) {
      displayToast({
        id: "winnersError",
        type: "error",
        text: "There was a problem deleting the winner. Please try again later or contact the administrator.",
        toast,
      });
    }
  }, [error, data]);

  useEffect(() => {
    if (shouldRefetchWinner) {
      loadData();
      setShouldRefetchWinner(false);
    }
  }, [shouldRefetchWinner]);

  return (
    <Card bg={"gray.900"} hover={""} width={width}>
      <BasicModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDelete}
        isLoading={isLoading}
        title="Delete Winner"
        body="Are you sure you want to delete this winner? You will not be able to recover it after it's gone."
      />
      {isAdmin && <DeleteBtn onClick={onOpen} />}
      <Image
        w={"100%"}
        h={"100%"}
        maxH={"550px"}
        objectFit={"cover"}
        src={image}
        alt="winner"
        borderTopRadius={"md"}
      />
      <WinnersName name={name} />
      <WinnersPrize prize={competitionName} />
      <WinnersTicket ticket={ticketNumber} />
    </Card>
  );
};

export default WinnersCard;
