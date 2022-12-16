/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import "@fontsource/alegreya";
import {mode} from "@chakra-ui/theme-tools"; 
const prefix = process.env.NEXT_PUBLIC_ASSET || "";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("#1a1c1a", "#fafafa")(props),
      bg: mode("#fafafa", "#1a1c1a")(props),
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

const queryClient = new QueryClient();

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  body: "Alegreya",
  heading: "Alegreya",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ colors, config, fonts, styles });

export const AppContext = createContext<AppContextInterface | null>(null);

function MyApp({ Component, pageProps }) {
  const [category, setCategory] = useState("technology");
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ category, setCategory }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
