import {
  useRadio,
  useRadioGroup,
  HStack,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box
      as="label"
      w={"100%"}
      textAlign={"center"}
      opacity={props.isDisabled ? 0.5 : 1}
    >
      <input {...input} disabled={props.isDisabled} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "green.600",
          color: "white",
          borderColor: "green.600",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface QuestionRadioProps {
  options: string[];
  name: string;
  onChange: (value?: string) => void;
  isDisabled?: boolean;
}

function QuestionRadio({
  options,
  name,
  onChange,
  isDisabled,
}: QuestionRadioProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    onChange: onChange,
  });

  const group = getRootProps();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <HStack
      {...group}
      justifyContent={"space-between"}
      flexDir={isMobile ? "column" : "row"}
    >
      {options.map((value: any, index: number) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard
            key={`${value}-${index}`}
            {...radio}
            isDisabled={isDisabled}
          >
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export default QuestionRadio;
