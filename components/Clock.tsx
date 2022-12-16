import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date);
    }, 1000);
  }, []);
  return (
    <VStack alignItems={"flex-end"}>
      <Text fontSize={"3xl"}>{time && time.toLocaleTimeString()}</Text>
      <Text fontSize={"lg"}>{time && time.toDateString()}</Text>
    </VStack>
  );
};
export const Covid = () => {
  useEffect(() => {}, []);
  return null;
};
