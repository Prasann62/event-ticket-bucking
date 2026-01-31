import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

function AnimatedShape() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(time / 2) / 4;
        meshRef.current.rotation.y = Math.cos(time / 2) / 4;
    });

    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.4}>
                <MeshDistortMaterial
                    color="#1d4ed8"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] lg:h-[800px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <AnimatedShape />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hero3D;
