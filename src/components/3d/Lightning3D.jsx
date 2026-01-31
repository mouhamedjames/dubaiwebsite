import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';

const LightningBolt = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.y = t * 0.4;
        meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    });

    return (
        <group {...props}>
            <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[2, 0]} /> {/* Techy Geometric Core */}
                    <MeshDistortMaterial
                        color="#FFD700"
                        emissive="#FFEA00"
                        emissiveIntensity={0.5}
                        roughness={0.2}
                        metalness={1}
                        wireframe
                        distort={0.3}
                        speed={2}
                    />
                </mesh>

                {/* Inner Solid Core */}
                <mesh scale={[0.8, 0.8, 0.8]}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshBasicMaterial color="#0a192f" />
                </mesh>
            </Float>
            <Sparkles count={80} scale={8} size={6} speed={0.4} opacity={0.8} color="#FFD700" />
        </group>
    );
};

export default LightningBolt;
