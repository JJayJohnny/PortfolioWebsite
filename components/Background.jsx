"use client"
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect} from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import {useTheme} from "next-themes";

const starColorDark = "#AAAAAA";
const starColorLight = "#222222";

const Star = ({ p, color }) => {
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

  //random number between 0.01 and 0.05
  const size = Math.random() * (0.05 - 0.01) + 0.01;

  const emissiveIntensity = Math.random() * 5;

  return (
    <mesh rotation-x={0.35} ref={ref}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissiveIntensity}/>
    </mesh>
  );
};

function Scene({ numStars = 200 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 8]);
  const time = useTime();

  const {systemTheme, theme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0001
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} color = {currentTheme == "dark" ? starColorDark : starColorLight} key={i}/>);
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
      </Canvas>
    </div>
  );
}
