import NumberSliderInput from "@/components/NumberSliderInput";
import useFormFields from "@/hooks/useFormFields";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Textarea,
  Divider,
  Button,
  VStack,
  FormHelperText,
} from "@chakra-ui/react";

const StoryForm = ({ onSubmit, form }) => {
  const { values, register } = form //useFormFields({ level: 'Novice', notes: '', sentences: 3 })

  return (
    <VStack spacing={8} alignItems="stretch">
      <FormControl>
        <FormLabel> Level </FormLabel>
        <Select
          variant="filled"
          {...register('level')}
        >
          <option>Novice</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Select>
        <FormErrorMessage>Level is not selected</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel> Additional notes </FormLabel>
        <Textarea
          maxLength={100}
          resize="none"
          rows={4}
          placeholder="What kind of story you want"
          {...register('notes')}
        />
        <FormHelperText textAlign='right'> {values['notes'].length} / 100 </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel> Sentence count </FormLabel>

        <NumberSliderInput
          min={1}
          max={10}
          {...register('sentences')}
        />
      </FormControl>

      <Divider />

      <Button colorScheme="pink" onClick={() => onSubmit(values)}>
        Generate
      </Button>
    </VStack>
  );
};

export default StoryForm;
