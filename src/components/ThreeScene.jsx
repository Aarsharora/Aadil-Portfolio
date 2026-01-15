import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const ThreeScene = () => {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[-10, 10, 5]} intensity={1.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <Stars radius={150} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />

                    {/* Object removed as requested */}

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeScene;
