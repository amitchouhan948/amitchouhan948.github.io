import { Box, Button, Flex, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousal from './Carousal'
import Screenshot1 from "./zara/Screenshot1.png"
import Screenshot2 from "./zara/Screenshot2.png"
import Screenshot3 from "./zara/Screenshot3.png"
import Screenshot11 from "./unsplash/Screenshot1.png"
import Screenshot22 from "./unsplash/Screenshot2.png"
import Screenshot33 from "./unsplash/Screenshot3.png"
import Screenshot111 from "./nykaa/Screenshot1.png"
import Screenshot222 from "./nykaa/Screenshot2.png"
import Screenshot333 from "./nykaa/Screenshot3.png"
import Screenshot1111 from "./bitrix24/Screenshot1111.png"
import Screenshot2222 from "./bitrix24/Screenshot2222.png"
import Screenshot3333 from "./bitrix24/Screenshot3333.png"
import Aos from 'aos';
import 'aos/dist/aos.css';

 

 



const Project = () => {


useEffect(() => {
  Aos.init();
}, [])

  return (
    <>
    <Text  mt="80px" mb="20px" color={"red"} textDecoration="underline" fontSize="lg" fontWeight={"600"} textAlign="center">PROJECT</Text>
    <Box mt="20px" paddingBottom={"100px"} name="project">
    <SimpleGrid columns={[1,1,2]} w={"95%"} margin="auto" spacingX={"50px"} spacingY={"50px"} >

        {/* Poject 1 */}
        
          <Box padding={"3em"} borderRadius="40px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Carousel
                
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div >
                <img  style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot1111} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot2222} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px", position:"zIndex"}} src={Screenshot3333} alt="outlook1" />
              </div>
            </Carousel>
            </div>
            <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Box>
                <Text  style={{fontWeight:"600", padding:".5em"}} fontSize="20px">BITRIX24 CLONE</Text>
                <h2 style={{fontWeight:"600", padding:".5em"}}>About : Bitrix24 is a united work space which handles the many aspects of daily operations and tasks.</h2>
                <h2 style={{fontWeight:"600", padding:".2em" }}>Tech stack :</h2>
                <h2 style={{fontWeight:"400", padding:".5em", fontFamily:"Comic Sans MS, Comic Sans, cursive" }}>MongoDB | Express | React | Node.js | Chakra-UI</h2>
                <Flex ml={"10px"} columnGap={"40px"} >
                <Link href='https://github.com/amitchouhan948/possible-temper-2642' isExternal><Button position={"revert-layer"} width='120px'>Git</Button></Link>
                    <Link href='https://bitrix24in.netlify.app/' isExternal colorScheme="none" > <Button position={"revert-layer"} width='120px' color={"red"} textDecoration={"none"}>Demo</Button></Link>
                </Flex>
            </Box>
            </div>
        </Box>
        

            {/* Project 2 Unsplash */}
            <Box padding={"3em"} borderRadius="40px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
            <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
        <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div>
                <Image  style={{ borderRadius: "7px", height: "300px"}} src={Screenshot11} alt="outlook1" />
              </div>
              <div>
                <Image style={{ borderRadius: "7px", height: "300px"}} src={Screenshot22} alt="outlook1" />
              </div>
              <div>
                <Image style={{ borderRadius: "7px", height: "300px"}} src={Screenshot33} alt="outlook1" />
              </div>
            </Carousel>
            </div>

            <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Box>
                <Text style={{fontWeight:"600", padding:".5em"}} fontSize="20px">UNSPLASH CLONE</Text>
                <h2 style={{fontWeight:"600", padding:".5em"}}>About : Unsplash is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world.</h2>
                <h2 style={{fontWeight:"600", padding:".2em" }}>Tech stack :</h2>
                <h2 style={{fontWeight:"400", padding:".5em", fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>JavaScript | HTML | CSS | JSON-Server</h2>
                <Flex ml={"12px"} columnGap={"40px"} >
                <Link href='https://github.com/amitchouhan948/Unsplash-Project_U3' isExternal ><Button position={"revert-layer"} width='120px'>Git</Button></Link>
                    <Link href='https://shimmering-donut-1d044b.netlify.app/' isExternal colorScheme="none" > <Button position={"revert-layer"} width='120px' color={"red"} textDecoration={"none"}>Demo</Button></Link>
                </Flex>
            </Box>
            </div>


        </Box>

          {/* Project 3 */}

          <Box padding={"3em"} borderRadius="40px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Carousel
                
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div >
                <img  style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot111} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot222} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px", position:"zIndex"}} src={Screenshot333} alt="outlook1" />
              </div>
            </Carousel>
            </div>

            <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Box>
                <Text style={{fontWeight:"600", padding:".5em"}} fontSize="20px">NYKAA CLONE</Text>
                <h2 style={{fontWeight:"600", padding:".5em"}}>About : Specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes.</h2>
                <h2 style={{fontWeight:"600", padding:".2em" }}>Tech Stack:</h2>
                <h2 style={{fontWeight:"400", padding:".5em", fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>JavaScript | HTML | CSS</h2>
                <Flex ml={"10px"} columnGap={"40px"} >
                    <Link href='https://github.com/arupx3492/Nykaa-Clone' ><Button position={"revert-layer"} width='120px' isExternal>Git</Button></Link>
                    <Link href='https://famous-conkies-aaaea0.netlify.app/' isExternal colorScheme="none" > <Button position={"revert-layer"} width='120px' color={"red"} textDecoration={"none"}>Demo</Button></Link>
                </Flex>
            </Box>
            </div>
        </Box>

{/* Project 4 zara */}
        <Box padding={"3em"} borderRadius="40px"  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
          <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Carousel
                
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}>
              <div >
                <img  style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot1} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px" , position:"zIndex" }} src={Screenshot2} alt="outlook1" />
              </div>
              <div >
                <img style={{ borderRadius: "7px", height: "300px", position:"zIndex"}} src={Screenshot3} alt="outlook1" />
              </div>
            </Carousel>
            </div>
            <div data-aos="fade-up"data-aos-anchor-placement="top-center" data-aos-duration="3000">
            <Box>
                <Text  style={{fontWeight:"600", padding:".5em"}} fontSize="20px">ZARA CLONE</Text>
                <h2 style={{fontWeight:"600", padding:".5em"}}>About : Specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes.</h2>
                <h2 style={{fontWeight:"600", padding:".2em" }}>Tech stack :</h2>
                <h2 style={{fontWeight:"400", padding:".5em", fontFamily:"Comic Sans MS, Comic Sans, cursive" }}>REACT | React-Router-Dom | Chakra-ui | JSON-Server</h2>
                <Flex ml={"10px"} columnGap={"40px"} >
                <Link href='https://github.com/amitchouhan948/Zara_clone_project' isExternal><Button position={"revert-layer"} width='120px'>Git</Button></Link>
                    <Link href='https://zara-clone-cw.vercel.app/' isExternal colorScheme="none" > <Button position={"revert-layer"} width='120px' color={"red"} textDecoration={"none"}>Demo</Button></Link>
                </Flex>
            </Box>
            </div>
        </Box>


    </SimpleGrid>
    </Box>
    </>
  )
}

export default Project