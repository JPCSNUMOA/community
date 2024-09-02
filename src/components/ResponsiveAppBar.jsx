import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import jLogo from "../../JPCS-LOGO.png";
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";


const pages = [ 
  {
    name: "Home",
    id: "home",
    href: "",
    location: "/JPCS-WEBSITE/"
  },
  {
    name: "About Us",
    id: "about",
    href: "",
    location: "/JPCS-WEBSITE/"
  },
  {
    name: "Events",
    id: "events",
    href: "#/events",
    location: "/JPCS-WEBSITE/#/events"
    
  },
  
];
 


function ResponsiveAppBar() {


 
  const [OnCurrent, setOnCurrent] = useState(true)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const goToScroll = (id, href) => {
    console.log(window.location.hash)
    if(window.location.hash==href){
      setOnCurrent(true)
       document.getElementById(id).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    else{

      window.location.replace(href)
    }

    console.log(OnCurrent)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" sx={{bgcolor: "primary"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex'}, mr: 1 }}>
            <img className='appbar-logo' src={jLogo}/>
          </Box>
          <Typography
            variant="h6"
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              textAlign: "center",
            }}
          >
              JPCS NU MOA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => { handleCloseNavMenu(); goToScroll(page.id, page.href)}}  >
                  <Typography sx={{fontWeight: "bold"}} textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img className='appbar-logo' src={jLogo}/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             JPCS&#40;NUMOA&#x29;
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: "flex-end", gap: "20px"}}>
            {pages.map((page) => (
              <motion.div
                  whileHover={{ scale: [null, 1.3, 1.2]}}>
                  <Button
                  key={page.name}
                  onClick={() => { handleCloseNavMenu(); goToScroll(page.id, page.href)}}

                  sx={{ my: 2, color: 'white', display: 'block', fontSize:"1rem", fontWeight: "bold" }}
              >
                {page.name}
              </Button>
              </motion.div>
              
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
