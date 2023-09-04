import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LinkedInLink({text=true,textColor='black'}) {
  return (
    <Link
    to="https://www.linkedin.com/company/themainstreetfund/about/"
    target="_blank"
    rel="noopener noreferrer"
    style={{textDecoration:'none',color:textColor}}
    >
        <div
            style={{display:'flex', alignItems:'center',flexDirection:'row'}}>
            <LinkedInIcon style={{fontSize:30}}/>
            {text&&<span style={{marginLeft:5, fontWeight:'bold'}}>themainstreetfund</span>}
        </div>
    </Link>
  )
}
