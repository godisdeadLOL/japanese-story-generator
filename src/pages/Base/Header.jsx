import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text, useDisclosure } from "@chakra-ui/react";

import JapanIcon from "@/components/JapanIcon";
import InfoModal from "./InfoModal";

const Header = () => {
  // const [infoOpen, setInfoOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <InfoModal isOpen={isOpen} onClose={onClose} />
      
      <HStack width="100%" spacing={4} padding={4} position="absolute">
        <JapanIcon boxSize={6}></JapanIcon>

        <Text fontSize="md" fontFamily="mono" fontWeight="bold" flexGrow={1}>
          story generator
        </Text>

        <IconButton
          onClick={onOpen}
          icon={<QuestionOutlineIcon />}
          aria-label={"Info"}
        />
      </HStack>
    </>
  );
};

export default Header;
