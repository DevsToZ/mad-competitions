import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { useParams } from "react-router-dom";
import useAxios from "../lib/axios/useAxios";
import { GetParticipants } from "../components/competitions/core/competitions.service";
import { useEffect } from "react";
import { displayToast } from "../components/ui/toast";
import { tokenAtom } from "../components/navigation/utils/navigation.recoil";
import { useRecoilState } from "recoil";

export const ParticipantsPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const [token] = useRecoilState(tokenAtom);
  const { data, error } = useAxios({
    fetchFn: GetParticipants,
    paramsOfFetch: { id: id, token: token.token },
    loadOnMount: true,
  });

  useEffect(() => {
    if (error) {
      displayToast({
        id: "participantsError",
        type: "error",
        text: "There was a problem retrieving the participants. Please try again later or contact the administrator.",
        toast,
      });
    }
  }, [error]);
  return (
    <Page>
      <Header title="Participants" />

      <Flex
        justifyContent={"center"}
        flexWrap={"wrap"}
        color={"white"}
        my={8}
        minH={"53vh"}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Ticket Number</Th>
                <Th>Participant</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((participant: any, idx: number) =>
                participant.tickets.map((ticket: any, index: number) => (
                  <Tr key={`${participant.id}-${ticket.id}-${idx}-${index}`}>
                    <Td>{ticket}</Td>
                    <Td>{participant.name}</Td>
                  </Tr>
                ))
              )}
              {data?.length === 0 && (
                <Tr>
                  <Td>-</Td>
                  <Td>There are no participants yet.</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Footer />
    </Page>
  );
};
