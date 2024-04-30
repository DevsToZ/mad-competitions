import WinnersCard from "./molecules/winnersCard";
import { useRecoilState } from "recoil";
import {
  isAdminAtom,
  shouldRefetchWinnerAtom,
} from "../navigation/utils/navigation.recoil";
import CardContainer from "../ui/card/cardContainer";
import AddWinnerForm from "./molecules/addWinnerForm";
import AddCard from "../ui/card/addCard";
import { Flex, Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import useAxios from "../../lib/axios/useAxios";
import { GetWinners } from "./core/winners.service";
import { useEffect, useState } from "react";
import { displayToast } from "../ui/toast";
import { Pagination } from "../ui/pagination";
import { PagesURL } from "../../routes/consts";
import { MetaTags } from "../ui/meta-tags";

const Winners = () => {
  const toast = useToast();
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [shouldRefetchWinner, setShouldRefetchWinner] = useRecoilState(
    shouldRefetchWinnerAtom
  );
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: GetWinners,
    paramsOfFetch: { page: currentPage || 0, size: 9 },
    loadOnMount: true,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage !== null) {
      loadData();
    }
  }, [currentPage]);

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

  useEffect(() => {
    if (shouldRefetchWinner === true) {
      loadData();
      setShouldRefetchWinner(false);
    }
  }, [shouldRefetchWinner]);

  return (
    <>
      <MetaTags
        title="Winners"
        primary_description="Mad Competitions Winners."
        secondary_description="Check out our winners!"
        url={PagesURL.WINNERS}
      />
      <CardContainer>
        {isAdmin && (
          <AddCard
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            form={<AddWinnerForm onClose={onClose} />}
            title={"Add Winner"}
          />
        )}
        {isLoading ? (
          <Spinner color="white" />
        ) : (
          data?.winners?.map((card: any, index: number) => (
            <WinnersCard
              key={`${card.id}-${index}`}
              id={card.id}
              competitionName={card.competitionName}
              image={card.image}
              name={card.name}
              ticketNumber={card.ticketNumber}
            />
          ))
        )}
        {!isLoading && data?.winners.length === 0 && (
          <Flex color={"white"} opacity={0.25}>
            No winners yet. Be our first winner!
          </Flex>
        )}
        {error && (
          <Flex color={"white"} opacity={0.25}>
            Error loading winners.
          </Flex>
        )}
      </CardContainer>
      <Pagination
        currentPage={currentPage || 0}
        //@ts-ignore
        setCurrentPage={setCurrentPage}
        totalPages={totalPages === 0 ? 1 : 0}
      />
    </>
  );
};

export default Winners;
