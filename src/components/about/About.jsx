import {
  Box,
  Button,
  Flex,
  Hide,
  Image,
  Img,
  Show,
  SimpleGrid,
  StylesProvider,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import PROFILE from "./image/PROFILE.jpg";
import PROFILE from "./image/pic.jpg";
import Styles from "./about.module.css";
import Typical from "react-typical";
import Resume from "./image/Amit_Singh_Chouhan_resume.pdf";
import { FaLaptopCode } from "react-icons/fa";
import Wave from "./image/Wave.gif";
import { FaDownload } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import animate from "./image/animate.gif";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SimpleGrid
        name="about"
        columns={[1, 1, 2]}
        w="95%"
        margin="auto"
        justifyContent="space-between"
        marginTop={"80px"}
        boxShadow="lg"
        p="6"
        rounded="md"
        bg="white"
        backgroundImage={["none", "none", Wave]}
        backgroundSize="65%"
      >
        {/* <SimpleGrid name='about'  columns={[1, 1, 2]} w="95%" margin="auto"  justifyContent="space-between" marginTop={"120px"} boxShadow='lg' p='6' rounded='md' bg='white' backgroundSize="65%">     */}
        <Show below="md">
          <Box padding={"1em"} width="70%" m={"auto"}>
            <Image
              borderRadius={"50%"}
              src={PROFILE}
              width="400px"
              m={"auto"}
            />
          </Box>
        </Show>

        <Box
          height={"200px,auto,auto,auto"}
          width={["200-300", "auto", "auto", "600px"]}
          padding={"1em"}
          className={Styles.texts}
        >
          <Text
            color="#536174"
            fontWeight="700"
            fontSize={["x-large", "x-large", "x-lg", "xx-large"]}
          >
            Welcome to my Portfolio
          </Text>
          <Text
            fontWeight="700"
            color="#536174"
            fontSize={["x-large", "x-large", "x-lg", "xx-large"]}
          >
            Hi, I'm Amit Singh Chouhan
          </Text>
          {/* <Hide below='md'> */}
          <Text
            height={["50px", "auto", "auto", "auto"]}
            color={"orange"}
            display="flex"
            fontWeight="700"
            fontSize={["lg", "lg", "x-lg", "xx-large"]}
          >
            <Box paddingTop={"10px"} marginRight="12px">
              <FaLaptopCode color={"teal"} />
            </Box>
            <Typical
              loop={Infinity}
              steps={[
                "A Full Stack Web Developer",
                2500,
                "MERN Stack Developer",
                2500,
              ]}
            />
          </Text>
  
          <a href={Resume} download>
            {" "}
            <Button
              colorScheme={"blue"}
              position={"revert-layer"}
              mt={"2rem"}
              w={"120px"}
            >
              <Flex
                width="120px"
                _hover={{ color: "red" }}
                justifyContent={"space-between"}
              >
                <FaDownload /> Resume{" "}
              </Flex>
            </Button>
          </a>
        </Box>

        <Hide below="md">
          <Box padding={"1em"} width="70%" m={"auto"}>
            <Image
              borderRadius={"50%"}
              src={PROFILE}
              width="400px"
              m={"auto"}
            />
          </Box>
        </Hide>
      </SimpleGrid>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
      >

        <Flex flexDir={["column",'column','row',"row"]} alignItems="center" gap="40px"  width="95%" margin=" auto" mt="40px" p="10px 7% 20px 7%" 
        borderRadius="50px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <Img style={{  width: "200px" }} src={animate} />
          <Show above="md">
          <Box height="200px"  borderLeft={"2px dotted grey"}></Box>
          </Show>
          
          <Text color="#536174" style={{textAlign:"Center",fontWeight:"600" }}>My name is Amit Singh Chouhan, I am from Kanpur. 
          An enthusiastic Full Stack Web Developer with a strong set of technical 
          as well as non-technical skills and dedication towards creating useful and 
          interactive web applications. Ability to learn and collaborate in rapidly 
          changing environments and compositions. Worked through 1000+ hours of
           bootcamp structure learning in JavaScript, Node.Js, React.Js, MongoDB, 
           Express, HTML5, and CSS3.</Text>
        </Flex>


      </div>
    </>
  );
};

export default About;
