import React from 'react'
import VideoOverlay from '../components/VideoOverlay/VideoOverlay'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import EmailFunnel from '../components/EmailFunnel/EmailFunnel'

export default function HomePage() {
  return (
    <HEAD>
      <script type="text/javascript">
        (function(g,r,s,f){g.grsfSettings={campaignId:"dn6my6",version:"2.0.0"};s=r.getElementsByTagName("head")[0];f=r.createElement("script");f.async=1;f.src="https://app.growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);!g.grsfInit?s.appendChild(f):"";})(window,document);
      </script>
    </HEAD>
    <div>
        <div style={{height:500,width:'100%',backgroundColor:'black'}}>
            <VideoOverlay
                src={require('../img/homepage.mov')}
                text="We provide access to premier investments in asset classes ranging from private equity to real estate."
            >
                <Link to="/About"  style={{textDecoration:'none'}}>
                    <Button size="large" style={{color:"black", fontWeight:'bolder', backgroundColor:'white'}}>
                        Learn More
                    </Button>
                </Link>
            </VideoOverlay>
        </div>
        <EmailFunnel
            title="Join the Waitlist."
            subtitle="Stay up to date on all the mainstreet news, including our 2024 launch."
        />
    </div>
  )
}
