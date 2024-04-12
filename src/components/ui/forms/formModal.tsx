import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  form: React.ReactNode;
  title: string;
}

const FormModal = ({ isOpen, onClose, form, title }: ModalComponentProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"} color={"white"} maxW={"xl"}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{form}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
