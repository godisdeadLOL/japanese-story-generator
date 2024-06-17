import {
  HStack,
  NumberInput,
  NumberInputField,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

const NumberSliderInput = ({ value, min, max, onChange, onBlur }) => {

  const parseValue = (val) => {
    const parsed = parseInt(val)
    return !parsed ? 0 : parsed
  }

  return (
    <HStack spacing={4}>
      <NumberInput
        maxW="100px"
        min={min} max={max}
        value={value}
        onChange={val => onChange(parseValue(val))}
        onBlur={onBlur}
      >
        <NumberInputField />
      </NumberInput>

      <Slider
        colorScheme="pink"
        value={value}
        min={min}
        max={max}
        focusThumbOnChange={false}
        onChange={onChange}
        onBlur={onBlur}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </HStack>
  );
};

export default NumberSliderInput;
