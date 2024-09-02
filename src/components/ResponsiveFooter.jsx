import { Box, Container, Icon, IconButton } from '@mui/material'
import React from 'react'
import jLogo from "../../JPCS-LOGO.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const jpcs_desc = "The Junior Philippine Computer Society NU MOA Chapter is a student organization at National University - MOA and an officially recognized branch of the Junior Philippine Computer Society National Incorporated. We aim to equip members with the skills to succeed in the tech industry, fostering innovation and collaboration."
const margin_zero = {
    margin: "0px"
}

const ResponsiveFooter = () => {
  return (
    <>
        <Container className='footer-contain'  maxWidth sx={{height: "auto", bgcolor: "primary.main", pb: "40px"}}>
            <div className='footer-wrapper'>
                <div className='footer-sub down'>
                <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <img className='appbar-logo' src={jLogo} />
                    <p className='footer-title'>JPCS NUMOA</p>
                </div>
                <div>
                    <p className='footer-desc'>
                        {jpcs_desc}
                    </p>
                </div>
                </div>
                <div className='footer-sub-mid' >
                    <p>Follow us!</p>
                    <div className='flex-row'>
                        <IconButton size='large'>
                             <FacebookIcon htmlColor='white' fontSize='inherit' />
                        </IconButton>
                        <IconButton size='large'>
                             <InstagramIcon htmlColor='white' fontSize='inherit'/>
                        </IconButton>
                    </div>
                </div>
                <div className='footer-sub'>
                    <p className='footer-title' style={{marginTop: "1.5rem"}}>Ready to collaborate? Let's connect!</p>
                    <p className='footer-desc'>For collaborations and partnerships, reach out to us at out gmail account — we'd love to hear from you!</p>
                    <div className='flex-row' style={{marginTop: "1em"}}><EmailIcon htmlColor='white'/> <a target="_blank" href='mailto:jpcs.numoa@gmail.com' className='email-link'><i>jpcs.numoa@gmail.com</i></a></div>
                </div>
            </div>
           
        </Container>
    </>
  )
}

export default ResponsiveFooter
