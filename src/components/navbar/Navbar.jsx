import { Box, Hide, Show, Text } from '@chakra-ui/react'
import React from 'react'
import DrawerExample from './Drawer'
import { Link } from 'react-scroll'
import Resume from "./Amit_Singh_Chouhan_resume.pdf";


const Navbar = () => {
  return (
    <>
    <Box  display="flex" justifyContent="space-between" gap={"40px"} >
    <Hide below="md">
    

    <Hide below='lg'>
    <Text cursor="pointer" _hover={{ color:"red", textDecoration:"underline" }} color={"grey" } mt="4" fontWeight="500" fontSize="l"><Link to="about" spy={true} smooth={true} offset={-100} >ABOUT</Link></Text>
    <Text cursor="pointer" _hover={{ color:"red", textDecoration:"underline" }} color={"grey" }  mt="4"fontWeight="500" fontSize="l"><Link to="tech-stack" spy={true} smooth={true} offset={-110}>TECH-STACK</Link></Text>
    <Text cursor="pointer" _hover={{ color:"red", textDecoration:"underline" }} color={"grey" }  mt="4" fontWeight="500" fontSize="l"><Link to="skills" spy={true} smooth={true} offset={-120}>SKILLS</Link></Text>
    <Text cursor="pointer" _hover={{ color:"red", textDecoration:"underline" }} color={"grey" }  mt="4" fontWeight="500" fontSize="l"><Link to="project" spy={true} smooth={true} offset={-120}>PROJECT</Link></Text>
    <Text cursor="pointer" _hover={{ color:"red", textDecoration:"underline" }} color={"grey" }  mt="4" fontWeight="500" fontSize="l"><Link to="contact" spy={true} offset={-100} smooth={true} >CONTACT</Link></Text>
    </Hide>
    
    <a href={Resume} download><Text _focus={"none"} _hover={{ color:"red", textDecoration:"underline" }} color={"grey" }  mt="4" fontWeight="500" fontSize="l">RESUME</Text>
            
          </a>
    </Hide>
    <Show below="lg">
    <DrawerExample />
    </Show>
    </Box>
    </>
  )
}

export default Navbar