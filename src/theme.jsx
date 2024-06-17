import "@fontsource/inter";
import "@fontsource-variable/noto-sans-jp";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: `'Inter', 'Noto Sans JP Variable', sans-serif`,
    body: `'Inter', 'Noto Sans JP Variable', sans-serif`,
  }
});

export default theme;
