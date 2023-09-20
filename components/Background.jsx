"use client"
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing"
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const starColor = "#AAAAAA";

const Star = ({ p }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(1, 15, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh rotation-x={0.35} ref={ref}>
      <icosahedronGeometry args={[0.03, 2, 0.03]} />
      <meshStandardMaterial color={starColor} emissive={starColor}/>
    </mesh>
  );
};

function Scene({ numStars = 150 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 8]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0001
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.2));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} key={i}/>);
  }

  return (
    <>
      {stars}
    </>
  );
}

export default function Background() {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 -z-50 backdrop-blur">
      <Canvas gl={{ antialias: false }}>
        <Scene />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300}/>
          <Noise opacity={0.02} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
