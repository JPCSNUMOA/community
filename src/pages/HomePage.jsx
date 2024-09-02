import React, {useRef} from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from "framer-motion";
import banner from "../BANNER.svg"
import hrPhoto from "../HERO-SHOT-PHOTO.png"
import hrText from "../HERO-SHOT-TEXT.svg"
import hiStarted from "../HOW-IT-STARTED.svg"
import wave from "../WAVES.svg"
import slogan from "../SLOGAN.svg"
import AboutUs from '../components/AboutUs';
import ResponsiveFooter from '../components/ResponsiveFooter';





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
const SLOGAN_DESC = `"Code Your Future" is JPCS's call to empower IT students. With hands-on coding, tech skills, and innovative opportunities, you shape your career and lead in the ever-evolving tech world.`
function HomePage() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });


  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const subtextY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  const waveX = useTransform(scrollYProgress, [0, 1], ["-22%", "50%"]);
  const howY = useTransform(scrollYProgress, [0,0.3,1], ["80%", "10%", "10%"]);

  return (
   <>
      <div>
            <Container className='gradient flex-center' maxWidth sx={{ width: '100%', height: '100%', zIndex: "10", bgcolor: "background.default", overflow: "hidden"}}>
        
                <div className='wave-contain'>
                    <motion.img className='waves' src={wave}  style={{x: waveX, y: "-10%"}} />
                </div>
                <motion.div id='home' className='flex-center' style={{y: textY}}>
                  <img className='hero-shot-text' src={hrText}></img>
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
                  <img className='hero-shot-photo' src={hrPhoto}></img>
                </motion.div>
              
        </Container>

      
        
        <div  className= "div-block ">
                <p className='jpcs-desc'>{JPCS_DESC}</p>
        </div>

        <Box  className= "flex-center">
          <img className='banner' src={banner}></img>
        </Box>

        <div id='about' className= "div-block ">
                <p className='jpcs-desc'>{JPCS_DESC2}</p>
        </div>

        <motion.div  className= "flex-center margin-change" style={{y:howY, zIndex: "-10"}}>
          <img style={{width: "90svw"}} src={hiStarted}/>
        </motion.div>


        <Container className='slogan-contain'  maxWidth sx={{ bgcolor: "primary.main", height: "auto", mt: {xs: "0px", md: "0px"}, display: "flex", flexDirection: {xs: "column", md: "column", lg: "row", }, py: "50px", zIndex:"10"}}>
            <motion.img className='slogan' src={slogan} whileHover={{ scale: [null, 1.3, 1.2] }} whileTap={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.3 }}/>
            <p className='slogan-desc'>
              {SLOGAN_DESC}
            </p>
        </Container>
      </div>
      <AboutUs/> 
      <ResponsiveFooter/>
   </>
    
  )
}

export default HomePage
