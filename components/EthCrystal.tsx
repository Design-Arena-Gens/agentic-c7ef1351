"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function EthCrystal() {
  const solidRef = useRef<Mesh>(null);
  const wireRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (solidRef.current) {
      solidRef.current.rotation.y = t * 0.25;
      solidRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.25;
      wireRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
  });

  return (
    <group>
      {/* Glow backlight */}
      <mesh position={[0, 0, -0.6]}
            scale={[2.4, 2.4, 0.2]}
            onUpdate={(self) => (self.renderOrder = -1)}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={0x00e5ff} transparent opacity={0.08} />
      </mesh>

      {/* Solid translucent crystal */}
      <mesh ref={solidRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={0x7c3aed}
          transmission={1}
          thickness={1.5}
          roughness={0.05}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.4}
        />
      </mesh>

      {/* Wireframe outline */}
      <mesh ref={wireRef}>
        <octahedronGeometry args={[1.005, 0]} />
        <meshBasicMaterial color={0x00e5ff} wireframe />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2.2} position={[5, 5, 6]} />
      <directionalLight intensity={1.2} position={[-6, -2, -4]} color={0x3c97ff} />
    </group>
  );
}
