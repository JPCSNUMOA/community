import React, {useRef} from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from "framer-motion";
import "../BANNER.svg"
import "../HERO-SHOT-PHOTO.png"
import "../HERO-SHOT-TEXT.svg"
import "../HOW-IT-STARTED.svg"
import "../../JPCS-LOGO.png"


const chapterStyle = {
  display: "block",
  width: "clamp(100px, 25vw, 200px)",
  textAlign: "center",
  color: "primary.main",
  fontWeight: "bold",
  border: "2px solid #1a2056",
  borderRadius: "20px",
  fontSize: "clamp(10px, 2vw, 18px)"
}

const JPCS_DESC = "JPCS NU MOA Chapter is a dynamic organization dedicated to empowering IT students. We create a collaborative and fun learning environment through interactive, tech-focused activities that help students develop essential IT skills."
const JPCS_DESC2 = "Our goal is to equip members with the knowledge and experience needed to succeed in the rapidly evolving tech industry while fostering a community of innovation and teamwork."

function HomePage() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const waveX = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const howY = useTransform(scrollYProgress, [0, 1], ["60%", "-80%"]);

  return (
   <>
      <Container className='gradient flex-center' maxWidth sx={{ width: '100%', height: '100%', zIndex: "10", bgcolor: "background.default", overflow: "hidden"}}>
      
               <div className='wave-contain'>
                  <motion.img className='waves' src='src\WAVES.svg'  style={{x: waveX, y: "-10%"}}/>
               </div>
               <motion.div className='flex-center' style={{y: textY}}>
                <img className='hero-shot-text' src='src\HERO-SHOT-TEXT.svg'></img>
                </motion.div>
             
              <motion.div className='flex-center' style={{y: subtextY}}>
                <Typography sx={chapterStyle}>
                  NU MOA CHAPTER
                </Typography>
                <Typography sx={{width: "clamp(100px, 50vw, 800px)", textAlign: "center",  fontSize: "clamp(10px, 1.5vw, 15px)", color: "primary.main"}}>
                  JPCS NU MOA Chapter empowers IT students by fostering a collaborative and engaging environment with interactive, tech-focused activities to build essential IT skills.
                </Typography>
                
              </motion.div>
              
              <motion.div className='flex-center hero-photo-div' style={{y: backgroundY}}>
                <img className='hero-shot-photo' src='src\HERO-SHOT-PHOTO.png'></img>
              </motion.div>
            
      </Container>

     
      
      <div  className= "div-block ">
              <p className='jpcs-desc'>{JPCS_DESC}</p>
      </div>

      <Box className= "flex-center">
        <img className='banner' src='src\BANNER.svg'></img>
      </Box>

      <div  className= "div-block ">
              <p className='jpcs-desc'>{JPCS_DESC2}</p>
      </div>
      <motion.div className= "flex-center" style={{y:howY}}>
        <img style={{width: "90svw"}} src='src\HOW-IT-STARTED.svg'/>
      </motion.div>
      <Container maxWidth sx={{bgcolor: "primary.main", height: "500px"}}>
        
      </Container>
   </>
    
  )
}

export default HomePage
