import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
// import chakra from "./images/chak.jpg"
// import css from "./images/css.jpg"
import express from "./images/express.png"
// import html from "./images/html.jpg"
// import javascript from "./images/javascript.jpg"
import mongodb from "./images/mongodb.png"
import nodejs from "./images/nodejs.png"
import rect from "./images/rect.png"
import Styles from "./skills.module.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

 

const skills=[
    {
        title:"MongoDB",
        logo:mongodb
    },
    {
        title:"Express",
        logo:express
    },
    {
        title:"React",
        logo:rect
    },
    {
        title:"NodeJS",
        logo:nodejs
    },
    
  
    
   
]



const Skills = () => {

   

      useEffect(() => {
        Aos.init();
      }, [])

   

  return (
    <>
    {/* <div  style={{backgroundColor:"yellow",marginTop:"1em", paddingTop:"5em" ,paddingBottom:"5em"}}> */}
    {/* <div  className={Styles.box}> */}
    <Text  mt="80px" mb="20px" color={"red"} textDecoration="underline" fontSize="lg" fontWeight={"600"} textAlign="center">TECH STACK</Text>
    <SimpleGrid name="tech-stack" columns={[2, 2, 2, 4]} spacing='40px'  width="95%" margin=" auto" borderRadius="50px" padding="40px 0 40px 0" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
           
           

           
            {
                skills.map((el)=>{

                    return(<div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="1000"><Box >
                        <img  style={{borderRadius:"50%", margin:"auto" ,width:"100px"}} src={el.logo}/>
                        <h3 style={{textAlign:"Center" }}>{el.title}</h3>
                    </Box></div>)
                })
            }



</SimpleGrid>
    {/* </div> */}
    {/* </div> */}

    </>
  )
}

export default Skills