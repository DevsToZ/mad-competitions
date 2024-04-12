import { Button, Flex, Text } from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number | null) => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
}: PaginationProps) => {
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Flex
      gap={4}
      alignItems={"center"}
      justifyContent={"center"}
      p={8}
      margin={"0 auto"}
      w={"100%"}
    >
      <Button
        onClick={handlePrevPage}
        isDisabled={currentPage <= 0}
        variant={"outline"}
        size={"sm"}
        color={"white"}
        _hover={{ color: "black", bg: "white", borderColor: "white" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Text color={"white"} fontSize={"lg"}>{`${
        currentPage + 1
      } / ${totalPages}`}</Text>
      <Button
        onClick={handleNextPage}
        isDisabled={currentPage >= totalPages - 1}
        variant={"outline"}
        size={"sm"}
        color={"white"}
        _hover={{ color: "black", bg: "white", borderColor: "white" }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </Flex>
  );
};
