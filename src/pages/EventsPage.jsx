import { Button, Container, Typography } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React, { Component } from 'react'
import DataPage from './DataPage'
import { auth, googleProvider } from '../config/firebase'
import ResponsiveFooter from '../components/ResponsiveFooter'
import eventTitle from '../OUR_EVENTS.svg';

const chapterStyle = {
  display: "block",
  width: "clamp(150px, 25vw, 200px)",
  textAlign: "center",
  color: "primary.main",
  fontWeight: "bold",
  border: "2px solid #1a2056",
  borderRadius: "20px",
  fontSize: "clamp(10px, 1.5vw, 15px)",
  marginTop: "1em"
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
                    JPCS NU MOA Chapter empowers IT students by fostering a collaborative and engaging environment with interactive, tech-focused activities to build essential IT skills.
            </Typography>
            <Typography sx={chapterStyle}>
                Tune in for more events!
            </Typography>
          </div>
          
        </Container>
        <ResponsiveFooter/>
    </>
  )
}

export default EventsPage
