import { HStack, Box, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
    return (
        <HStack w={"100%"} justifyContent={"center"}>
            <Box p={3}>
                <Text fontSize={"3xl"}>Mi Portafolio</Text>
            </Box>
        </HStack>
    )
}

export default Header