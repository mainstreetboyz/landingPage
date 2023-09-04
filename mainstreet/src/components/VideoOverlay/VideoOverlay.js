import React from 'react';

export default function VideoOverlay({ text, src,poster='' , children}) {
  return (
    <div style={{ overflow: 'hidden', height: '100%', width: '100%', position: 'relative' }}>
      <video
        autoPlay
        loop
        muted
        src={src}
        poster={poster}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensure the video covers the entire container
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black overlay
          zIndex: 1, // Place it on top of the video
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '75%',
          fontSize: '4vw', // Use vw units for font size (relative to viewport width)
          color: 'white',
          // fontStyle:'italic',
          zIndex:1,
        }}
      >
        {text && <p style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{text}</p>}
        {children}
      </div>
    </div>
  );
}
