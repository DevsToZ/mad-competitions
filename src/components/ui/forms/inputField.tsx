import {
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useField, FieldProps } from "@formiz/core";
import { Text } from "@chakra-ui/react";

type MyFieldProps<FormattedValue> = FieldProps<string, FormattedValue>;

interface InputFieldProps {
  leftEl?: any;
  rightEl?: any;
  type?: string;
  label?: string;
  name: string;
  placeholder?: string;
  isReadonly?: boolean;
}

const InputField = <FormattedValue = string,>(
  props: MyFieldProps<FormattedValue> | InputFieldProps | any
) => {
  const { value, setValue, isValid, errorMessage } = useField(props);
  const {
    leftEl,
    rightEl,
    name,
    type,
    label,
    placeholder = label,
    isReadonly,
  } = props;
  return (
    <Flex flexDir={"column"} gap={0.5}>
      <Flex flexDir={"column"} width={"100%"}>
        <FormLabel fontSize={"sm"} color={"white"} textTransform={"capitalize"}>
          {label ? label : name}
        </FormLabel>
        <InputGroup>
          {leftEl && (
            <InputLeftAddon
              pointerEvents={"none"}
              color={"green.400"}
              bg={"transparent"}
              borderColor={isValid ? "" : "red.500"}
            >
              {leftEl}
            </InputLeftAddon>
          )}
          <Input
            color={"white"}
            bg={"gray.900"}
            name={name}
            type={type}
            value={value ?? ""}
            onChange={(e) => setValue(e.target.value)}
            borderColor={isValid ? "" : "red.500"}
            placeholder={placeholder}
            isDisabled={isReadonly}
            _focusVisible={{ borderColor: isValid ? "green.400" : "red.500" }}
          />

          {rightEl && (
            <InputRightAddon
              pointerEvents={"none"}
              color={"green.400"}
              borderColor={isValid ? "" : "red.500"}
            >
              {rightEl}
            </InputRightAddon>
          )}
        </InputGroup>
      </Flex>

      <Text fontSize={"xs"} color={"red.500"}>
        {!isValid ? `${errorMessage}` : "‎"}
      </Text>
    </Flex>
  );
};

export default InputField;
