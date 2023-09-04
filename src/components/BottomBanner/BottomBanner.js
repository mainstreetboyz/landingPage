import React from 'react'
import InstagramLink from '../InstagramLink/InstagramLink';
import EmailLink from '../EmailLink/EmailLink';
import LinkedInLink from '../LinkedInLink/LinkedInLink';


export default function BottomBanner() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@themainstreetfund.com'; // Replace with your email address
  };
  
  return (
      <div style={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        height:100,
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        padding:15
      }}>
        <InstagramLink textColor='white'/>
        <div style={{margin:10}}/>
        <EmailLink textColor='white'/>
        <div style={{margin:10}}/>
        <LinkedInLink textColor='white'/>
    </div>
  )
}
