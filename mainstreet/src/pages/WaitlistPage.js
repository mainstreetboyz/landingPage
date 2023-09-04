import { Container } from '@mui/material'
import React from 'react'
import EmailFunnel from '../components/EmailFunnel/EmailFunnel'
import VideoOverlay from '../components/VideoOverlay/VideoOverlay'

export default function WaitlistPage() {
  return (
      <div style={{backgroundColor: 'whitesmoke',height:600}}>
        <VideoOverlay
            src={require('../img/homepage.mov')}
            text=""
        >
          <div style={{all: 'revert'}}>
            <EmailFunnel
              title="Join the waitlist"
              subtitle="Stay up to date on all the mainstreet news, including our 2024 launch."/>
          </div>
        </VideoOverlay>
        
      </div>
  )
}
