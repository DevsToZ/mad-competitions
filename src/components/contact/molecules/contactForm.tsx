import { Formiz, useForm, useFormFields } from "@formiz/core";
import { isEmail, isNotEmptyString, isRequired } from "@formiz/validations";
import InputField from "../../ui/forms/inputField";
import TextareaForm from "../../ui/forms/textareaForm";
import {
  Button,
  ButtonGroup,
  Flex,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS_SIZE_SMALL, ReCAPTCHA_KEY } from "../../../lib/consts";
import { useSubmit } from "@formspree/react";
import { displayToast } from "../../ui/toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";

interface ContactFormProps {
  order: number;
}

const ContactForm = ({ order }: ContactFormProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const toast = useToast();
  const submit = useSubmit(import.meta.env.VITE_FORMSPREE_ID, {
    onError: (_e) =>
      displayToast({
        id: "contactError",
        type: "error",
        text: "There was an error sending the message. Please try again or use a different communication channel.",
        toast,
      }),
    onSuccess: (_e) =>
      displayToast({
        id: "contactSuccess",
        type: "success",
        text: "Your message has been sent successfully. We will get back to you as soon as possible.",
        toast,
      }),
  });

  const form = useForm({ onSubmit: submit });
  const [isTablet] = useMediaQuery("(min-width: 768px)", { ssr: false });

  const values = useFormFields({
    connect: form,
    selector: (field) => field.value,
  });

  const checkForEmptyFields = () => {
    // worst implementation ever but should work for now :/
    if (
      !values.name ||
      !values.email ||
      !values.address ||
      !values.message ||
      !token
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  useEffect(() => {
    checkForEmptyFields();
  }, [values, token]);

  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      order={order}
      p={4}
      w={"100%"}
      h={"100%"}
      borderRight={!isTablet ? "none" : "1px solid"}
      borderRightColor={"gray.600"}
    >
      <Flex
        w={"100%"}
        flexDir={"column"}
        gap={4}
        alignItems={"flex-end"}
        pt={4}
      >
        <Formiz
          connect={form}
          children={
            <Flex
              flexDir={"column"}
              w={"100%"}
              h={"100%"}
              alignItems={"flex-end"}
            >
              <Flex flexDir={"column"} w={"100%"}>
                <InputField
                  name="name"
                  type="text"
                  leftEl={
                    <FontAwesomeIcon
                      fontSize={ICONS_SIZE_SMALL}
                      icon={faUser}
                    />
                  }
                  placeholder={"Name"}
                  validations={[
                    {
                      handler: isRequired() && isNotEmptyString(),
                      message: "Name is invalid",
                    },
                  ]}
                />
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <InputField
                  name="email"
                  type="email"
                  leftEl={
                    <FontAwesomeIcon
                      fontSize={ICONS_SIZE_SMALL}
                      icon={faEnvelope}
                    />
                  }
                  placeholder={"Email"}
                  validations={[
                    {
                      handler: isRequired() && isEmail(),
                      message: "Email is invalid",
                    },
                  ]}
                />
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <InputField
                  name="address"
                  type="text"
                  leftEl={
                    <FontAwesomeIcon
                      fontSize={ICONS_SIZE_SMALL}
                      icon={faLocationDot}
                    />
                  }
                  placeholder={"Address"}
                  validations={[
                    {
                      handler: isRequired() && isNotEmptyString(),
                      message: "Address is invalid",
                    },
                  ]}
                />
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <TextareaForm
                  name="message"
                  validations={[
                    {
                      handler: isRequired() && isNotEmptyString(),
                      message: "Message is invalid",
                    },
                  ]}
                />
              </Flex>
            </Flex>
          }
        />
        <Flex>
          <ReCAPTCHA sitekey={ReCAPTCHA_KEY} onChange={(e) => setToken(e)} />
        </Flex>
        <ButtonGroup>
          <Button
            variant={"outline"}
            color={"white"}
            _hover={{ color: "black", bg: "white", borderColor: "white" }}
            onClick={() => form.reset()}
          >
            Clear
          </Button>
          <Button
            variant={"solid"}
            _hover={{ borderColor: "white" }}
            onClick={() => {
              form.submit();
              form.reset();
            }}
            isDisabled={!isFormValid}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
