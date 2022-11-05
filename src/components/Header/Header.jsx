import { Image, Text } from '@chakra-ui/react'
import React from 'react'

import web from "./image/Logo.png"
const Header = () => {
  return (
  <>
  
  {/* <Text color={"black"} fontWeight="extrabold" fontSize="xx-large" fontStyle="italic">
  
    Web Developer
    
    </Text> */}
      {/* <Image ml={["none","none","-50px","-100px"]}  borderRadius={"5px"} padding={"0px"} width="200px"  src={web}></Image> */}
  
      <Image   borderRadius={"5px"}  width="200px"  src={web}></Image>
  </>
  )
}

export default Header