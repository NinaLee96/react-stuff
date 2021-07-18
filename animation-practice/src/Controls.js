import React, { useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend } from "react-three-fiber";


extend({ OrbitControls });


const Controls = () => {
  const { camera, gl } = useThree();


  return(
    <orbitControls
      args={ [camera, gl.domElement]}
    />
  )
  
}


export default Controls;