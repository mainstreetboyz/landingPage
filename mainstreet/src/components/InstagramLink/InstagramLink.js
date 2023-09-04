import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';

export default function InstagramLink({text=true,textColor='black'}) {
  return (
    <Link
    to="https://www.instagram.com/mainstreetmemos/"
    target="_blank"
    rel="noopener noreferrer"
    style={{textDecoration:'none',color:textColor}}
    >
        <div
            style={{display:'flex', alignItems:'center',flexDirection:'row'}}>
            <InstagramIcon style={{fontSize:30}}/>
            {text&&<span style={{marginLeft:5, fontWeight:'bold'}}>@mainstreetmemos</span>}
        </div>
    </Link>
  )
}
