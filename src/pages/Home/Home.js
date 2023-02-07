import React from "react";
import { VStack, Image, Text, Flex, HStack, Card, CardHeader } from "@chakra-ui/react";
import source from "./img/code.webp"
const Home = () => {
    return (
        <VStack w={"100%"}>
            <Flex justifyContent={"center"} w={"100%"} bg={"#A0DAFF"}>
                <Text fontSize={"4xl"} color={"#575BF5"} py={5} fontWeight={"extrabold"}>
                    Hola! Mi nombre es Adan Rodriguez, soy Desarrollador FullStack & DBA
                </Text>
            </Flex>
            <Image my={0} src={source} w={"100%"} maxH={"700px"} alt="Introduction"/>

            <HStack gap={3} mt={5}>
                <Card bg={"#333333"}>
                    <CardHeader color={"White"}>
                        Nombre
                    </CardHeader>
                </Card>
            </HStack>
        </VStack>
    )
}

export default Home