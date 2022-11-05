import logo from "./logo.svg";
import "./App.css";
import { Box, Image, Text } from "@chakra-ui/react";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import PersonalSkills from "./components/personalSkills/Personalskills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Box backgroundColor="smokewhite" height="1000px">
        <Box
          display="flex"
          justifyContent="space-around"
          width={"100%"}
          padding=".1em"
          backgroundColor={"white"}
          // backgroundColor='#536174'
         
          borderBottomRadius={"22px"}
          position={"fixed"}
          // position="absolute"
          marginTop={"-80px"}
          zIndex="1"
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
        >
          <Header width="200px" />
          <Navbar />
        </Box>

        <About />
        <Skills />
        <PersonalSkills />
        <Project />
        <Stats />
        <Contact />
        
      </Box>
    </>
  );
}

export default App;
