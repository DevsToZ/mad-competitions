import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { MAX_TICKET_NUMBER } from "../../lib/consts";

interface TicketsSliderProps {
  maxNumberOfTickets: number;
  currentTicketNumber: number;
  sliderValue: number;
  setSliderValue: (val: number) => void;
  isDisabled?: boolean;
  maxPerCustomer?: number;
}

const TicketsSlider = ({
  maxNumberOfTickets,
  currentTicketNumber,
  sliderValue,
  setSliderValue,
  isDisabled,
  maxPerCustomer = MAX_TICKET_NUMBER,
}: TicketsSliderProps) => {
  return (
    <Slider
      isDisabled={isDisabled}
      colorScheme="green"
      aria-label="slider-ex-6"
      onChange={(val) => {
        if (
          val <= maxNumberOfTickets - currentTicketNumber &&
          val <= maxPerCustomer
        )
          setSliderValue(val);
      }}
      value={sliderValue}
    >
      <SliderMark
        value={sliderValue}
        textAlign="center"
        bg="green.400"
        color="white"
        mt="-8"
        ml="-10"
        w="20"
        fontSize={"sm"}
      >
        {sliderValue} Tickets
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default TicketsSlider;
