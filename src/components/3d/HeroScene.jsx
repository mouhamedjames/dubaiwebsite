import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import LightningBolt from './Lightning3D';

const HeroScene = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
                    <spotLight position={[-10, 0, -10]} intensity={2} color="#0088ff" />

                    <LightningBolt position={[0, 0, 0]} />

                    <ContactShadows resolution={512} scale={10} blur={2.5} opacity={0.5} far={10} color="#000" />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
