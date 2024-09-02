import { Container, Typography } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import React, { Component } from 'react'
import DataPage from './DataPage'
import { auth, googleProvider } from '../config/firebase'





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
        <Container sx={{mt: "100px"}}>
          <Typography variant='h3' sx={{fontWeight: "bold", color: "primary.main"}}>Past Events</Typography>
          <button onClick={googleSignIn}>Sign in with Google</button>
          <hr/>
          
        </Container>
    </>
  )
}

export default EventsPage
