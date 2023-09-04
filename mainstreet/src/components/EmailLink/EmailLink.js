import React from 'react'
import { Link } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function EmailLink({text=true,textColor='black'}) {
  return (
    <Link
    to="mailto:info@themainstreetfund.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{textDecoration:'none',color:textColor}}
    >
        <div
            style={{display:'flex', alignItems:'center',flexDirection:'row'}}>
            <EmailOutlinedIcon style={{fontSize:30}}/>
            {text&&<span style={{marginLeft:5, fontWeight:'bold'}}>info@themainstreetfund.com</span>}
        </div>
    </Link>
  )
}
