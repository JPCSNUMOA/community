import { Button, Container, Typography, Modal, Box, Fade} from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React, { Component } from 'react'
import DataPage from './DataPage'
import { auth, googleProvider } from '../config/firebase'
import ResponsiveFooter from '../components/ResponsiveFooter'
import eventTitle from '../OUR_EVENTS.svg';
import nubie2024 from '../../public/events/NUBIE-2024.svg';
import yearend2024 from '../../public/events/YEAR-END-2024.svg';
import valentines2024 from '../../public/events/VALENTINE-2024.svg';
import research2024 from '../../public/events/RESEARCH-SEMINAR.svg';
import debugger2024 from '../../public/events/DEBUGGER-GAMES.svg';
import { motion } from 'framer-motion'
import { useState } from 'react'

const chapterStyle = {
  display: "block",
  width: "clamp(150px, 25vw, 200px)",
  textAlign: "center",
  color: "primary.main",
  fontWeight: "bold",
  border: "2px solid #1a2056",
  borderRadius: "20px",
  fontSize: "clamp(10px, 1.5vw, 15px)",
  marginTop: "1em",
}

const eventList = [nubie2024, yearend2024, valentines2024, research2024, debugger2024];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "clamp(200px, 70%, 400px)",
  height: "400px",
  bgcolor: 'background.default',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  textAlign: "center",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "9px 11px 0px 0px rgba(26,32,86,0.13)"

};
  

  function EventModal(props) {
    return(
      <>
        <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: {
            //Your style here....
          backgroundColor: 'rgba(0, 0, 0, 0.13)',
          
      },
    },
  }}
      
      >
       <Fade in={props.open}>
          <Box sx={style}>
            <div style={{width: "100%", color: "white", fontWeight: "bold", backgroundColor: "#1a2056", paddingTop: "20px", paddingBottom: "20px"}}>
              <motion.h3 
                  style={{margin: "0"}}
                  whileHover={{ scale: [null, 1.2, 1.2]}} 
                  whileTap={{ scale: [null, 1.1, 1.05]}}
                  >
                EVENT TITLE
              </motion.h3>
            </div>
            
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              EVENT DESCRIPTION
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </>
    )
  }

  function EventSelection() {
    const [Open, setOpen] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
      <>
        <Container maxWidth sx={{height: 'auto', display: "flex", flexDirection: "row", flexWrap: "wrap", padding: "0px", justifyContent: "space-around", alignItems: "center", mt: "5%"}}>
            {eventList.map((event)=>{
              return(
                <>

                  <EventModal open={Open} close={handleClose}/>
                  <motion.img onClick={handleOpen} whileHover={{ scale: [null, 1.1, 1.05]}} whileTap={{ scale: [null, 1.1, 1.05]}} src={event}  style={{ width: "clamp(150px, 25vw, 300px)", marginLeft: "3%", marginRight: "3%"}}/>

                 
                </>
              )
            })}
        </Container>
      </>
    )
  }

function EventsPage() {

  const googleSignIn = async () =>{
      try {
        await signInWithPopup(auth, googleProvider)
      } catch (error) {
        console.log(error)
      }
  }


  
  return (
    <>
        <Container maxWidth className='event-contain'>
          <div className='event-hero-contain'>
            <img className='event-hero-text' src={eventTitle}/>
            <Typography sx={{width: "clamp(100px, 70vw, 800px)", textAlign: "center",  fontSize: "clamp(10px, 1.5vw, 15px)", color: "primary.main"}}>
            JPCS NU MOA puts great time and effort into every event, ensuring they are both fun and educational. We create a collaborative environment open to all, not just IT students, where everyone can learn, connect, and grow together.
            </Typography>
            <Typography sx={chapterStyle}>
                Tune in for more events!
            </Typography>
          </div>
          <EventSelection/>
          <hr style={{borderStyle: "dashed", borderColor: "#1a2056", width: "80%"}}/>
        </Container>
        <ResponsiveFooter/>
      
    </>
  )
}

export default EventsPage
