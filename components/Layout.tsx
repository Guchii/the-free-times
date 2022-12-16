import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, ReactNode, useContext } from "react";
import GithubCorner from "react-github-corner";
import { AppContext } from "../pages/_app";
import { Clock } from "./Clock";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { category, setCategory } = useContext(AppContext);
  return (
    <Grid
      templateColumns={"300px auto"}
      templateRows="120px auto"
      templateAreas={"'side head head''side main main''side main main'"}
      w="full"
      h={"100vh"}
    >
      <Box h="100vh" gridArea="side" p={8}>
        <VStack
          h={"full"}
          spacing={4}
          bg="green.50"
          rounded={"xl"}
          justifyContent={"center"}
        >
          {[
            "technology",
            "national",
            "business",
            "sports",
            "world",
            "politics",
          ].map((item, i) => (
            <Button
              onClick={() => setCategory(item)}
              w={"full"}
              key={i}
              bg="none"
            >
              {item}
            </Button>
          ))}
        </VStack>
      </Box>
      <Flex
        justifyContent={"space-between"}
        gridArea="head"
        p={8}
        alignItems="center"
      >
        <VStack alignItems={"flex-start"}>
          <Heading display={"flex"} textTransform={"uppercase"}>
            Free Times <Text fontSize={"sm"}>{category}</Text>
          </Heading>
          <i>Free to read e-paper with concise articles and many categories</i>
        </VStack>
        <Clock />
      </Flex>
      <Box gridArea="main" overflowY={"scroll"}>
        {children}
      </Box>
      <GithubCorner
        href="https://github.com/Guchii/the-free-times"
        octoColor="#fafafa"
        bannerColor="#1a1c1a"
        direction="left"
      />
    </Grid>
  );
};

export default Layout;
