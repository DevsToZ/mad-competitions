import {
  Button,
  ButtonGroup,
  Flex,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Formiz, useForm, useFormFields } from "@formiz/core";
import InputField from "../../ui/forms/inputField";
import TextareaForm from "../../ui/forms/textareaForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { filesToUploadAtom } from "../utils/competitions.recoil";
import { fileToUploadAtom } from "../../winners/utils/winners.recoil";
import { useEffect, useState } from "react";
import { ICONS_SIZE } from "../../../lib/consts";
import { BE_Tags, TagsArray, tagToLabel } from "../utils/consts";
import useAxios from "../../../lib/axios/useAxios";
import { AddCompetition } from "../core/competitions.service";
import { UploadImage } from "../../ui/forms/imageUpload";
import { displayToast } from "../../ui/toast";
import {
  shouldRefetchAtom,
  tokenAtom,
} from "../../navigation/utils/navigation.recoil";

interface AddCompetitionFormProps {
  onClose: () => void;
}

const AddCompetitionForm = ({ onClose }: AddCompetitionFormProps) => {
  const toast = useToast();
  const [, setShouldRefetch] = useRecoilState(shouldRefetchAtom);
  const addCompetitionForm = useForm();
  const [token] = useRecoilState(tokenAtom);

  const values = useFormFields({
    connect: addCompetitionForm,
    selector: (field) => field.value,
  });

  const [filesToUpload, setFilesToUpload] = useRecoilState(filesToUploadAtom);
  const [fileToUpload, setFileToUpload] = useRecoilState(fileToUploadAtom);

  const [checkedItem, setCheckedItem] = useState<BE_Tags | string>(
    BE_Tags.OTHER
  );
  const [correctAnswer, setCorrectAnswer] = useState<string>("1" as string);

  const { data, isLoading, error, loadData } = useAxios({
    fetchFn: AddCompetition,
    paramsOfFetch: {
      title: values.title,
      description: values.description,
      question: {
        question: values.question,
        answer1: values.answer1,
        answer2: values.answer2,
        answer3: values.answer3,
        correctAnswer: correctAnswer,
      },
      endTime: values.endTime,
      alternativePrize: values.alternativePrize,
      tag: checkedItem,
      pricePerTicket: values.pricePerTicket,
      maxNumberOfTickets: values.maxNumberOfTickets,
      images: fileToUpload &&
        // @ts-ignore
        filesToUpload && [fileToUpload[0], ...filesToUpload],
      token: token.token,
    },
  });

  const handleSubmit = async () => {
    await loadData();
  };

  const resetForm = () => {
    addCompetitionForm.reset();
    setFilesToUpload([]);
    setFileToUpload(null);
  };

  useEffect(() => {
    setFilesToUpload([]);
    setFileToUpload(null);
  }, []);

  useEffect(() => {
    if (data) {
      onClose();
      resetForm();
      displayToast({
        id: "addCompetitionSuccess",
        type: "success",
        text: "Competition added successfully.",
        toast,
      });
      setShouldRefetch(true);
    }
    if (error) {
      displayToast({
        id: "competitionsError",
        type: "error",
        text: "There was a problem adding the competition. Please try again later or contact the administrator.",
        toast,
      });
    }
  }, [data, error]);

  return (
    <Flex flexDir={"column"} gap={4} width={"100%"}>
      <Formiz connect={addCompetitionForm}>
        <InputField
          name="title"
          type="text"
          label="Competition Title"
          isReadonly={isLoading}
        />
        <TextareaForm
          name="description"
          type="text"
          label="Competition Description"
          height={"100px"}
          placeholder={"Competition Description"}
          isReadonly={isLoading}
        />

        <Flex gap={4}>
          <InputField
            name="maxNumberOfTickets"
            type="number"
            label="Max Number Of Tickets"
            isReadonly={isLoading}
          />
          <InputField
            name="pricePerTicket"
            type="number"
            label="Price Per Ticket"
            isReadonly={isLoading}
          />
        </Flex>
        <Flex gap={4}>
          <InputField
            name="question"
            type="text"
            label="Question"
            isReadonly={isLoading}
          />
          <Flex flexDirection={"column"} width={"100%"}>
            <FormLabel
              fontSize={"sm"}
              color={"white"}
              textTransform={"capitalize"}
            >
              Correct Answer
            </FormLabel>
            <Select
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder="Correct answer"
              color={"black"}
              bg={"white"}
              isDisabled={isLoading}
            >
              <option value="1">Answer 1</option>
              <option value="2">Answer 2</option>
              <option value="3">Answer 3</option>
            </Select>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <InputField
            name="answer1"
            type="text"
            label="Answer 1"
            isReadonly={isLoading}
          />
          <InputField
            name="answer2"
            type="text"
            label="Answer 2"
            isReadonly={isLoading}
          />
          <InputField
            name="answer3"
            type="text"
            label="Answer 3"
            isReadonly={isLoading}
          />
        </Flex>
        <InputField
          name="endTime"
          type="datetime-local"
          label="End Date"
          rightEl={<FontAwesomeIcon fontSize={ICONS_SIZE} icon={faCalendar} />}
          isReadonly={isLoading}
        />
        <InputField
          name="alternativePrize"
          type="number"
          label="Alternative Prize"
          isReadonly={isLoading}
        />

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Tags
          </FormLabel>

          <RadioGroup colorScheme="green" isDisabled={isLoading}>
            <Stack direction="row" spacing={4}>
              {TagsArray.map((tag, index) => (
                <Radio
                  key={`${tag}-${index}`}
                  value={tag}
                  isChecked={checkedItem === tag}
                  onChange={(e) => setCheckedItem(e.target.value)}
                >
                  {tagToLabel(tag)}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Flex>

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Image Showcase
          </FormLabel>
          <UploadImage
            file={fileToUpload}
            setFile={setFileToUpload as any}
            isReadonly={isLoading}
            maxFiles={1}
          />
        </Flex>

        <Flex flexDir={"column"}>
          <FormLabel
            fontSize={"sm"}
            color={"white"}
            textTransform={"capitalize"}
          >
            Images Carousel
          </FormLabel>
          <UploadImage
            file={filesToUpload}
            setFile={setFilesToUpload as any}
            isReadonly={isLoading}
          />
        </Flex>

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
            onClick={() => {
              onClose();
              resetForm();
            }}
            isDisabled={isLoading}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Formiz>
    </Flex>
  );
};

export default AddCompetitionForm;
