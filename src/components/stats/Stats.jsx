import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import styles from "./Stats.module.css"

const Stats=() => {
  return (
    <>
    <Text  mb="30px" color={"red"} textDecoration="underline" fontSize="lg" fontWeight={"600"} textAlign="center">Github Stats</Text>
     <Box width={["95%","80%", "65%"]}  margin='auto' mb='30px'>
    <GitHubCalendar width="100%" username="amitchouhan948" />
    </Box>
    <SimpleGrid columns={[2,2,4,4]} className={styles.stat} >
         <Box data-aos="fade-up"
                    data-aos-duration="1000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='large'>Coding</Text>
            </span>
        </Box>
        </Box>
   

         <Box data-aos="fade-up"
                    data-aos-duration="1800">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Github</Text>
             </span>
        <span>
            <Text fontSize='large'>Commits</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="2200">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color:'#facc15 '}}>3+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Projects</Text>
             </span>
        <span>
            <Text fontSize='large'>Done</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="3000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>110+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='large'>Soft skills</Text>
            </span>
        </Box>
        </Box>
        </SimpleGrid>
     <SimpleGrid columns={[1,1,2,3]} className={styles.stats}  >
         {/* <Box data-aos="fade-up"
                    data-aos-duration="1000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='large'>Coding</Text>
            </span>
        </Box>
        </Box>
   

         <Box data-aos="fade-up"
                    data-aos-duration="1800">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Github</Text>
             </span>
        <span>
            <Text fontSize='large'>Commits</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="2200">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color:'#facc15 '}}>3+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Projects</Text>
             </span>
        <span>
            <Text fontSize='large'>Done</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="3000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>110+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='large'>Soft skills</Text>
            </span>
        </Box>
        </Box> */}


    <Box margin="auto">
    <Image src="https://github-readme-stats.vercel.app/api?username=amitchouhan948"></Image>
    </Box>
    <Box margin="auto">
    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=amitchouhan948"></Image>
    </Box>
    <Box margin="auto">
    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=amitchouhan948&hide_border=false&include_all_commits=false&count_private=false&layout=compact"></Image>
    </Box>

    </SimpleGrid>
   
    </>
    
  )
}

export default Stats;