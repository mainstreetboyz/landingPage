import React from 'react';
import Lottie from 'lottie-react';

import doneAnimationFile from './../../animations/done.json';

export default function DoneAnimation() {
  return (
    <div style={{ width: '200px', height: '200px'}}>
      <Lottie animationData={doneAnimationFile} style={{flex:1}} loop={false} />
    </div>
  )
}
