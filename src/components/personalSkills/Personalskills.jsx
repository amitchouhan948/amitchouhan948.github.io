import React from "react";
import { background, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import chakra from "./images/chak.jpg";
import css from "./images/css.jpg";
import express from "./images/express.png";
import html from "./images/html.jpg";
import javascript from "./images/javascript.jpg";
import mongodb from "./images/mongodb.png";
import nodejs from "./images/nodejs.png";
import rect from "./images/rect.png";


import  github    from "./images/github.png"
import  git  from "./images/git.jpg"
import  heroku    from "./images/heroku.png"
import  json    from "./images/json.png"
import   netlify  from "./images/netlify.png"
import  npm    from "./images/npm.png"
import   postman   from "./images/postman.jpg"
import   reducs   from "./images/reducs.jpg"
import  routerdom    from "./images/routerdom.png"
import   vercel  from "./images/vercel.jpg"
import  array   from "./images/array.gif"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const frontend = [
  
  {
    title: "HTML",
    logo: html,
  },
  {
    title: "CSS",
    logo: css,
  },
  {
    title: "JavaScript",
    logo: javascript,
  },

  {
    title: "React",
    logo: rect,
  },
  {
    title: "Chakra-ui",
    logo: chakra,
  },
];

const backend = [
  
  {
    title: "MongoDB",
    logo: mongodb,
  },
  {
    title: "ExpressJS",
    logo: express,
  },
  {
    title: "NodeJS",
    logo: nodejs,
  },
];


const tools=[
  
    {
      title: "Github",
      logo: github,
    },
    {
      title: "Git",
      logo: git,
    },
    {
      title: "Heroku",
      logo: heroku,
    },
    {
      title: "JSON-Server",
      logo: json,
    },
    {
      title: "Netlify",
      logo: netlify,
    },
    {
      title: "NPM",
      logo: npm,
    },
    {
      title: "Postman",
      logo: postman,
    },
    {
      title: "Redux",
      logo: reducs,
    },
    {
      title: "React-Router-Dom",
      logo: routerdom,
    },
    {
      title: "Vercel",
      logo: vercel,
    }
]


const dsa=[
  {
    title: "ARRAY",
    logo: array,
  },
  {
    title: "STACK",
    logo: array,
  },
  {
    title: "QUEUE",
    logo: array,
  },

  {
    title: "LINKED LIST",
    logo: array,
  },
  // {
  //   title: "RECURSION",
  //   logo: array,
  // },
]





const PersonalSkills = () => {

 
  
    useEffect(() => {
      Aos.init();
    }, [])
  
    




  return (
    <>
     <Text  mt="80px" mb="20px" color={"red"} textDecoration="underline" fontSize="lg" fontWeight={"600"} textAlign="center">SKILLS</Text>
     <Box name="skills" marginBottom={"100px"} width="95%" margin="auto" borderRadius={"50px"} mt={'20px'}  padding="50px 0 50px 0" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
      {/* <SimpleGrid columns={[1,1,2]} rowGap={"20px"} > */}
       
        <Box style={{width:"75%" ,marginLeft:"auto", marginRight:"auto" , marginBottom:"50px"  }} >
          
          <Text  fontWeight={600} border="5px solid #536174" padding="1em" textAlign="center" borderRadius={"20px"} marginBottom="20px" _hover={{background:"lightgreen"}}>Frontend Web Development</Text>
          <SimpleGrid columns={[2,2,3,4]} rowGap={"20px"} >{frontend.map((el)=>(<div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="2000"><Box  marginBottom={"20px"} ><img style={{width:"50px", borderRadius:"100%", objectFit:"contain", margin:"auto" }} src={el.logo} alt="logo" /><h3 style={{ fontWeight:"600",textAlign:"center"}}>{el.title}</h3></Box></div>))}</SimpleGrid>
        </Box>

        <Box style={{width:"75%", marginLeft:"auto", marginRight:"auto" , marginBottom:"50px"}}>
         
          <Text fontWeight={600} padding="1em" border={"5px solid #536174"} textAlign="center" borderRadius={"20px"} marginBottom="20px" _hover={{background:"lightgreen"}}>Backend Web Development</Text>
          <SimpleGrid columns={[2,2,3,4]} rowGap={"20px"} >{backend.map((el)=>(<div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="2000"><Box marginBottom={"20px"} ><img style={{width:"50px", borderRadius:"100%", objectFit:"contain", margin:"auto" }} src={el.logo} alt="logo" /><h3 style={{ fontWeight:"600",textAlign:"center"}}>{el.title}</h3></Box></div>))}</SimpleGrid>
        </Box>
        <Box style={{width:"75%", marginLeft:"auto", marginRight:"auto" , marginBottom:"50px"}}>
         
         <Text fontWeight={600} padding="1em" border={"5px solid #536174"} textAlign="center" borderRadius={"20px"} marginBottom="20px" _hover={{background:"lightgreen"}}>Data Structure & Algorithm</Text>
         <SimpleGrid columns={[2,2,3,4]} rowGap={"20px"} > {dsa.map((el)=>(<div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="2000"><Box marginBottom={"20px"} ><img style={{width:"50px", borderRadius:"100%", objectFit:"contain", margin:"auto" }} src={el.logo} alt="logo" /><h3 style={{ fontWeight:"600",textAlign:"center"}}>{el.title}</h3></Box></div>))}</SimpleGrid>
       </Box>
      {/* </SimpleGrid> */}

      <Box style={{width:"75%", marginLeft:"auto", marginRight:"auto" , marginBottom:"50px"}}>
      <Text fontWeight={600} padding="1em" border={"5px solid #536174"} textAlign="center" borderRadius={"20px"} marginBottom="20px" _hover={{background:"lightgreen"}}>TOOLS</Text>
      <SimpleGrid columns={[2,2,3,4]} rowGap={"20px"} > {tools.map((el)=>(<div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="2000"><Box  marginBottom={"20px"} ><img style={{width:"50px", borderRadius:"100%", objectFit:"contain", margin:"auto" }} src={el.logo} alt="logo" /><h3 style={{ fontWeight:"600",textAlign:"center"}}>{el.title}</h3></Box></div>))}</SimpleGrid>
      </Box>
    </Box>
    </>
    
  );
};

export default PersonalSkills;
