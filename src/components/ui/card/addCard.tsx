import { Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import FormModal from "../forms/formModal";
import Card from "./card";
import { ICONS_SIZE } from "../../../lib/consts";

interface AddCardProps {
  form: React.ReactNode;
  title: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AddCard = ({ form, title, isOpen, onOpen, onClose }: AddCardProps) => {
  return (
    <Card bg={"gray.900"} onClick={onOpen} centered>
      <FormModal
        form={form}
        isOpen={isOpen}
        onClose={onClose}
        title={`${title} Form`}
      />
      <Flex
        fontSize={"4xl"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        color={"white"}
        gap={4}
      >
        <Text>{title}</Text>
        <FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCirclePlus} />
      </Flex>
    </Card>
  );
};

export default AddCard;
