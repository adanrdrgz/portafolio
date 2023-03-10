import React, { useState, useEffect } from "react";
import { Image, Text, Flex, HStack, VStack, Card, CardHeader, CardBody, List, ListItem } from "@chakra-ui/react";
import introImg from "./img/code.webp"
import frontImg from "./img/coding-icon.jpg"
import backImg from "./img/back.svg"
import { AiOutlineHtml5 } from "react-icons/ai"
import { TbBrandCss3 } from "react-icons/tb"
import { GiDatabase } from "react-icons/gi"
import { SiJavascript, SiTypescript, SiAngular, SiReact, SiPython, SiKotlin, SiSpringboot } from "react-icons/si"
import "./Home.css"
import { projectService } from '../../services/projectService';
import { Link } from 'react-router-dom';


const Home = () => {

    const [projects, setProjects] = useState([])

    const getProjects = () => {
        const pr = projectService.getProjects()
        setProjects(pr)
        
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <Flex w={"100%"} direction="column" alignContent={"center"} gap={3}>
            <Flex direction={"column"} justifyContent={"center"} w={"100%"} bg={"#A0DAFF"}>
                <Text  fontSize={"4xl"} color={"#575BF5"} py={5} fontWeight={"extrabold"} m={"auto"}>
                    Hola! Mi nombre es Adan Rodriguez, soy Desarrollador FullStack & DBA
                </Text>
                <Image mt={0} src={introImg} w={"100%"} maxH={"700px"} alt="Introduction"/>
            </Flex>

            <Text color={"#EEEEEE"} borderBottom={"1px"} borderColor={"#555555"} fontSize="4xl" mx={"auto"}>Mis Aptitudes</Text>

            <HStack gap={3} my={5} justifyContent="center" flexWrap={"wrap"} alignContent={"stretch"}>
                <Card bg={"#333333"} px={10} >
                    <CardHeader color={"#EEEEEE"} borderBottom="1px" borderColor={"#555555"}>
                            <Image src={frontImg} maxW={"40px"}  mx={"auto"} />
                            <Text p={2} fontSize={"2xl"}> Front-End </Text>    
                    </CardHeader>

                    <CardBody>
                        <List color={"#EEEEEE"} fontSize={"lg"} >
                            <ListItem display={"flex"} gap={2}> <AiOutlineHtml5 className="icon-centered" color=" #E34C26"/> HTML5 </ListItem>
                            <ListItem display={"flex"} gap={2}> <TbBrandCss3 className="icon-centered" color="#2965F1"/> CSS3 </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiJavascript className="icon-centered" color="#F0DB4F" /> JavaScript </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiTypescript className="icon-centered" color="#007ACC"/> TypeScript </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiAngular className="icon-centered" color="#DD1B16"/> Angular </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiReact className="icon-centered" color="#61DBFB"/> React </ListItem>
                        </List>
                    </CardBody>
                </Card>

                <Card bg={"#333333"} px={10} alignSelf={"stretch"}>
                    <CardHeader color={"#EEEEEE"} borderBottom="1px" borderColor={"#555555"}>
                            <Image src={backImg} maxW={"40px"}  mx={"auto"} />
                            <Text p={2} fontSize={"2xl"}> Back-End </Text>    
                    </CardHeader>

                    <CardBody>
                        <List color={"#EEEEEE"} fontSize={"lg"} >
                            <ListItem display={"flex"} gap={2}> <SiPython className="icon-centered" /> Python </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiKotlin className="icon-centered" color="#7F52FF"/> Kotlin </ListItem>
                            <ListItem display={"flex"} gap={2}> <SiSpringboot className="icon-centered" color="#6DB240" /> SpringBoot </ListItem>
                            <ListItem display={"flex"} gap={2}> <GiDatabase className="icon-centered" color="#FFFFFF"/> SQL </ListItem>
                        </List>
                    </CardBody>
                </Card>
            </HStack>


            <VStack py={10} bg={"#333333"} gap={3} my={5} justifyContent="center" flexWrap={"wrap"}>
            
                <Text color={"#EEEEEE"} borderBottom={"1px"} borderColor={"#555555"} fontSize="4xl" mx={"auto"}>Mis Proyectos</Text>
                <HStack  px={10} justifyContent={"center"} alignContent={"stretch"} flexWrap={"wrap"} gap={3}>

                    {projects.map((project) => {
                        return (
                        <Link to={project.url}>
                            <Card key={project.id} className="project-card" bg={"#111111"} maxW={"300px"} >
                                <CardHeader color={"#EEEEEE"} borderBottom="1px" borderColor={"#555555"}>
                                    <Image src={project.image} maxW={"200px"}  mx={"auto"} />
                                    <Text p={2} fontSize={"2xl"}> {project.title} </Text>    
                                </CardHeader>

                                <CardBody>
                                    <Text color={"#EEEEEE"} fontSize={"lg"}>{project.description}</Text>
                                </CardBody>
                            </Card>
                        </Link>
                        )
                    })}
                
                </HStack>
            </VStack>

        </Flex>
    )
}

export default Home