import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
  Spinner,
} from "@chakra-ui/react";

interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  title: string;
  body: string;
  isLoading?: boolean;
}

export const BasicModal = ({
  isOpen,
  onClose,
  onClick,
  title,
  body,
  isLoading,
}: BasicModalProps) => {
  const handleClick = async () => {
    await onClick();
    onClose();
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"} color={"white"} maxW={"xl"}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              variant="outline"
              color={"white"}
              _hover={{ color: "black", bg: "white", borderColor: "white" }}
              onClick={onClose}
              isDisabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={handleClick}
              isDisabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Delete"}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
