import { HStack, Box, Text, List } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HStack justifySelf={"flex-start"} w={"100%"} justifyContent={"space-between"}>
            <Box p={3}>
                <Text fontSize={"3xl"}>Mi Portafolio</Text>
            </Box>

            <HStack fontSize={"md"} p={3} justifyContent="space-around">
                <Text>Mis Proyectos</Text>
                <Text>Mi CV</Text>
            </HStack>
        </HStack>
    )
}

export default Header