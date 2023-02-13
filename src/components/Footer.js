import React from "react";
import { HStack } from '@chakra-ui/react';
import { SiLinkedin, SiGithub } from "react-icons/si"
import { RiProfileFill } from "react-icons/ri"
import { Link } from 'react-router-dom';
import myCV from "./files/CV_AdanRodriguez_compressed.pdf"
const Footer = () => {
    return (
        <HStack w={"100%"} pb={5} justifyContent={"center"}>
            <Link to="https://www.linkedin.com/in/adán-rodríguez">
                <SiLinkedin size={"30px"} color="#575BF5"/>
            </Link>
            <Link to="https://github.com/adanrdrgz">
                <SiGithub size={"30px"} color="#575BF5"/>
            </Link>
            <a href={myCV} download >
                <RiProfileFill size={"30px"} color="#575BF5"/>
            </a>

        </HStack>
    )
}

export default Footer