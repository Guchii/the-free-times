/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import styles from "../styles/index.module.css";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import GithubCorner from "react-github-corner";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Link,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "./_app";

const prefix = process.env.NEXT_PUBLIC_ASSET || "";

const Loading = () => (
  <Grid placeItems={"center"} w="full" h={"full"}>
    <VStack gap={4}>
      <Spinner size="xl" />
      <Text fontWeight={"bold"}>loading the paper</Text>
    </VStack>
  </Grid>
);

export default function Home() {
  const { category, setCategory } = useContext(AppContext);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery(
    ["news", category],
    async () => {
      const {
        data: { data },
        status,
      } = await axios.get(
        `https://inshortsapi.vercel.app/news?category=${category}`
      );
      return data;
    },
    {
      onSuccess: (data) => {
        setArr(data);
      },
    }
  );
  if (query.isLoading) return <Loading />;
  return (
    <Box w="full" p={8}>
      <main style={{ overflow: "hidden" }}>
        <Grid templateColumns={"1fr 1fr 1fr"} gap={8}>
          {arr.map((dat, i) => (
            <Card key={i} _hover={{ shadow: "xl" }} transitionDuration="0.3s">
              <CardHeader>
                <Text fontSize={"md"} fontWeight="bold">
                  {dat.title}
                </Text>
              </CardHeader>
              <CardBody>
                <Text fontSize={"sm"}>{dat.content}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  _hover={{ textDecoration: "none" }}
                  isExternal
                  as={Link}
                  href={dat.readMoreUrl}
                >
                  Read More &rarr;
                </Button>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </main>
      <Box as={"footer"} p={8}>
        <Text>
          Made with ❤️ by{" "}
          <Link href="https://github.com/guchii" isExternal>
            Guchii
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
