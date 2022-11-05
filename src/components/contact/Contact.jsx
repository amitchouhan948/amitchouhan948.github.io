import React, {  useState,useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Box, Button, Flex, Hide, Image, Input, Link, Show, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import bg from "./image/email.png"
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
  
    message: ''
  });
  const [status, setStatus] = useState('');
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_x2yw01r', 'template_vi9ptcf', values, 'rtDiYcwa6UEkH1sk0')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
         
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }
 
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <>
    <SimpleGrid columns={[1,1,1,2]}  gap={4} className={styles.contact_form} id="contact">
      {/* left side copy and paste from work section */}
        <Hide below="lg" >
        <Box >
            <Image src={bg}  alt="bg" />

        </Box>
        </Hide>
     
      {/* right side form */}
      <Box  width="85%" m="auto" >
      {status && renderAlert()}
        <form  onSubmit={handleSubmit} >
          
           
                    <Text fontSize={"xl"} fontWeight="600">Contact Me </Text>
                <br/>
                <br/>
                
           

          <Input value={values.fullName} classname={styles.user} required={true}    onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name"/>
          <br/>
          <br/>
             <Input value={values.email} classname={styles.user}  required={true}    onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="abc@email.com"/>
            <br/>
            <br/>
          <Textarea value={values.message}  classname={styles.user} required={true}    onChange={handleChange} label="Your message here" name="message" placeholder="Your message please"/>
            <br/>
            <br/>
          <Button type="submit" value="Send" className={styles.button}>Send Email</Button>
         
          <Box
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
      </Box>
    </SimpleGrid>
<br></br>
<br></br>
    <Box padding="3em 3em .5em 3em"  backgroundColor="#536174">
      <Box >

      <Flex mb="20px" ><VscGithubInverted /><Link href="https://github.com/amitchouhan948" isExternal><Text color="white" ml={"12px"} mt="-5px" >Github</Text></Link></Flex>
      
      <Flex mb="20px" ><BsLinkedin /><Link href="https://www.linkedin.com/in/amit-singh-chouhan-b36a83224/" isExternal><Text color="white" ml={"12px"} mt="-5px">Linkedin</Text></Link></Flex>
      
      <Flex mb="20px" ><BsFillTelephoneFill/><Link href="tel:8090347154" ><Text color="white" ml={"12px"} mt="-5px">+91 8090347154</Text></Link></Flex>
      
      <Flex mb="20px" ><MdEmail /><Link href='mailto:amitchouhan948@gmail.com'><Text color="white" ml={"12px"} mt="-5px">amitchouhan948@gmail.com</Text></Link></Flex>
      
      <Flex mb="20px" ><Text color="white">Designed & Built by</Text><Text color={"red"} ml="5px">Amit Singh Chouhan</Text><Text ml="5px" color="white"> © 2022</Text></Flex >
      

      </Box>

    </Box>

    </>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message send successfully</p>
  </div>
)
export default Contact;












