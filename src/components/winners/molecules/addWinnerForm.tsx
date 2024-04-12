import {
  Button,
  ButtonGroup,
  Flex,
  FormLabel,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Formiz, useForm, useFormFields } from "@formiz/core";
import InputField from "../../ui/forms/inputField";
import { useRecoilState } from "recoil";
import { fileToUploadAtom } from "../utils/winners.recoil";
import FileUpload from "../../ui/forms/fileUpload";
import useAxios from "../../../lib/axios/useAxios";
import { AddWinner } from "../core/winners.service";
import { useEffect } from "react";
import { displayToast } from "../../ui/toast";
import { tokenAtom } from "../../navigation/utils/navigation.recoil";

interface AddWinnerFormProps {
  onClose: () => void;
}

const AddWinnerForm = ({ onClose }: AddWinnerFormProps) => {
  const toast = useToast();
  const addWinnerForm = useForm();
  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);
  const [token] = useRecoilState(tokenAtom);

  const values = useFormFields({
    connect: addWinnerForm,
    selector: (field) => field.value,
  });

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: AddWinner,
    paramsOfFetch: {
      name: values.name,
      competitionName: values.competition,
      ticketNumber: values.ticketNumber,
      file: fileToUpload,
      token: token.token,
    },
  });

  const handleSubmit = async () => {
    loadData();
    setFileToUpload(null);
  };

  useEffect(() => {
    if (data) {
      displayToast({
        id: "winnersSuccess",
        type: "success",
        text: "Winner added successfully.",
        toast,
      });
      onClose();
    }
    if (error) {
      displayToast({
        id: "winnersError",
        type: "error",
        text: "There was a problem adding the winner. Please try again later or contact the administrator.",
        toast,
      });
    }
  }, [error, data]);

  return (
    <Flex flexDir={"column"} gap={4}>
      <Formiz connect={addWinnerForm}>
        <InputField name="name" type="text" label="Winner Name" />

        <InputField name="competition" type="text" label="Won Competition" />
        <InputField name="ticketNumber" type="number" label="Ticket Number" />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Winner Picture
          </FormLabel>
          <FileUpload />
        </Flex>
      </Formiz>
      <ButtonGroup py={4} justifyContent={"flex-end"}>
        <Button
          variant={"outline"}
          color={"white"}
          _hover={{ color: "black", bg: "white", borderColor: "white" }}
          onClick={handleSubmit}
          isDisabled={isLoading}
        >
          {!isLoading ? "Create" : <Spinner />}
        </Button>
        <Button
          variant={"solid"}
          _hover={{ borderColor: "white" }}
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default AddWinnerForm;
