import { Flex } from "@chakra-ui/react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL } from "../../../lib/consts";

export const DeleteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <Flex position={"absolute"} top={0} right={0} p={4}>
      <Flex
        background={"green.400"}
        borderRadius={"50%"}
        h={"50px"}
        w={"50px"}
        justifyContent={"center"}
        alignItems={"center"}
        _hover={{ background: "green.600", transition: "all .3s easeInOut" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <FontAwesomeIcon
          color={"black"}
          fontSize={ICONS_SIZE_SMALL}
          icon={faX}
        />
      </Flex>
    </Flex>
  );
};
