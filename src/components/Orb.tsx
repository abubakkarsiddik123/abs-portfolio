"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#cfbcff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

export default function Orb() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF00FF" />
        <spotLight position={[0, 10, 0]} intensity={1.5} color="#FF8A00" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
