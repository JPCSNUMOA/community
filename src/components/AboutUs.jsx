import { Container } from '@mui/material'
import React, {useRef} from 'react'
import logoText from "../LOGO-TEXT.svg"
import logo from "../LOGO-DESC.svg"
import { motion, useScroll, useTransform } from "framer-motion";
import codePic from '../CODE-FUTURE.svg';

function AboutUs() {


    
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const textX= useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "-0%", "0%"]);
  const logoX= useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "0%"]);
  const logosc= useTransform(scrollYProgress, [0, 1], ["0.1", "1"]);


  return (
    <>
        <Container maxWidth sx={{height: "auto", mb: "50px"}}>
            <div className='logo-contain'>
                <motion.div className='flex-center'>
                    <motion.img className='logo-desc' src={logo} 
                     style={{x: logoX}}/>
                </motion.div>
                <div className='logo-text-contain'>
                    <motion.img className='logo-text' src={logoText} style={{x: textX}}/>
                </div>
            </div>
        </Container>

          <Container maxWidth className='code-future-contain' sx={{ boxShadow: "-2px -92px 37px -93px rgba(32,59,160,0.24)"}}>
            <img className='code-image' src={codePic}/>
            <Container sx={{height: "60%", display: "flex", flexDirection: "column", width: "90%", justifyContent: "space-around", py: "5%"}}>
                <div className='perks'>
                  <div className='perk-sub'><motion.li className='perk-list'  whileHover={{ scale: [null, 1.3, 1.2] }} whileTap={{ scale: [null, 1.3, 1.2] }}
                    transition={{ duration: 0.3 }}>Focuses on IT students</motion.li> </div>
                  <div className='perk-sub down'>Provides a platform tailored to the interests and <br/>needs of Information Technology students.</div>
                </div>
                <div className='perks'>
                  <div className='perk-sub'><motion.li className='perk-list'  whileHover={{ scale: [null, 1.3, 1.2] }} whileTap={{ scale: [null, 1.3, 1.2] }}
                    transition={{ duration: 0.3 }}>Collaborative environment</motion.li> </div>
                  <div className='perk-sub down'>Encourages teamwork and sharing of ideas  <br/>through interactive activities and projects.</div>
                </div>
                <div className='perks'>
                  <div className='perk-sub'> <motion.li className='perk-list'  whileHover={{ scale: [null, 1.3, 1.2] }} whileTap={{ scale: [null, 1.3, 1.2] }}
                      transition={{ duration: 0.3 }} >Skill development</motion.li> </div>
                  <div className='perk-sub down'>Aims to enhance IT-related skills while making  <br/>the learning experience fun and engaging.</div>
                </div>
            </Container>
        </Container>
   
        

    </>
  )
}

export default AboutUs
