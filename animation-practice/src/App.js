import React, { useRef, useState }from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import Box from './Box';

import './App.css';

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
  </Canvas>
  );
}

export default App;
