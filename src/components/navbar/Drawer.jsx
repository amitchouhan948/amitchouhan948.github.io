import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Text,
  IconButton,
  LinkBox,
  color,
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from "./drawer.module.css"
import Resume from "./Amit_Singh_Chouhan_resume.pdf";



export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
      <>
          <Button size={"md"} m='auto'  onClick={onOpen}>
              <HamburgerIcon  />
          </Button>
          <Drawer
              width="100%"
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}


          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader backgroundColor='#536174'  textDecoration='underline'>
                    
                      <br/>
                      <br />
                      
                  </DrawerHeader>

                  <DrawerBody bg='blackAlpha.200'>
                      <Box>
                          <Box ><Text className={styles.text}  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='about' spy={true} offset={-100} smooth={true}>ABOUT ME</Link></Text></Box>
                          <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='tech-stack' spy={true} offset={-100}smooth={true}>TECH-STACK</Link></Text></Box>
                          <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='skills' spy={true} offset={-100}smooth={true}>SKILLS</Link></Text></Box>
                          <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='project' spy={true} offset={-100}smooth={true}>PROJECT-BLOGS</Link></Text></Box>
                          <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='contact' spy={true} offset={-100}smooth={true}>CONTACT ME</Link></Text></Box>

                      </Box>
                  </DrawerBody>

                  <DrawerFooter>
                      <Flex columnGap={7}>
                      <a href={Resume} download><Button backgroundColor='#536174' cursor="pointer" color="white" p="1.45rem"> RESUME </Button> </a>
                          <a href='https://github.com/amitchouhan948'>
                              <IconButton  size='lg'backgroundColor='#536174' icon={<FaGithub color='white'/>} />
                          </a>

                          <a href='https://www.linkedin.com/in/amit-singh-chouhan-b36a83224/'><IconButton size='lg'backgroundColor='#536174' icon={<FaLinkedin color='white' />} /></a>
                          
            
         


                      </Flex>
                  </DrawerFooter>
              </DrawerContent>
          </Drawer>
      </>
  )
}