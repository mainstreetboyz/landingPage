import { Card, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { abtPageP1,abtPageP2,abtPageP3,abtPageP4,abtPageP5,abtPageP6,abtPageP7 } from './../img/index'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function AboutPage() {

  return (
      <div style={{height:680}}>
        <div style={{display:'flex'}}>
          <div style={{flex: 1, flexDirection:'row', padding:50}}>
            <div style={{fontSize: '18px',lineHeight: 1.5, width:'75%' }}>
              <p style={{fontSize:'6vh'}}>About Us</p>
              <p>We are a comprehensive private investing platform for asset classes ranging from private equity funds to multifamily real estate.</p>
              <p>We provide flexible capital for funds and high-level opportunities for investors.</p>
              <p>Minimums vary depending on asset class, but go as low as just $500, making private investments accessible to anyone.</p>
            </div>
          </div>
          <div style={{
              flex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
          }} class="image-section">
              <ImageList
                sx={{ flex:1, height:600, margin:2,overflow:'clip'}}
                variant="masonry"
                cols={3}
                gap={16}
              >
                {images.map((item) => (
                  <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
                ))}
              </ImageList>
          </div>
        </div>
      </div>
  )
}

const images = [
  {
    img: abtPageP1,
    title: '',
  },
  {
    img: abtPageP2,
    title: '',
  },
  {
    img: abtPageP3,
    title: '',
  },
  {
    img: abtPageP4,
    title: '',
  },
  {
    img: abtPageP5,
    title: '',
  },
  {
    img: abtPageP6,
    title: '',
  },
  {
    img: abtPageP7,
    title: '',
  },

]