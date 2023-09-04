import React from 'react';
import Lottie from 'lottie-react';

import loadingAnimationFile from './../../animations/Loading.json'

export default function LoadingAnimation() {
  return (
    <div style={{ width: '50px', height: '50px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Lottie animationData={loadingAnimationFile} style={{ width: '75px', height: '75px' }} loop={true} />
      </div>
    </div>
  )
}
