import { Container } from '@mui/material'
import React, {useRef} from 'react'
import logoText from "../LOGO-TEXT.svg"
import logo from "../LOGO-DESC.svg"
import { motion, useScroll, useTransform } from "framer-motion";

function AboutUs() {


    
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const textX= useTransform(scrollYProgress, [0,0.5,1], ["100%", "0%", "0%"]);
  const logoX= useTransform(scrollYProgress, [0,0.5, 1], ["-100%", "0%", "0%"]);

  return (
    <>
        <Container maxWidth sx={{height: "700px"}}>
            <div className='logo-contain'>
                <motion.div className='flex-center'  whileHover={{ scale: [null, 1.3, 1.2] }} transition={{ duration: 0.3 }}>
                    <motion.img className='logo-desc' src={logo}  style={{x: logoX}}/>
                </motion.div>
                <div className='logo-text-contain'>
                    <motion.img className='logo-text' src={logoText} style={{x: textX}}/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default AboutUs
