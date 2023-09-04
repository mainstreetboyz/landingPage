import React from 'react'

import { AppBar, Box, Container, Toolbar, Button } from '@mui/material'

import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import InstagramLink from '../InstagramLink/InstagramLink';
import LinkedInLink from '../LinkedInLink/LinkedInLink';
import EmailLink from '../EmailLink/EmailLink';

// Uncomment to add memos page
// const pages = ['About Us', 'Memos','Join Waitlist'];
const pages = ['About Us','Join Waitlist'];


export default function NavBar() {

  const routeSwitch = (buttonLabel) => {
    if (buttonLabel === pages[0]){
      return '/About'
    } 
    // else if (buttonLabel === pages[1]){
    //   return '/Memos'
    // }
    else if (buttonLabel === pages[1]){
      return '/Waitlist'
    }
    return "/"
  }

  return (
      <AppBar position="static" style={{background:"white"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
              <a href="/" rel="noreferrer">
                <Logo href="/" sx={{ display: { xs: 'none', md: 'flex' }}} />
              </a>
              <Box sx={{ flexGrow: 1, justifyContent:'end', display:'flex',alignItems:'center' }}>
                <InstagramLink text={false}/>
                <div style={{margin:5}}/>
                <LinkedInLink text={false}/>
                <div style={{margin:5}}/>
                <EmailLink text={false}/>
                {pages.map((page,index) => (
                  <Link key={index} to={routeSwitch(page)} style={{textDecoration:'none'}}>
                    <Button
                      color='primary'
                      variant={ page ==="Join Waitlist" ? 'contained': 'text'}
                      key={page}
                      sx={{ my: 2, fontWeight:700, display: 'block', marginLeft:1}}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}